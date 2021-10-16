import { CanvasTool } from '../canvasTool'
import {forEach2d} from '../utils';

export class MunchScene {
  t: number;
  running: boolean
  divisor: number;
  k: number

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.imageSmoothingEnabled = true
    this.c.ctx.fillStyle = 'white'
    forEach2d(this.c.canvas.width, this.c.canvas.height, (x: number,y: number) => {
      const strength = ((x&127)^(y&127)^(this.t&127))/127 > this.k?1:0
      this.c.ctx.fillRect(x, y, strength, 1)
    })
    this.c.ctx.imageSmoothingEnabled = false


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.divisor = 20
    this.k = 0.98
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  rightClick() {
    this.k = Math.random()
  }

}
