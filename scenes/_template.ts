import { CanvasTool } from '../canvasTool'

export class SCENE_NAME {
  t: number;
  running: boolean

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE


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
