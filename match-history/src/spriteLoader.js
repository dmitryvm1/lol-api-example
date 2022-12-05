
import {champions, items, runes, summoners} from './mappings'
import ch0 from './img/champion0.png'
import ch1 from './img/champion1.png'
import ch2 from './img/champion2.png'
import ch3 from './img/champion3.png'
import ch4 from './img/champion4.png'
import ch5 from './img/champion5.png'
import i0 from './img/item0.png'
import i1 from './img/item1.png'
import i2 from './img/item2.png'
import spell0 from './img/spell0.png'

const sprites = {initialized: false}


const championSprites = {
    "champion0.png": ch0,
    "champion1.png": ch1,
    "champion2.png": ch2,
    "champion3.png": ch3,
    "champion4.png": ch4,
    "champion5.png": ch5,
}

function addSpriteMetadata(container, name, url, itemWidth, itemHeight, rerender) {
    let image = new Image()
    image.onload = () => {
        container[name] = {
            url,
            width: image.width,
            height: image.height,
            itemWidth,
            itemHeight
        }
        rerender()
    }
    image.src = url
}

export function initSpriteMetadata(rerender) {
    if(sprites.initialized) {
        return
    }
    addSpriteMetadata(sprites, "spell0.png", spell0, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion0.png", ch0, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion1.png", ch1, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion2.png", ch2, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion3.png", ch3, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion4.png", ch4, 48, 48, rerender)
    addSpriteMetadata(sprites, "champion5.png", ch5, 48, 48, rerender)
    addSpriteMetadata(sprites, "item0.png", i0, 48, 48, rerender)
    addSpriteMetadata(sprites, "item1.png", i1, 48, 48, rerender)
    addSpriteMetadata(sprites, "item2.png", i2, 48, 48, rerender)
    sprites.initialized = true
}


export const spriteCss = (spriteImageName,x,y,w,h, scale) => {
    if(!sprites[spriteImageName]) {
        return {}
    }
    const url = sprites[spriteImageName].url
    const szx = sprites[spriteImageName].width
    const szy = sprites[spriteImageName].height
    const style = {
        "backgroundImage": `url(${url})`,
        
    }
    if(scale) {
        //style.transform = `scale(${scale})`
        style.backgroundPosition = `${-x*scale}px ${-y*scale}px`
        style.backgroundSize = `${szx*scale}px ${szy*scale}px`
        style.width = `${w*scale}px`
        style.height = `${h*scale}px`
    } else {
        style.backgroundPosition = `${-x}px ${-y}px`
        style.width = `${w}px`
        style.height = `${h}px`
    }
    return style
}