import {setupCanvas} from './canvasTool';
import {BoxSinScene} from './scenes/boxSinScene';
import {CenterIconScene} from './scenes/centerIconScene';
import {DrawTilesScene} from './scenes/drawTilesScene';
import {FrendScene} from './scenes/frendScene';
import {ImageDecodeScene} from './scenes/imageDecodeScene';
import {PaletteScene} from './scenes/paletteScene';
import {PaletteSinScene} from './scenes/paletteSinScene';
const WIDTH = 128
const HEIGHT = 128
let frameIndex = 0

const c = setupCanvas(WIDTH, HEIGHT)
const canvas = c.canvas

const frames: any[] = [ 
  new BoxSinScene(c), 
  new PaletteSinScene(c), 
  new DrawTilesScene(c), 
  new FrendScene(c), 
  new PaletteScene(c), 
  new CenterIconScene(c), 
  new ImageDecodeScene(c) ]


frames[frameIndex].start()
click()


function click() {
  canvas.addEventListener('click', (e) => {
    const x = e.offsetX / canvas.offsetWidth * WIDTH
    frames[frameIndex].stop()
    if (x > c.width/2) {
      frameIndex++
      frameIndex %= frames.length
    } else {
      frameIndex--
      if (frameIndex < 0) {
        frameIndex = frames.length - 1
      }
    }
    frames[frameIndex].start()

  })
  canvas.addEventListener('contextmenu', (e) => {
    if (frames[frameIndex].rightClick)
      frames[frameIndex].rightClick()
    e.preventDefault()
  })
}
