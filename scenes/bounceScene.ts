import { CanvasTool } from '../canvasTool'
import {KTile} from '../kTile/kTile';

export class BounceSceme {
  t: number;
  running: boolean
  y: number;
  x: number;
  dx: number;
  dy: number;

  run() {
    if (!this.running) return;
    this.c.clear()
    const kt = this.c.resources.kTile as KTile


    // CODE HERE
    this.x += this.dx
    this.y += this.dy

    if (this.x < 0 || this.x > 112) {
      this.dx = -this.dx
    }
    if (this.y < 0 || this.y > 112) {
      this.dy = -this.dy
    }

    if (this.t % 30 > 15)
      kt.draw(355, this.x, this.y)
    else
      kt.draw(356, this.x, this.y)


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.x = Math.random()*112|0
    this.y = Math.random()*112|0
    this.dx = 1
    this.dy = 1
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
