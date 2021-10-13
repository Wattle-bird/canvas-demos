export function makeSprite(pixels: string, width: number, height: number, palette = db16): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  let x = 0;
  let y = -1; // because we start with a new line before data


  for (let char of pixels.split("")) {
    if (char == "\n") {
      y++;
      x = 0;
      continue;
    }

    let color = "transparent";
    if (char !== " ") {
      const index = +("0x" + char)
      color = palette[index]
    }

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
    x++
  }

  return canvas
}


/**
 * DawnBringer 16 color palette
 */
export const db16 = [
  '#140c1c', // 0 black
  '#442434', // 1 dark purple
  '#30346d', // 2 dark blue
  '#4e4a4e', // 3 dark grey
  '#854c30', // 4 brown
  '#346524', // 5 dark green
  '#d04648', // 6 red
  '#757161', // 7 mid grey
  '#597dce', // 8 mid blue
  '#d27d2c', // 9 orange
  '#8595a1', // A/10 light grey
  '#6daa2c', // B/11 light green
  '#d2aa99', // C/12 tan
  '#6dc2ca', // D/13 cyan
  '#dad45e', // E/14 yellow
  '#deeed6', // F/15 white
]

export function forEach2d(width: number, height: number, func: Function) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      func(x, y)
    }
  }
}

export function srand(a: number): Function {
  // https://github.com/bryc/code/blob/master/jshash/PRNGs.md#lcg-lehmer-rng
  return function() {
    return (a = a * 48271 % 2147483647)/2**31;
  }
}

