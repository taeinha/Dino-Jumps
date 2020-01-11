class Platform {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.winner = options.winner || false;
    this.leftImg = new Image();
    this.leftImg.src = "https://github.com/taeinha/js-climber/blob/master/src/images/platform_left.png?raw=true";
    this.midImg = new Image();
    this.midImg.src = "https://github.com/taeinha/js-climber/blob/master/src/images/platform_middle.png?raw=true";
    this.rightImg = new Image();
    this.rightImg.src = "https://github.com/taeinha/js-climber/blob/master/src/images/platform_right.png?raw=true";
    
  
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    if (!this.isVertical) {
      this.horizontal(ctx);
    } else {

    }
  }

  vertical(ctx) {

  }

  horizontal(ctx) {
    ctx.drawImage(
      this.leftImg,
      this.pos[0],
      this.pos[1] - 5,
      this.size[0] / 3,
      this.size[1] + 10
    );
  
    ctx.drawImage(
      this.midImg,
      this.pos[0] + this.size[0] / 3,
      this.pos[1] - 5,
      this.size[0] / 3,
      this.size[1] + 10
    );
    ctx.drawImage(
      this.rightImg,
      this.pos[0] + (this.size[0] * 2) / 3,
      this.pos[1] - 5,
      this.size[0] / 3,
      this.size[1] + 10
    );
  }
}

export default Platform;