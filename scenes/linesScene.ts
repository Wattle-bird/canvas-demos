import { CanvasTool } from '../canvasTool'

export class LinesScene {
  t: number;
  running: boolean

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.strokeStyle = "white"
    for (let y = 0; y < 128; y += 16) {
      this.c.ctx.beginPath()
      this.c.ctx.moveTo(0, 0)
      this.c.ctx.lineTo(127, y)
      this.c.ctx.stroke()
    }

    for (let x = 0; x < 128; x += 16) {
      this.c.ctx.beginPath()
      this.c.ctx.moveTo(0, 0)
      this.c.ctx.lineTo(x, 127)
      this.c.ctx.stroke()
    }


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
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
