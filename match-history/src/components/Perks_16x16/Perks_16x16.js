import {runes} from '../../mappings'
import {perks} from '../../perks'

export const Perks_16x16 = (props) => {
    const primary = String(props.primary)
    const secondary = String(props.secondary)
    const { image } = runes[primary]
    const image2 = runes[secondary].image;
    return (<div>
        <img src={perks[image]} width="16px" height="16px" style={{"marginBottom":"3px"}} />
        <img src={perks[image2]} width="16px" height="16px" />
    </div>)
}