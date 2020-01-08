class Platform {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
  }
}

export default Platform;