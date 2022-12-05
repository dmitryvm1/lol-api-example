import React from 'react'
import { Champion_32x32 } from "../Champion_32x32/Champion_32x32"
import { SummonerSpells_16x16 } from "../SummonerSpells_16x16/SummonerSpells_16x16"
import { Perks_16x16 } from "../Perks_16x16/Perks_16x16"
import { PlayerItems_22x22 } from "../PlayerItems_22x22/PlayerItems_22x22"

export const MatchParticipantDetails = (props) => {
    const player = props.player
    const dmgDealtStyle = { "width": `${Math.trunc(props.player.damage_dealt / props.maxDamageDealt * 100)}%` }
    const dmgTakenStyle = { "width": `${Math.trunc(props.player.damage_taken / props.maxDamageTaken * 100)}%` }

    return (
        <React.Fragment>
            <td>
                <div className="prow1">
                    <div className="champion">
                        <Champion_32x32 id={player.champion_id} />
                    </div>
                    <div className="overview">
                        <div className="spells-perks">
                            <SummonerSpells_16x16 left={player.left_summoner_spell} right={player.right_summoner_spell} />
                            <Perks_16x16 primary={player.primary_talent} secondary={player.secondary_talent} />
                        </div>
                    </div>
                    <div className="exp-player-name">
                        {player.summoner_name}
                    </div>
                </div>
            </td>
            <td className="td-kda">{player.kills} / {player.deaths} / {player.assists}</td>
            <td className="td-damage">
                <div>
                    <div className="vertical">
                        <div className="td-dmg-txt">{player.damage_dealt}</div>
                        <div className='dmg-container'><div className="dealt" style={dmgDealtStyle}></div></div>
                    </div>
                    <div className="vertical">
                        <div className="td-dmg-txt">{player.damage_taken}</div>
                        <div className='dmg-container'><div className="taken" style={dmgTakenStyle}></div></div>
                    </div>
                </div>
            </td>
            <td className="td-cs">{props.player.cs}</td>
            <td className="exp-items"><PlayerItems_22x22 items={props.player.items} /></td>
        </React.Fragment>
    )
}