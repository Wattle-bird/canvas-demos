import {db16, forEach2d, makeSprite, srand} from './utils'
const WIDTH = 128
const HEIGHT = 128
let t = 0

/*
 * Assets
 */
 
const face = makeSprite(`
 fffff 
fcccccf
fc2c2cf
fcccccf
fc6c6cf
fcc6ccf
 fffff`, 7, 7);

const palImage = makeSprite(`
01234567
89abcdef`, 8, 2)

const tile1 = makeSprite(`
55b55555
55b55b5b
b5b55b5b
b55b5b55
5b5b55b5
5b5555b5
b555b5b5
b555b555`,8,8)

const tileWater = makeSprite(`
88dd8888
dd888888
888dd8dd
8dd88888
dd88dd88
888dd888
8dd88888
8888dd88`,8,8)

const arrowSprite = document.createElement('img');
async function loadImages() {
  arrowSprite.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAl0lEQVR42u2XPQ7AIAhGa/KdqfefeykahiYNwaH8SNvgopO8oDwRW/HApwGI6OB5jLEvB+DgV+D7egmADMhrKwS86S+5A54z/1cVNEADpABE6PWJtqEZLkoymj+kMTHTa9aQEO+5A54HxfOQQUvPquDqEWRlYLZvi6gBGsDcFUf1ioiqa6vAzF1x6cdEarvkaxal7fIqOAHxJlpJSBcfFwAAAABJRU5ErkJggg=='
  await arrowSprite.decode()
}

/*
 * Canvas setup
 */

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
canvas.style.background = db16[0]
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.imageRendering = 'crisp-edges'
canvas.style.margin = 'auto'
canvas.style.display = 'block'
canvas.style.width = "min(100vw, 100vh)"
canvas.style.height = "min(100vw, 100vh)"
document.body.style.margin = "0"

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false

ctx.pixel = (x: number, y: number, color: string | CanvasGradient | CanvasPattern) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1)
}

ctx.clearRandom = (chance: number) => {
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      if (Math.random() < chance) {
        ctx.clearRect(x, y, 1, 1);
      }
    }
  }
}


/*
 * Actual code
 */

loadImages().then(() => {
  shaking()
  click()
})

let playerX = 0, playerY = 0;
const seed = Math.random()*2**31

function drawTiles() {
  let rand = srand(seed)
  let counter = 0
  forEach2d(WIDTH/8, HEIGHT/8, (x: number,y: number) => {
    counter += rand()
    if (counter % 4 < 2)
      ctx.drawImage(tileWater,x*8, y*8)
    else
      ctx.drawImage(tile1,x*8, y*8)
    
  })
  ctx.drawImage(face, playerX * 8, playerY * 8)
  ctx.drawImage(arrowSprite,0,0,WIDTH,HEIGHT)
}

function click() {
  canvas.addEventListener('click', (e) => {
    const x = e.offsetX / canvas.offsetWidth * WIDTH
    console.log(x)
    drawTiles()
  })
  canvas.addEventListener('contextmenu', (e) => {
    alert(1)
    e.preventDefault()
  })
}

function showPalette() {
  ctx.drawImage(palImage, 0, 0, WIDTH, HEIGHT)
}

function frend() {
  if (t % 300 == 0) {
    ctx.drawImage(face, 5, 5, WIDTH - 10, HEIGHT - 10)
  }
  ctx.clearRandom(0.005)
  t++
  requestAnimationFrame(frend)
}

function shaking() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 320, 320);
  const x = Math.random() * 5 - 10;
  const y = 100 + Math.random() * 5;
  ctx.fillStyle = 'white'
  ctx.font = "bold 100px sans-serif"
  ctx.fillText("\u{1f602}", x, y);
  requestAnimationFrame(shaking)
}
