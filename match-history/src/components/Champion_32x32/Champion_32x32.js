import {champions} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const Champion_32x32 = (props) => {
    const sid = String(props.id);
    const {x, y, w, h} = champions[sid]
    const style = spriteCss(champions[sid].sprite, x, y, w, h, 0.64)
    return <div style={style} title={champions[sid].name}></div>
}