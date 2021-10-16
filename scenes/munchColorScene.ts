import { CanvasTool } from '../canvasTool'
import {forEach2d} from '../utils';

export class MunchColorScene {
  t: number;
  running: boolean
  divisor: number;
  k: number
  color: string

  run() {
    if (!this.running) return;


    // CODE HERE
    if (!(this.t%128)) this.newColor()
    this.c.ctx.imageSmoothingEnabled = true
    forEach2d(this.c.canvas.width, this.c.canvas.height, (x: number,y: number) => {
      const strength = ((x&127)^(y&127)^(this.t&127))/127 > this.k?1:0
      this.c.ctx.fillRect(x, y, strength, 1)
    })
    this.c.ctx.imageSmoothingEnabled = false


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }

  newColor() {
    this.c.ctx.fillStyle = "#" + (Math.random()*999|0)
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.divisor = 20
    this.k = 0.99
    this.newColor()
  }

  start() {
    this.c.clear()
    this.t = 0
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  rightClick() {
    this.k = Math.random()*0.25 + 0.75
    this.t = 0
    this.newColor()
  }

}
