const TILE_WIDTH = 16
const TILE_HEIGHT = 16
const SHEET_TILES_WIDE = 48
const SHEET_SRC = "kTile/colored_transparent_packed.png"


export class KTile {
  image: HTMLImageElement

  constructor(private ctx: CanvasRenderingContext2D) {
    this.image = new Image()
    this.image.src = SHEET_SRC
  }

  loaded() {
    return this.image.decode()
  }

  draw(id: number, canvasX:number, canvasY: number) {
    const srcX = id % SHEET_TILES_WIDE * TILE_WIDTH
    const srcY = Math.floor(id / SHEET_TILES_WIDE) * TILE_HEIGHT
    this.ctx.drawImage(this.image, srcX, srcY, TILE_WIDTH, TILE_HEIGHT, canvasX|0, canvasY|0, TILE_WIDTH, TILE_HEIGHT)
  }
}

