import { CanvasTool } from '../canvasTool'

export class CenterIconScene {
  t: number;
  running: boolean

  run() {
    if (!this.running) return;
    this.c.clear()
    const c = this.c


    // CODE HERE
    c.ctx.fillStyle = 'white'
    c.ctx.textAlign = 'center'
    c.ctx.textBaseline = 'middle'
    c.ctx.font = '20px sans-serif'
    c.ctx.fillText("\u{1f602}", c.canvas.width/2, c.canvas.height/2)

    // arrows
    let x = c.canvas.width/2
    let y = 15
    c.ctx.fillText('\u1403', x, y)
    
    x = c.canvas.width/2
    y = c.canvas.height - 15
    c.ctx.fillText('\u1401', x, y)

    x = 15
    y = c.canvas.height / 2
    c.ctx.fillText('\u140a', x, y)

    x = c.canvas.width - 15
    y = c.canvas.height / 2
    c.ctx.fillText('\u1405', x, y)

    c.ctx.fillStyle = 'green'
    c.ctx.fillRect(c.canvas.width/2, 0, 1, c.canvas.height)
    c.ctx.fillRect(0, c.canvas.height/2, c.canvas.width, 1)


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
