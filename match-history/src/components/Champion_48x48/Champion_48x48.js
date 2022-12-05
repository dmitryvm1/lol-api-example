import {champions} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const Champion_48x48 = (props) => {
    // TODO: unknown champion icon
    const sid = String(props.id);
    const {x, y, w, h} = champions[sid]
    const style = spriteCss(champions[sid].sprite, x, y, w, h)
    return <div style={style} title={champions[sid].name} ></div>
}