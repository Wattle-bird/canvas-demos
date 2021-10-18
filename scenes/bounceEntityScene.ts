import { CanvasTool } from '../canvasTool'
import {KTile} from '../kTile/kTile';

export class BounceEntitySceme {
  t: number;
  running: boolean
  y: number;
  x: number;
  dx: number;
  dy: number;
  bois: Boi[];

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.bois.forEach((boi) => boi.tick())


    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.bois = []

    for (let i=30; i--;) {
      this.x = Math.random()*112|0
      this.y = Math.random()*112|0
      this.bois.push(new Boi(this.x, this.y, this.c))


    }
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

class Boi {
  dx: number;
  dy: number;
  t: number;
  constructor(private x: number, private y: number, private c: CanvasTool) {
    this.dx = Math.random()
    this.dy = Math.random()
  }

  tick() {
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
  }
}
