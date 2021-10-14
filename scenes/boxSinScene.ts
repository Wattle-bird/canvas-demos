import { CanvasTool } from '../canvasTool'
import {forEach2d} from '../utils';

export class BoxSinScene {
  t: number;
  running: boolean
  divisor: number;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.imageSmoothingEnabled = true
    this.c.ctx.fillStyle = 'white'
    forEach2d(this.c.canvas.width, this.c.canvas.height, (x: number,y: number) => {
      const strength = Math.sin((x*y+this.t)/this.divisor);
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
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  rightClick() {
    let newDivisor = this.divisor
    while (newDivisor == this.divisor)
      newDivisor = 5 * 2**(Math.random()*4|0)
    this.divisor = newDivisor
  }

}
