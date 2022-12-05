import React from 'react'
import './style.scss'
import iron from '../../img/Emblem_Iron_sm.png'
import bronze from '../../img/Emblem_Bronze_sm.png'
import silver from '../../img/Emblem_Silver_sm.png'
import gold from '../../img/Emblem_Gold_sm.png'
import platinum from '../../img/Emblem_Platinum_sm.png'
import diamond from '../../img/Emblem_Diamond_sm.png'
import master from '../../img/Emblem_Master_sm.png'
import grandmaster from '../../img/Emblem_Grandmaster_sm.png'
import challenger from '../../img/Emblem_Challenger_sm.png'

const emblem = {
    'IRON': iron,
    'BRONZE': bronze,
    'SILVER': silver,
    'GOLD': gold,
    'PLATINUM': platinum,
    'DIAMOND': diamond,
    'MASTER': master,
    'GRANDMASTER': grandmaster,
    'CHALLENGER': challenger
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const SummonerRank = (props) => {
    if(!props.summoner.tier) {
        return null
    }
    const tier = capitalizeFirstLetter(props.summoner.tier.toLowerCase())
    let division = ''
    if(props.summoner.division > 0) {
        switch(props.summoner.division) {
            case 1: division = 'I'; break;
            case 2: division = 'II'; break;
            case 3: division = 'II'; break;
            case 4: division = 'IV'; break;
            default: 
            break;
        }
    }
    if(tier == 'Challenger' || tier === 'Master' || tier == 'Grandmaster') {
        division = ''
    }
    const rankImg = emblem[props.summoner.tier]
    return (
        <div className="summoner-rank">
            {rankImg ? (<div>
                <img src={rankImg} />
            </div>) : null}
            <div className="rank">
                <div className="tier">{tier} {division}</div>
                <div className="lp">{props.summoner.league_points} lp</div>
                <div className="winloss">
                    {props.summoner.wins}W {props.summoner.losses}L
                </div>
            </div>
        </div>
    )
}