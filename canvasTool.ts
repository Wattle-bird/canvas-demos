import {FontDraw} from "./fontDraw/fontDraw";
import {KTile} from "./kTile/kTile";
import {db16} from "./utils";

export class CanvasTool {
  ctx: CanvasRenderingContext2D;

  resources: any



  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')

    // RESOURCES
    this.resources = {all:[]}
    this.resources.kTile = new KTile(this.ctx)
    this.resources.all.push(this.resources.kTile)
    this.resources.fontDraw = new FontDraw(this.ctx)
    this.resources.all.push(this.resources.fontDraw)
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

  loaded() {
    return Promise.all(this.resources.all.map((r: {loaded: any;}) => r.loaded()))
  }

  imageData(callback: Function) {
    const data = new ImageData(this.width, this.height)

    const setPixel = (x: number, y: number, r: number, g: number, b: number, a: number = 255) => {
      const offset = (y * this.width * 4) + x*4
      data.data[offset] = r
      data.data[offset+1] = g
      data.data[offset+2] = b
      data.data[offset+3] = 255
    }

    callback(setPixel)

    this.ctx.putImageData(data, 0, 0)
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
  canvas.style.imageRendering = 'pixelated'
  canvas.style.margin = 'auto'
  canvas.style.display = 'block'
  canvas.style.width = "min(100vw, 100vh)"
  canvas.style.height = "min(100vw, 100vh)"
  document.body.style.margin = "0"

  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false

  return new CanvasTool(canvas)
}
