import { Champion_48x48 } from "../Champion_48x48/Champion_48x48"
import { SummonerSpells_22x22 } from "../SummonerSpells_22x22/SummonerSpells_22x22"
import { Perks_22x22 } from "../Perks_22x22/Perks_22x22"
import { PlayerItems_22x22 } from "../PlayerItems_22x22/PlayerItems_22x22"
import { TeamParticipantsSmall } from "../TeamParticipantsSmall/TeamParticipantsSmall"

export const Match = (props) => {
    const team_idx = props.match.team_idx
    const role = props.match.player_role
    const player = props.match.teams[team_idx][role]
    const won = props.match.winner === props.match.team_idx
    let cls = "match-entry"
    if (won) {
        cls = cls + " victory"
    } else {
        cls = cls + " defeat"
    }
    return (
        <div className={cls}>
            <div className="vertical">
                <div className="horizontal">
                    <div className="left">
                        <div className="side"></div>
                        <div className="mode-c">
                            <div className="mode">{props.match.qtype === "CLASSIC" ? "Ranked Solo" : "Unknown"}</div>
                            <div className="when">{`${new Date(props.match.start).toDateString()}`}</div>
                            <div className="outcome">{won ? "Victory" : "Defeat"}</div>
                            <div className="len">{`${Math.trunc(props.match.duration / 60)}m ${props.match.duration % 60}s`}</div>
                        </div>
                    </div>
                    <div className="player-overview">
                        <div className="prow1" style={{"marginBottom":"0.3em"}}>
                            <div className="champion" >
                                <Champion_48x48 id={props.match.player_champion} />
                            </div>
                            <div className="overview">
                                <div className="spells-perks">
                                    <SummonerSpells_22x22 left={player.left_summoner_spell} right={player.right_summoner_spell} />
                                    <Perks_22x22 primary={player.primary_talent} secondary={player.secondary_talent} />
                                </div>
                                <div className="kda">
                                    <span className="k_">{player.kills} /&nbsp;</span>
                                    <span className="d_">{player.deaths}</span>
                                    <span className="a_">&nbsp;/ {player.assists}</span>
                                </div>
                            </div>
                        </div>
                        <div className="prow2">
                            <PlayerItems_22x22 items={player.items} />
                        </div>
                    </div>
                    <div className="participants">
                        <div className="col-p-team">
                            <TeamParticipantsSmall onSummonerClick={props.onSummonerClick} team={props.match.teams[props.match.team_idx]} />
                        </div>
                        <div className="col-o-team">
                            <TeamParticipantsSmall onSummonerClick={props.onSummonerClick} team={props.match.teams[props.match.team_idx == 0 ? 1 : 0]} />
                        </div>
                    </div>
                    <div className="action" onClick={props.onExpand}>
                        <i className="arrow adown" style={{"opacity": "50%"}}>

                        </i>
                    </div>
                </div>
                
            </div>


        </div>

    )
}