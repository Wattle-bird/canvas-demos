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


    const data = new ImageData(this.c.width, this.c.height)

    forEach2d(this.c.width, this.c.height, (x: number, y: number) => {
      // CODE HERE
      const r = Math.random() * 255 | 0
      const g = Math.random() * 255 | 0
      const b = Math.random() * 255 | 0

      const offset = (y * this.c.width * 4) + x*4
      data.data[offset] = r
      data.data[offset+1] = g
      data.data[offset+2] = b
      data.data[offset+3] = 255
    })

    this.c.ctx.putImageData(data, 0, 0)
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
