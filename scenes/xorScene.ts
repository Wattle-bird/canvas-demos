import { CanvasTool } from '../canvasTool'
import {FpsMeter} from '../fps';
import {db16, forEach2d} from '../utils';

export class XorScene {
  t: number;
  running: boolean
  paletteLength: number
  fps: FpsMeter;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.imageSmoothingEnabled = true
    this.c.ctx.fillStyle = 'white'
    forEach2d(this.c.canvas.width, this.c.canvas.height, (x: number,y: number) => {
      const palIndex = (x & 15) ^ (y & 15) ^ ((this.t / 3) & 15)
      this.c.ctx.fillStyle = db16[palIndex]
      this.c.ctx.fillRect(x, y, 1, 1)
    })
    this.c.ctx.imageSmoothingEnabled = false

    this.fps.draw()


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.paletteLength = 16
    this.fps = new FpsMeter(c.ctx)
  }

  start() {
    this.running = true;
    this.fps.running = true
    this.run()
  }

  stop() {
    this.running = false
    this.fps.running = false
  }

  rightClick() {
    this.paletteLength = Math.ceil(Math.random()*15)+1
  }

}
