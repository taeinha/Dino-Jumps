class Platform {
  constructor(options, images) {
    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.winner = options.winner || false;
    this.theEnd = options.theEnd || false;
    this.leftImg = images.leftImg;
    this.midImg = images.midImg;
    this.rightImg = images.rightImg;
    this.verticalImg = images.verticalImg;
    this.redFlag = images.redFlag;
    this.star = images.star;
    this.isVertical = options.isVertical;
  }

  draw(ctx) {
    if (!this.isVertical) {
      this.horizontal(ctx);
    } else {
      this.vertical(ctx);
    }

    if (this.theEnd) {
      ctx.drawImage(
        this.star,
        this.pos[0] + this.size[0] / 2 - 20,
        this.pos[1] - this.size[1] - 10,
        40,
        40
      );
    } else if (this.winner) {
      ctx.drawImage(
        this.redFlag,
        this.pos[0] + this.size[0] / 2,
        this.pos[1] - this.size[1] - 5,
        20,
        40
      );
    }
  }

  vertical(ctx) {
    ctx.drawImage(
      this.verticalImg,
      this.pos[0],
      this.pos[1],
      this.size[0],
      this.size[1]
    );
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