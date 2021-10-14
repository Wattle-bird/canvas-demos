import { CanvasTool } from '../canvasTool'
import {makeSprite} from '../utils';

export class PaletteScene {
  t: number;
  running: boolean

  palImage = makeSprite(`
01234567
89abcdef`, 8, 2) 

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.drawImage(this.palImage, 0, 0, this.c.width, this.c.height)


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

}
