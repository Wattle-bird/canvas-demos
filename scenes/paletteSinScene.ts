import { CanvasTool } from '../canvasTool'
import {db16, forEach2d} from '../utils';

export class PaletteSinScene {
  t: number;
  running: boolean
  paletteLength: number

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.imageSmoothingEnabled = true
    this.c.ctx.fillStyle = 'white'
    forEach2d(this.c.canvas.width, this.c.canvas.height, (x: number,y: number) => {
      const strength = Math.sin((x*y+this.t)/20);
      const palIndex = Math.floor(Math.abs(strength) * this.paletteLength)
      this.c.ctx.fillStyle = db16[palIndex]
      this.c.ctx.fillRect(x, y, 1, 1)
    })
    this.c.ctx.imageSmoothingEnabled = false


    this.t++;
    requestAnimationFrame(this.run.bind(this))
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
    this.paletteLength = Math.floor(Math.random()*15)+1
  }

}
