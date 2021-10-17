import {setupCanvas} from './canvasTool';
import {BoxSinScene} from './scenes/boxSinScene';
import {CenterIconScene} from './scenes/centerIconScene';
import {DrawTilesScene} from './scenes/drawTilesScene';
import {FrendScene} from './scenes/frendScene';
import {ImageDecodeScene} from './scenes/imageDecodeScene';
import {IntroScene} from './scenes/introScene';
import {KTileScene} from './scenes/kTileScene';
import {PaletteScene} from './scenes/paletteScene';
import {PaletteSinScene} from './scenes/paletteSinScene';
import {MunchScene} from './scenes/munchScene';
import {XorScene} from './scenes/xorScene';
import {MunchColorScene} from './scenes/munchColorScene';
import {FontDrawScene} from './scenes/fontDrawScene';
import {StressScene} from './scenes/stressScene';
import {StressBoxScene} from './scenes/stressBoxScene';
import {ImageDataScene} from './scenes/imageDataScene';
const WIDTH = 128
const HEIGHT = 128
let frameIndex = 0

const c = setupCanvas(WIDTH, HEIGHT)
const canvas = c.canvas

const frames: any[] = [ 
  new IntroScene(c),
  new ImageDecodeScene(c),
  new CenterIconScene(c), 
  new PaletteScene(c), 
  new FrendScene(c), 
  new DrawTilesScene(c), 
  new PaletteSinScene(c), 
  new BoxSinScene(c), 
  new KTileScene(c),
  new XorScene(c),
  new MunchScene(c),
  new MunchColorScene(c),
  new FontDrawScene(c),
  new StressScene(c),
  new StressBoxScene(c),
  new ImageDataScene(c)
]
const hashNumber = parseInt(location.hash.slice(1))
if (!isNaN(hashNumber)) {
  frameIndex = hashNumber
}

c.loaded().then(() => {
  frames[frameIndex].start()
  click()
})


function click() {
  canvas.addEventListener('click', (e) => {
    const x = e.offsetX / canvas.offsetWidth * WIDTH
    if (x < c.width/4) {
      frames[frameIndex].stop()
      frameIndex++
      frameIndex %= frames.length
      frames[frameIndex].start()
      location.hash = ''+frameIndex
    } else if (x > c.width/4*3) {
      frames[frameIndex].stop()
      frameIndex--
        if (frameIndex < 0) {
        frameIndex = frames.length - 1
      }
      location.hash = ''+frameIndex
      frames[frameIndex].start()
    } else {
      if (frames[frameIndex].rightClick)
        frames[frameIndex].rightClick()
      if (frames[frameIndex].click)
        frames[frameIndex].click()
    }

  })
}
