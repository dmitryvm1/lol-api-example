import React from 'react'
import { buildParticipantArrayForTeam } from '../MatchDetails/MatchDetails'
import { ParticipantSmall } from '../ParticipantSmall/ParticipantSmall'

export const TeamParticipantsSmall = (props) => {
    let items = buildParticipantArrayForTeam(props.team).map((item, idx) => {
        return (
            <ParticipantSmall key={item.summoner_name} onSummonerClick={props.onSummonerClick} champion={item.champion_id} name={item.summoner_name} />
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}