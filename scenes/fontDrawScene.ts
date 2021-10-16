import { CanvasTool } from '../canvasTool'
import {FontDraw} from '../fontDraw/fontDraw';

export class FontDrawScene {
  t: number;
  running: boolean
  fd: FontDraw;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.fd.draw("Hello world!", 0, 0)


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.fd = new FontDraw(c.ctx)
  }

  start() {
    this.running = true;
    this.fd.loaded().then(()=>this.run())
  }

  stop() {
    this.running = false
  }

  click() {
  }

}
