import React from 'react';
import { champions} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const ParticipantSmall = (props) => {
    const sid = String(props.champion)
    if(!champions[sid]) {
        console.log("Unknown champion: ", sid)
        return null
    }
    let { sprite, x, y, w, h, name } = champions[sid]
    const style = spriteCss(sprite, x, y, w, h, 0.33333)
    return (
        <div className="participant-small">
            <div className="smch" style={style} title={name} />
            <div className="pnsm"><a onClick={() => props.onSummonerClick ? props.onSummonerClick(props.name) : undefined}>{props.name}</a></div>
        </div>
    )
}