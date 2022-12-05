import './Match.scss';
import { Match } from '../../components/Match/Match';
import { MatchDetails } from '../../components/MatchDetails/MatchDetails';
import { SummonerRank } from '../../components/SummonerRank/SummonerRank';
import {PageTemplate} from '../../components/PageTemplate/PageTemplate';
import '../../App.css';
import React, {useState} from 'react';
import { initSpriteMetadata } from '../../spriteLoader';
import loading from '../../img/loading.gif'
// import {list} from './data'
import axios from 'axios'
import { RegionSelect } from '../../components/RegionSelect/RegionSelect';

const MatchBox = (props) => {
    let [expanded, setExpanded] = useState(false)
    return (
       <React.Fragment>
            <Match match={props.match} onSummonerClick={props.onSummonerClick} onExpand={() => setExpanded(!expanded) }></Match>
            {expanded ? <MatchDetails match={props.match}></MatchDetails> : null }
        </React.Fragment>
  
    )
  }

const display = (state) => {
  return state.data.last_update && !state.error && !state.loading && state.summoner.length > 0
}

export default class Matches extends React.Component {
    constructor(props) {
      
      // Required step: always call the parent class' constructor
      super(props);
      const m = /^\/app\/matches\/([A-Z]+)\/(.+)/.exec(window.location.pathname)
      let summoner = ''
      let region = localStorage.getItem('region') || "EUNE"
      if(m && m.length > 2) {
        summoner = decodeURI(m[2])
        region = decodeURI(m[1])
      }
      // Set the state directly. Use props if necessary.
      this.state = {
        summoner: summoner,
        loading: false,
        region: region,
        data: {
          matches: []
        }
      }
    }
    componentDidMount = () => {
      this.setState({loaded: false})
      // If summoner name is set
      if(this.state.summoner.length > 0) {
        this.loadHistory(this.state.summoner, this.state.region)
      }
      window.addEventListener('popstate', this.onPopState);
      
      initSpriteMetadata(() => {
        this.setState({loaded: !this.state.loaded})
      })
    }

    onPopState = (param) => {
      if(!param || !param.state) {
        return
      }
      this.loadHistory(param.state.summoner, param.state.region, true)
    }

    componentWillUnmount = () => {
      window.removeEventListener('popstate', this.onPopState)
    }
  
    loadHistory = (summoner, region, dontpush, _force = false) => {
      if(!region) {
        region = this.state.region
      }
      const _this = this
      this.setState({name: summoner, loading: true, error: false, data: {
        matches: []
      }})
      // window.location.pathname = '/app/matches/EUNE/' + summoner
      let force = _force ? '?force=true' : '?force=false'
      
      axios.get(`/api/${region}/summoners/` + summoner + force)
      .then(function (response) {
        if(!dontpush) {
          window.history.pushState({region: region, summoner},"", `/app/matches/${region}/` + summoner);
        }
        // response.data.matches.length - if 0 set an additional state variable for showing no matches message
        _this.setState({
          summoner,
          name: summoner,
          loading: false,
          error: false,
          data: response.data
        })
      })
      .catch(function (error) {
        // handle error
        _this.setState({loading: false, error: error.response.data.message})
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
    setRegion = (e) => {
      this.setState({region: e.target.value});
      localStorage.setItem('region', e.target.value)
    }
    render() {
      
    //   const matches = list.map((m, i) => {
    //     return <div key={String(i)} className="feed-entry" >
              
    //           <MatchBox match={m} />
    //     </div>
    //   })
      const matches_dyn = (this.state.data.matches.map((m, i) => {
        // TODO: get the match id instead of start , needed as unique match related key
        return <div key={String(m.start)} className="feed-entry" >
              <MatchBox match={m} onSummonerClick={this.loadHistory} />
        </div>
      })) 
      const content = <div className="App" >
        <div className="match-history-container" >
            <div className='search-box'>
              <input type="text" value={this.state.summoner} onChange={(e) => this.setState({summoner: e.target.value})}/>
              <RegionSelect value={this.state.region} onChange={this.setRegion} />
              <button onClick={()=> this.loadHistory(this.state.summoner)} style={{padding:"5px"}}>Search</button>
            </div>
            <h1>{this.state.name}</h1>
            <div className='mh-header'>
              <SummonerRank summoner={this.state.data} />
              {display(this.state) && <div className='update'>
                <button onClick={() => this.loadHistory(this.state.summoner, this.state.region, true, true)}>Update</button>
                <p>last time changed: {new Date(this.state.data.last_update).toDateString()}</p>
              </div>}
            </div>
          <div className="matches">
            { this.state.loading ? <img className="loading" src={loading} width="140" height="140" /> : 
            ( this.state.error ? <p className="error">{this.state.error}</p> : (display(this.state) && this.state.data.matches.length == 0 ? <p>No recent matches.</p> : matches_dyn)) }
          </div>
        </div>
      </div>;

      const nav = [
        {title:"Match History", href: "/app/matches"},
        {title:"Champion Masters", href: "/app/masters"},
        {title:"Blog", href: "/"},
        {title:"About", href: "/about"},
      ]
      return (
        <PageTemplate nav={nav} logo="League Observer" logoShort="L O">
          {content}
        </PageTemplate>
      )
    }
  }
  
  