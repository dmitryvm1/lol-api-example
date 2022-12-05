import {summoners} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const SummonerSpells_22x22 = (props) => {
    const sleft = String(props.left)
    const sright = String(props.right)
    let { x, y, w, h } = summoners[sleft]
    const leftStyle = spriteCss("spell0.png", x, y, w, h, 0.5);
    ({ x, y, w, h } = summoners[sright]);
    const rightStyle = spriteCss("spell0.png", x, y, w, h, 0.5)
    return (<div>
        <div style={leftStyle} />
        <div style={rightStyle} />
    </div>)
}