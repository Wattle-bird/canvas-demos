import { CanvasTool } from '../canvasTool'
import {forEach2d} from '../utils';

export class EasyPaletteScene {
  t: number;
  running: boolean
  paletteLength: number

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.imageSmoothingEnabled = true
    this.c.ctx.fillStyle = 'white'
    forEach2d(100, 100, (x: number,y: number) => {
      const r = x % 10
      const g = x / 10 |0
      const b = y / 10 |0
      this.c.ctx.fillStyle = "#" + r + g + b
      this.c.ctx.fillRect(x, y, 1, 1)
    })
    this.c.ctx.imageSmoothingEnabled = false

    this.c.resources.fontDraw.draw("#000 to #999", 0, 112)


    this.t++;
    //requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.paletteLength = 16
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  rightClick() {
    this.paletteLength = Math.ceil(Math.random()*15)+1
  }

}
