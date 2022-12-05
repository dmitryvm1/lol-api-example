import {runes} from '../../mappings'
import {perks} from '../../perks'

export const Perks_22x22 = (props) => {
    const primary = String(props.primary)
    const secondary = String(props.secondary)
    const { image } = runes[primary]
    const image2 = runes[secondary].image;
    return (<div>
        <img src={perks[image]} width="24px" height="24px" style={{"marginBottom":"2px"}} />
        <img src={perks[image2]} width="24px" height="24px" />
    </div>)
}