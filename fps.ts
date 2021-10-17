import {FontDraw} from "./fontDraw/fontDraw";

export class FpsMeter {
  fd: FontDraw;
  time: number;
  counter: number;
  running: boolean;
  fps: number;
  constructor(ctx: CanvasRenderingContext2D) {
    this.fd = new FontDraw(ctx)
    this.time = new Date().getSeconds()
    this.counter = 0
    this.running = true
    this.fps = 0
    this.run()
  }

  run() {
    if (this.running) {
      this.counter++;
      const newTime = new Date().getSeconds()
      if (this.time != newTime) {
        this.time = newTime
        this.fps = this.counter
        this.counter = 0
      }
    }
    requestAnimationFrame(this.run.bind(this))
  }

  draw() {
    this.fd.draw("" + this.fps, 0, 0)
  }

}
