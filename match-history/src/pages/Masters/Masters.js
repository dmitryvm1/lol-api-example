import React from "react";
import { PageTemplate } from "components/PageTemplate/PageTemplate";
import constants from "./constants";
import './index.scss'
import { RegionSelect } from "components/RegionSelect/RegionSelect";


const Champion = (id, imgid, region) => {
    return (
        <div draggable="false" className="champion_item" key={id}>
            <a href={`/app/masters/${region}/champions/${id}`}>
                <img draggable="false" title={id} src={`/images/${imgid}`} />
            </a>
        </div>
    )
}

export default class Masters extends React.Component {
    constructor(props) {
        super(props)
        const regionInitial = localStorage.getItem('region') || "EUNE"
        this.state = {
            region: regionInitial,
            championFilter: ''
        }
    }

    componentDidMount = () => {

    }

    setChampionFilter = (e) => {
        this.setState({championFilter: e.target.value})
    }

    setRegion = (e) => {
        this.setState({region: e.target.value})
    }
    render() {
        
        const championIds = Object.keys(constants.CHAMPIONS)
        const champions = championIds.filter(id => {
            let name = constants.CHAMPIONS[id].name
            return name.toLowerCase().indexOf(this.state.championFilter.toLowerCase()) != -1
        }, this).map(id => {
            return Champion(id, constants.CHAMPIONS[id].imgid, this.state.region)
        })
        const nav = [
            {title:"Match History", href: "/app/matches"},
            {title:"Champion Masters", href: "/app/masters"},
            {title:"Blog", href: "/"},
            {title:"About", href: "/about"},
          ]
          return (
            <PageTemplate nav={nav} logo="League Observer" logoShort="L O">
                <section className="root">
                    <div className="region">
                    </div>
                    <div className="champion_filter">
                        <input autoFocus className="text-input" onKeyUp={this.setChampionFilter} />
                        <span> Region: </span>
                        <RegionSelect value={this.state.region} onChange={this.setRegion} />
                    </div>
                    <div draggable="false" className="wrap">
                        <div draggable="false" className="champion_container">
                            {champions}
                        </div>
                    </div>
                </section>
            </PageTemplate>
        );
    }
};

