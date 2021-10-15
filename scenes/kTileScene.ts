import { CanvasTool } from '../canvasTool'
import {KTile} from '../kTile/kTile';
import {forEach2d} from '../utils';

export class KTileScene {
  t: number;
  running: boolean
  kt: KTile;

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    forEach2d(this.c.width/16, this.c.height/16, (x: number,y: number) => {
      const id = Math.floor(Math.random()*1056)
      this.kt.draw(id, x*16, y*16)

    })


    this.t++;
    //requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.kt = new KTile(c.ctx)
  }

  start() {
    this.running = true;
    this.kt.loaded().then(() => this.run())
  }

  stop() {
    this.running = false
  }

  click() {
    this.start()
  }

}
