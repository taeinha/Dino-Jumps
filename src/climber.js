

class Climber {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.game = options.game;
    this.jump = false;
    this.move = this.move.bind(this);
    
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fill();
  }

  move(dir) {
    switch (dir) {
      case "ArrowLeft":
        this.vel[0] = -1 * this.game.constructor.MOVE_SPEED[0];
        break;
      case "ArrowRight":
        this.vel[0] = this.game.constructor.MOVE_SPEED[0];
        break;
      case "ArrowDown":
        this.charJump();
        break;
    }
    if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
      this.vel[0] = -2 * this.game.constructor.MOVE_SPEED[0];
      this.charJump();
    } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
      this.vel[0] = 2 * this.game.constructor.MOVE_SPEED[0];
      this.charJump();
    }
  }

  charJump() {
    if (!this.jump) {
      this.vel[1] -= this.game.constructor.MOVE_SPEED[1];
      this.jump = true;
    }
  }

  gravity() {
    this.vel[1] += this.game.constructor.GRAVITY;
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  friction() {
    this.vel[0] *= this.game.constructor.FRICTION;
  }

  floor() {
    if (this.pos[1] > this.game.constructor.START_POS[1]) {
      this.pos[1] = this.game.constructor.START_POS[1];
      this.jump = false;
      this.vel[1] = 0;
    }
  }

  walls() {
    if (this.pos[0] < this.game.constructor.WALL_START[0]) {
      this.pos[0] = this.game.constructor.WALL_START[0];
      this.vel[0] = 0;
    } else if (this.pos[0] > this.game.constructor.WALL_START[1]) {
      this.pos[0] = this.game.constructor.WALL_START[1];
      this.vel[0] = 0;
    }
  }

  physics() {
    this.gravity();
    this.friction();
    this.floor();
    this.walls();
  }


}

export default Climber;