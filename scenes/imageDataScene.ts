import { CanvasTool } from '../canvasTool'
import {FpsMeter} from '../fps';
import {forEach2d} from '../utils';

export class ImageDataScene {
  t: number;
  running: boolean
  fps: FpsMeter;

  run() {
    if (!this.running) return;
    this.c.clear()


    this.c.imageData((set: Function) => {
      forEach2d(this.c.width, this.c.height, (x: number, y: number) => {
        const r = Math.random() * 255 | 0
        const g = Math.random() * 255 | 0
        const b = Math.random() * 255 | 0
        set(x, y, r, g, b)
      })
    })

    this.fps.draw()

    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.fps = new FpsMeter(c.ctx)
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  click() {
  }

}
