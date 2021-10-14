import { CanvasTool } from '../canvasTool'
import {makeSprite} from '../utils';

export class FrendScene {
  t: number;
  running: boolean

  face = makeSprite(`
 fffff 
fcccccf
fc2c2cf
fcccccf
fc6c6cf
fcc6ccf
 fffff`, 7, 7);

  run() {
    if (!this.running) return;
    const ctx = this.c.ctx


    // CODE HERE
    if (this.t % 300 == 0) {
      ctx.drawImage(this.face, 5, 5, this.c.width - 10, this.c.height - 10)
    }
    this.c.clearRandom(0.005)


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
  }

  start() {
    this.c.clear()
    this.running = true;
    this.run()
    this.t = 0
  }

  stop() {
    this.running = false
  }

}
