import {items} from '../../mappings'
import { spriteCss } from '../../spriteLoader';

export const PlayerItems_22x22 = (props) => {
    function itemCss(idx) {
        if (!props.items[idx]) {
            return {}
        }
        const sid = String(props.items[idx])
        if(!items[sid]) {
            return {}
        }
        const { sprite, x, y, w, h } = items[sid]
        const style = spriteCss(sprite, x, y, w, h, 0.5);
        return style
    }
    const itemElements = []
    for (let i = 0; i < 7; i++) {

        if (props.items[i] != 0) {
            const style = itemCss(i)
            const sid = String(props.items[i])
            if(!items[sid]) {
                console.log('Undefined item id ', sid);
                itemElements.push(<div key={String(i)} className="smitem-empty" />)
            } else {
                itemElements.push(<div key={String(i)} className="smitem" style={style} title={items[sid].name} />)
            }
        } else {
            itemElements.push(<div key={String(i)} className="smitem-empty" />)
        }
    }
    return (
        <div className="items">
            {itemElements}
        </div>
    )
}