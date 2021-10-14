import { CanvasTool } from '../canvasTool'
import {db16} from '../utils';

export class IntroScene {
  t: number;
  running: boolean

  run() {
    if (!this.running) return;
    this.c.clear()
    const c = this.c
    const w = c.width
    const h = c.height


    // CODE HERE

    // side indicators
    c.ctx.fillStyle = db16[1]
    c.ctx.fillRect(0, 0, w/4, h)
    c.ctx.fillRect(w/4*3, 0, w/4, h)

    // text
    c.ctx.fillStyle = 'white'
    c.ctx.textAlign = 'center'
    c.ctx.textBaseline = 'middle'
    c.ctx.font = '10px sans-serif'
    c.ctx.fillText("Mini Canvas Demos", c.canvas.width/2, 20)

    // arrows
    c.ctx.font = '20px sans-serif'
    let x = 15
    let y = c.canvas.height / 2
    c.ctx.fillText('\u140a', x, y)

    x = c.canvas.width - 15
    y = c.canvas.height / 2
    c.ctx.fillText('\u1405', x, y)

    x = w/2
    y = h/2
    c.ctx.fillText('\u2732', x, y)

    this.t++;
    //requestAnimationFrame(this.run.bind(this))
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

}
