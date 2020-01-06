class Climber {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.game = options.game;
    this.jump = false;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fill();
  }

  move(dir) {

    switch (dir) {
      case 'LEFT':
        this.pos[0] = -this.game.MOVE_SPEED[0];
        break;
      case 'RIGHT':
        this.pos[0] = this.game.MOVE_SPEED[0];
        break;
      case 'JUMP':
        if (!this.jump) {
          this.pos[1] -= 20;
          this.jump = true;
        }
        break;
    }
    this.pos[0] += this.game.MOVE_SPEED[0];
    this.pos[1] += this.game.MOVE_SPEED[1];
  }


}

export default Climber;