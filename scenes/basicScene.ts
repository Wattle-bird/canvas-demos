import { CanvasTool } from '../canvasTool'
import {FontDraw} from '../fontDraw/fontDraw';

export class BasicScene {
  t: number;
  running: boolean
  font: FontDraw;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.fillStyle = "#027"
    this.c.ctx.fillRect(0,0,this.c.width,this.c.height)
    this.font.draw("* WATTLEBIRD *", 8, 8)
    this.font.draw("*** BASIC  ***", 8, 16)
    this.font.draw("64K RAM SYSTEM", 8, 32)
    this.font.draw("38K BYTES FREE", 8, 40)
    this.font.draw("READY.", 8, 56)
    this.c.ctx.fillStyle = "white"
    this.c.ctx.fillRect(8, 64, 8, 8)


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.font = c.resources.fontDraw as FontDraw
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
