

class Climber {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.game = options.game;
    this.jump = {
      up: false,
      left: false,
      right: false
    };
    this.move = this.move.bind(this);
    this.jumpTime = 0;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fill();
  }

  move(dir, delta) {
    switch (dir) {
      case "ArrowLeft":
        this.vel[0] = -1 * this.game.constructor.MOVE_SPEED;
        break;
      case "ArrowRight":
        this.vel[0] = this.game.constructor.MOVE_SPEED;
        break;
      // case "ArrowDown":
      //   this.holdJump(delta);
      //   break;
    }
    // if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
    //   this.holdJump(delta, -this.game.constructor.JUMP_SPEED[0]);
    // } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
    //   this.holdJump(delta, this.game.constructor.JUMP_SPEED[0]);
    // }

    if (
      dir === "ArrowLeft,ArrowDown" ||
      dir === "ArrowDown,ArrowLeft" ||
      dir === "ArrowRight,ArrowDown" ||
      dir === "ArrowDown,ArrowRight" ||
      dir === "ArrowDown"
    ) {
      this.holdJump(delta, this.handleJump(dir));
    }
  }

  handleJump(dir) {
    if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
      return -this.game.constructor.JUMP_SPEED[0];
    } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
      return this.game.constructor.JUMP_SPEED[0];
    } else if (dir === "ArrowDown") {
      return 0.01;
    }
  }

  holdJump(delta, velX) {
    this.jumpTime += delta/1000;
    if (this.jumpTime >= 1) { // hold down for 1 second
      this.releaseJump(velX);
    }
  }

  releaseJump(velX, keys) {
    const vel_X = velX || this.handleJump(keys);

    this.jumpTime = 0;
    if (!this.jump.up) {
      this.vel[1] -= this.game.constructor.JUMP_SPEED[1];
      this.vel[0] += vel_X;
      this.jump.up = true;
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
  }



  gravity() {
    this.vel[1] += this.game.constructor.GRAVITY;
  }

  arc() {
    // this.vel[0] += this.game.constructor.ARC[0];
    this.vel[1] += this.game.constructor.ARC[1];
  }

  friction() {
    this.vel[0] *= this.game.constructor.FRICTION;
  }

  floor() {
    if (this.pos[1] > this.game.constructor.START_POS[1]) {
      this.pos[1] = this.game.constructor.START_POS[1];
      this.jump.up = false;
      this.vel[1] = 0;
    } else if (this.pos[1] < this.game.constructor.FLOOR_START[0]) {
      this.pos[1] = this.game.constructor.FLOOR_START[0];
      this.jump.up = false;
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
    if (this.jump.up) this.arc();
    this.friction();
    this.floor();
    this.walls();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }


}

export default Climber;