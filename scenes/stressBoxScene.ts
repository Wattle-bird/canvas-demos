import { CanvasTool } from '../canvasTool'
import {FontDraw} from '../fontDraw/fontDraw';
import {FpsMeter} from '../fps';
import {KTile} from '../kTile/kTile';

export class StressBoxScene {
  t: number;
  running: boolean
  kt: KTile;
  count: number;
  fd: FontDraw;
  fps: FpsMeter;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    for (let i = 0; i < this.count; i++) {
      this.c.ctx.fillRect(Math.random()*64, Math.random()*64, Math.random()*64, Math.random()*64)
    }
    this.fd.draw("" + this.count, 0, 8)
    this.fps.draw()


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.kt = new KTile(c.ctx)
    this.fd = new FontDraw(c.ctx)
    this.count = 1;
    this.fps = new FpsMeter(c.ctx)
  }

  start() {
    this.running = true;
    this.fps.running = true
    this.c.ctx.fillStyle = 'red'
    Promise.all([this.kt.loaded(), this.fd.loaded()]).then(()=>this.run())
  }

  stop() {
    this.running = false
    this.fps.running = false
  }

  click() {
    this.count *= 2
  }

}
