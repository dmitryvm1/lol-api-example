import { MatchParticipantDetails } from "../MatchParticipantDetails/MatchParticipantDetails"

export function buildParticipantArrayForTeam(t) {
    const keys = Object.keys(t)
    const blue_team = [0, 1, 2, 3, 4]
    const free_slots = [0, 1, 2, 3 , 4]
    for (const k of keys) {
        if(k == "Top") {blue_team[0] = t[k]} else
        if(k == "Middle") {blue_team[1] = t[k]} else
        if(k == "Jungle") {blue_team[2] = t[k]} else
        if(k == "Bottom") {blue_team[3] = t[k]} else
        if(k == "Support") {blue_team[4] = t[k]} else
        {
            let i = 0
            while(typeof blue_team[i] !== 'number') {
                i++;
            }
            blue_team[i] = t[k]
        }
    }
    return blue_team
}

export const MatchDetails = (props) => {
    const players_team = props.match.teams[props.match.team_idx]
    const playerTeamColor = props.match.team_idx == 0 ? "Blue" : "Red"
    const opponentTeamColor = props.match.team_idx != 0 ? "Blue" : "Red"
    const playerClass = props.match.team_idx == props.match.winner ? " victory" : " defeat"
    const blueOutcome = props.match.team_idx == props.match.winner ? " Victory" : " Defeat"
    const opponentClass = props.match.team_idx != props.match.winner ? " victory" : " defeat"
    const redOutcome = props.match.team_idx != props.match.winner ? " Victory" : " Defeat"
    const opponent_team = props.match.teams[props.match.team_idx == 0 ? 1 : 0]
    let maxDamageDealt = 0
    let maxDamageTaken = 0
    // There may be less than 5 team members and keys may be different from below
    // thats why we don't use top mid etc and just iterate keys
    const keys = Object.keys(players_team)
    // const roles = ['Top', 'Middle', 'Jungle', 'Bottom', 'Support']
    for(const k of keys) {
        if(players_team[k].damage_dealt > maxDamageDealt) {
            maxDamageDealt = players_team[k].damage_dealt
        }
        if(players_team[k].damage_taken > maxDamageTaken) {
            maxDamageTaken = players_team[k].damage_taken
        }
    }
    const opponent_keys = Object.keys(opponent_team)
    for(const k of opponent_keys) {
        if(opponent_team[k].damage_dealt > maxDamageDealt) {
            maxDamageDealt = opponent_team[k].damage_dealt
        }
        if(opponent_team[k].damage_taken > maxDamageTaken) {
            maxDamageTaken = opponent_team[k].damage_taken
        }
    }
    
    let blue_team = buildParticipantArrayForTeam(players_team).map((item, idx) => {
        return (
            <tr className="team-row" key={String(idx)}>
                <MatchParticipantDetails player={item} maxDamageTaken={maxDamageTaken} maxDamageDealt={maxDamageDealt} />
            </tr>
        )
    })
    let red_team = buildParticipantArrayForTeam(opponent_team).map((item, idx) => {
        return (
            <tr className="team-row" key={String(idx)}>
                <MatchParticipantDetails player={item} maxDamageTaken={maxDamageTaken} maxDamageDealt={maxDamageDealt} />
            </tr>
        )
    })

    return (
        <div>
            <div className="details-container">
                <table className={`player-team${playerClass}`}>
                    <thead>
                        <th>{blueOutcome} ({playerTeamColor} Team)</th>
                        <th>KDA</th>
                        <th>Damage (dealt, taken)</th>
                        <th>CS</th>
                        <th>Items</th>
                    </thead>
                    <tbody>
                       {blue_team}
                    </tbody>
                </table>
                <div className="details-mid">
                    <div></div>
                    <div></div>
                </div>
                <table className={`opponent-team${opponentClass}`}>
                    <thead>
                        <th>{redOutcome} ({opponentTeamColor} Team)</th>
                        <th>KDA</th>
                        <th>Damage</th>
                        <th>CS</th>
                        <th>Items</th>
                    </thead>
                    <tbody>
                        {red_team}
                    </tbody>
                </table>
            </div>
        </div>
    )
}