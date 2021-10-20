import { CanvasTool } from '../canvasTool'
import {Rectangle} from '../gamestuff/geometry';


export class JumpyScene {
  t: number;
  running: boolean
  player: Player;
  enemies: Enemy[] = []
  enemySpeed = -1

  run() {
    if (!this.running) return;
    this.c.clear()


    // CODE HERE
    
    // floor
    for (let i=0;i < 16;i++) {
      this.c.resources.kTile.draw(19, i*16, 96)
    }

    this.player.tick()

    this.enemies.forEach((e)=>{
      e.tick()
    })

    this.enemies = this.enemies.filter((e)=>!e.shouldDelete())

    if (Math.random() < 0.02) {
      this.enemies.push(new Enemy(this.c, this.enemySpeed))
    }


    this.enemySpeed-= 0.001

    this.t++;
    requestAnimationFrame(this.run.bind(this))
  }


  constructor(private c: CanvasTool) {
    this.t = 0;
    this.running = false;
    this.player = new Player(c)
    // TODO temp
    this.enemies.push(new Enemy(c, -2))
  }

  start() {
    this.running = true;
    this.run()
  }

  stop() {
    this.running = false
  }

  click() {
    this.player.jump()
  }

}

class Player {
  rect = new Rectangle(32,0,16,16)
  dy = 0
  ay = 0.1
  screenBottom: number;
  jumpsLeft = 0

  constructor(private c: CanvasTool) {
    this.screenBottom = 96
  }

  tick() {
    this.physics()
    if (this.rect.bottom > this.screenBottom) {
      this.rect.bottom = this.screenBottom
      this.dy = 0
      this.jumpsLeft = 2
    }

    //draw
    this.c.resources.kTile.draw(450,this.rect.x,this.rect.y)
  }

  physics() {
    this.dy += this.ay
    this.rect.y += this.dy
  }

  jump() {
    if (this.jumpsLeft > 0){
      this.dy = -3
      this.jumpsLeft--
    }
  }
}

class Enemy {
  rect = new Rectangle(128, 96-16, 16, 16)

  constructor(private c: CanvasTool, private dx: number) {
  }

  tick() {
    this.physics()

    this.c.resources.kTile.draw(410, this.rect.x, this.rect.y)
  }

  shouldDelete() {
    return this.rect.right < 0
  }

  physics() {
    this.rect.x += this.dx
  }
}
