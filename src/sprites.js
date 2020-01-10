class Sprites {
  constructor(img, sWidth, sHeight, rows, cols) {
    this.obj = new Image();
    this.obj.src = img;
    this.spriteWidth = sWidth;
    this.spriteHeight = sHeight;
    this.width = this.spriteWidth / cols;
    this.height = this.spriteHeight / rows;
    this.srcX = 0;
    this.srcY = 0;
  }

  updateFrame(startFrame, endFrame) {
    if (!this.curFrame) {
      this.curFrame = startFrame;
    } else {
      if (this.curFrame >= endFrame) {
        this.curFrame = startFrame;
      } else {
        this.curFrame += 1;
      }
    }
    this.srcX = this.curFrame * this.width;
  }

  draw(isLeft, ctx, x, y, w, h, startFrame, endFrame) {
    this.updateFrame(startFrame, endFrame);
    ctx.clearRect(x, y, w, h);
    ctx.drawImage(this.obj, this.srcX, this.srcY, this.width, this.height, x, y, w, h);
    debugger
  }
}

export default Sprites;