const TILE_WIDTH = 8
const TILE_HEIGHT = 8
const X_OFFSET = 1
const Y_OFFSET = 1
const X_GAP = 1
const FIRST_CHAR = 0x21 // starts after space
const SHEET_SRC = "fontDraw/victoriaboldtransparent.png"


export class FontDraw {
  image: HTMLImageElement

  constructor(private ctx: CanvasRenderingContext2D) {
    this.image = new Image()
    this.image.src = SHEET_SRC
  }

  loaded() {
    return this.image.decode()
  }

  draw(text: string, x: number, y: number) {
    text.split('').forEach((char:string) => {
      const id = char.codePointAt(0) - FIRST_CHAR
      if (id >= 0)
        this.drawChar(id, x, y)
      x += TILE_WIDTH
    })
  }

  drawCentered(text: string, x:number, y:number) {
    x -= TILE_WIDTH/2 * text.length
    this.draw(text, x, y)
  }

  drawChar(id: number, canvasX:number, canvasY: number) {
    const srcX = X_OFFSET + id * (TILE_WIDTH + X_GAP)
    const srcY = Y_OFFSET
    this.ctx.drawImage(this.image, srcX, srcY, TILE_WIDTH, TILE_HEIGHT, canvasX, canvasY, TILE_WIDTH, TILE_HEIGHT)
  }
}

