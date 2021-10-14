import { CanvasTool } from '../canvasTool'
import {forEach2d, makeSprite, srand} from '../utils';

export class DrawTilesScene {
  t: number;
  running: boolean

  tile1 = makeSprite(`
55b55555
55b55b5b
b5b55b5b
b55b5b55
5b5b55b5
5b5555b5
b555b5b5
b555b555`,8,8)

  tileWater = makeSprite(`
88dd8888
dd888888
888dd8dd
8dd88888
dd88dd88
888dd888
8dd88888
8888dd88`,8,8)


  run() {
    if (!this.running) return;
    this.c.clear()
    const ctx = this.c.ctx


    // CODE HERE
    const seed = Math.random()*2**31
    let rand = srand(seed)
    let counter = 0
    forEach2d(this.c.width/8, this.c.height/8, (x: number,y: number) => {
      counter += rand()
      if (counter % 4 < 2)
        ctx.drawImage(this.tileWater,x*8, y*8)
      else
        ctx.drawImage(this.tile1,x*8, y*8)
    })


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

  rightClick() {
    this.run()
  }

}
