import {summoners} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const SummonerSpells_16x16 = (props) => {
    const sleft = String(props.left)
    const sright = String(props.right)
    let { x, y, w, h } = summoners[sleft]
    const leftStyle = spriteCss("spell0.png", x, y, w, h, 0.3333);
    ({ x, y, w, h } = summoners[sright]);
    const rightStyle = spriteCss("spell0.png", x, y, w, h, 0.3333)
    return (<div>
        <div style={leftStyle} />
        <div style={rightStyle} />
    </div>)
}