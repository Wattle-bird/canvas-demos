import { CanvasTool } from '../canvasTool'
import {KTile} from '../kTile/kTile';
import {db16} from '../utils';

export class IntroScene {
  t: number;
  running: boolean
  kTile: KTile;

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
    c.resources.fontDraw.drawCentered("MINI CANVAS", c.width/2, 16) 
    c.resources.fontDraw.drawCentered("DEMOS", c.width/2, 24) 

    // arrows
    let x = 8
    let y = c.canvas.height / 2
    this.kTile.draw(986, x, y)

    x = c.canvas.width - 24
    this.kTile.draw(984, x, y)

    x = w/2 - 4
    this.kTile.draw(518, x, y)

    this.t++;
    //requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.kTile = c.resources.kTile as KTile
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

}
