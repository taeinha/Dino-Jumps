class Climber {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.game = options.game;
    this.jump = {
      up: false,
      hold: false,
      left: false,
      right: false
    };
    this.move = this.move.bind(this);
    this.jumpTime = 0;
  }

  draw(ctx) {
    if (this.jump.hold) {
      this.size[1] = this.game.climberSize[1] / 2;
      // this.game.start_pos[1] = this.game.world_y - this.size[1] - 25;
    } else {
      this.size[1] = this.game.climberSize[1];
    }

    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);

    this.drawPowerBar(ctx);
  }

  drawPowerBar(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(24, this.game.dim_y - 18, (this.game.dim_x - 48), 12);

    ctx.fillStyle = "red";
    ctx.fillRect(
      24,
      this.game.dim_y - 18,
      (this.game.dim_x - 48) * this.jumpTime,
      12
    );
  }

  move(dir, delta) {
    switch (dir) {
      case "ArrowLeft":
        this.vel[0] = -1 * this.game.move_speed;
        break;
      case "ArrowRight":
        this.vel[0] = this.game.move_speed;
        break;
    }

    if (
      dir === "ArrowLeft,ArrowDown" ||
      dir === "ArrowDown,ArrowLeft" ||
      dir === "ArrowRight,ArrowDown" ||
      dir === "ArrowDown,ArrowRight" ||
      dir === "ArrowDown"
    ) {
      if (!this.jump.up) this.holdJump(delta, this.handleJump(dir));
    }
  }

  handleJump(dir) {
    if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
      this.jump.left = true;
      return -this.game.jump_speed[0];
    } else if (
      dir === "ArrowRight,ArrowDown" ||
      dir === "ArrowDown,ArrowRight"
    ) {
      this.jump.right = true;
      return this.game.jump_speed[0];
    } else if (dir === "ArrowDown") {
      return 0.01;
    }
  }

  holdJump(delta, velX) {
    this.jump.hold = true;
    this.jumpTime += delta / 1000;
    // if (!this.jump.hold) this.size[1] = this.size[1] / 2;
    if (this.jumpTime >= 1) {
      // hold down for 1 second
      this.releaseJump(velX);
    }
  }

  releaseJump(velX, keys) {
    const vel_X = velX || this.handleJump(keys);
    this.jump.hold = false;
    if (!this.jump.up) {
      this.vel[1] -= this.jumpTime * this.game.jump_speed[1];
      if (this.jumpTime > 0.3) this.vel[0] += this.jumpTime * vel_X;
      this.jump.up = true;
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }

    this.jumpTime = 0;
  }

  gravity() {
    if (this.vel[1] < this.game.MAX_VEL_Y) {
      this.vel[1] += this.game.gravity;
    }
  }

  arc() {
    if (this.vel[1] < this.game.MAX_VEL_Y) {
      this.vel[1] += this.game.arc[1];
      if (this.jump.left) {
        this.vel[0] -= this.game.arc[0];
      } else if (this.jump.right) {
        this.vel[0] += this.game.arc[0];
      }
    }
  }

  friction() {
    this.vel[0] *= this.game.friction;
  }

  allowJump() {
    this.jump.up = false;
    this.jump.left = false;
    this.jump.right = false;
    this.friction();
    this.vel[1] = 0;
  }

  floor() {
    if (this.pos[1] > this.game.start_pos[1]) {
      this.pos[1] = this.game.start_pos[1];
      this.pos[1] += this.jump.hold ? 10 : 0;
      this.allowJump();
      
    } else if (this.pos[1] < this.game.floor_start[0]) {
      this.pos[1] = this.game.floor_start[0];
      this.allowJump();

    }
  }

  walls() {
    if (this.pos[0] < this.game.wall_start[0]) { // LEFT
      this.pos[0] = this.game.wall_start[0];
      this.vel[0] = -this.vel[0] / 2;
    } else if (this.pos[0] > this.game.wall_start[1]) { // RIGHT
      this.pos[0] = this.game.wall_start[1];
      this.vel[0] = -this.vel[0] / 2;
    }
  }

  collisionCheck(rect) {
    return (
      this.pos[0] < rect.pos[0] + rect.size[0] && //
      this.pos[0] + this.size[0] > rect.pos[0] &&
      this.pos[1] < rect.pos[1] + rect.size[1] &&
      this.pos[1] + this.size[1] > rect.pos[1]
    );
  }

  handleCollision(rect) {
    const climberCenterX = this.pos[0] + (this.size[0] * 0.5);
    const climberCenterY = this.pos[1] + (this.size[1] * 0.5);
    const rectCenterX = rect.pos[0] + (rect.size[0] * 0.5);
    const rectCenterY = rect.pos[1] + (rect.size[1] * 0.5);

    const deltaX = climberCenterX - rectCenterX; 
    const deltaY = climberCenterY - rectCenterY;
    const avgWidth = (rect.size[0] + this.size[0]) * 0.5; 
    const avgHeight = (rect.size[1] + this.size[1]) * 0.5; 

    if (Math.abs(deltaX) > avgWidth || Math.abs(deltaY) > avgHeight) return;
    if (Math.abs(deltaX / rect.size[0]) < Math.abs(deltaY / rect.size[1])) {
      if (deltaY < 0) {
        // TOP
        this.pos[1] = rect.pos[1] - this.size[1];
        this.vel[1] = 0;
        this.allowJump();
        return true;
      } else {
        // BOTTOM
        this.pos[1] = rect.pos[1] + rect.size[1];
        this.vel = [this.vel[0] / 4, this.game.gravity];
      }
    } else {
      if (deltaX < 0) {
        // LEFT
        // debugger
        this.pos[0] = rect.pos[0] - this.size[0];
        this.vel = [Math.min(-this.vel[0] / 2, -3), 3];
      } else {
        // RIGHT
        // debugger
        this.pos[0] = rect.pos[0] + rect.size[0];
        this.vel = [Math.min(-this.vel[0] / 2, -3), 3];
      }
    }
    return false;
  }

  checkPlatforms() {
    this.game.platforms.forEach(platform => {
      // if(this.collisionCheck(platform)) {
        if (this.handleCollision(platform) && platform.winner && !this.game.winner) {
          this.game.nextLevel();
        }
      // }
    });
  }

  physics() {
    this.gravity();
    if (this.jump.up) this.arc();
    this.friction();
    this.floor();
    this.walls();
    this.checkPlatforms();
    
    // this.game.updateOffset();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }


}

export default Climber;