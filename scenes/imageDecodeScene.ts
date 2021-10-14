import { CanvasTool } from '../canvasTool'

export class ImageDecodeScene {
  t: number;
  running: boolean
  image: HTMLImageElement

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    this.c.ctx.drawImage(this.image, 0, 0)


    this.t++;
    //requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;

    this.image = new Image()
    this.image.src='http://placekitten.com/128/128'
  }

  start() {
    this.running = true;
    this.image.decode().then(()=> this.run())
  }

  stop() {
    this.running = false
  }

}
