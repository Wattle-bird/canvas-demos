import { CanvasTool } from '../canvasTool'
import {Rectangle} from '../gamestuff/geometry';

export class BounceRectScene {
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

    for (let i=5; i--;) {
      this.bois.push(new Boi(this.c))


    }
  }

  start() {
    this.running = true;
    this.run()
    this.c.ctx.save()
    this.c.ctx.globalCompositeOperation = "difference"
  }

  stop() {
    this.running = false
    this.c.ctx.restore()
  }

  click() {
    this.bois.push(new Boi(this.c))
  }

}

class Boi {
  dx: number;
  dy: number;
  t: number;
  rect = new Rectangle(Math.random()*63,Math.random()*63,Math.random()*63,Math.random()*63)
  color = Math.random()*999|0

  constructor(private c: CanvasTool) {
    this.dx = Math.random()
    this.dy = Math.random()
  }

  tick() {
    this.t++


    // CODE HERE
    this.x += this.dx
    this.y += this.dy

    if (this.rect.left < 0 || this.rect.right > 127) {
      this.dx = -this.dx
    }
    if (this.rect.top < 0 || this.rect.bottom > 127) {
      this.dy = -this.dy
    }

    this.c.ctx.fillStyle = "#" + this.color
    this.rect.draw(this.c.ctx)
  }

  get x() {return this.rect.x}
  get y() {return this.rect.y}

  set x(val) {this.rect.x = val}
  set y(val) {this.rect.y = val}
}
