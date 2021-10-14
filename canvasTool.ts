import {db16} from "./utils";

export class CanvasTool {
  ctx: CanvasRenderingContext2D;
  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')
  }

  pixel(x: number, y: number, color: string | CanvasGradient | CanvasPattern) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 1, 1)
  }            

  clearRandom(chance: number) {
    for (let x = 0; x < this.canvas.width; x++) {
      for (let y = 0; y < this.canvas.height; y++) {
        if (Math.random() < chance) {
          this.ctx.clearRect(x, y, 1, 1);
        }
      }
    }
  }    

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  get width () {
    return this.canvas.width
  }

  get height() {
    return this.canvas.height
  }
}

export function setupCanvas(width: number, height: number) {
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  canvas.style.background = db16[0]
  canvas.width = width
  canvas.height = height
  canvas.style.imageRendering = 'crisp-edges'
  canvas.style.margin = 'auto'
  canvas.style.display = 'block'
  canvas.style.width = "min(100vw, 100vh)"
  canvas.style.height = "min(100vw, 100vh)"
  document.body.style.margin = "0"

  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false

  return new CanvasTool(canvas)
}
