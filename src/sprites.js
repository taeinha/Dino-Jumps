class Sprites {
  constructor(imgRight, imgLeft, sWidth, sHeight, rows, cols) {
    this.rightChar = new Image();
    this.rightChar.src = imgRight;
    this.leftChar = new Image();
    this.leftChar.src = imgLeft;
    // this.obj.style = "background-color: transparent";
    this.spriteWidth = sWidth;
    this.spriteHeight = sHeight;
    this.width = this.spriteWidth / cols;
    this.height = this.spriteHeight / rows;
    this.srcX = 0;
    this.srcY = 0;
    this.elapsedTime = Date.now();
    this.left = false;
    this.idle = false;
  }

  updateFrame(startFrame, endFrame) {
    const delta = Date.now() - this.elapsedTime;
    if (delta < 1000 / 8) {
      return;
    } 
    // debugger
    // if (this.elapsedTime < 100000 / 8) return;
    if (this.curFrame === undefined) {
      this.curFrame = startFrame;
    } else {
      if (this.curFrame >= endFrame) {
        this.curFrame = startFrame;
      } else {
        this.curFrame += 1;
      }
    }
    this.srcX = this.curFrame * this.width;
    this.elapsedTime = Date.now();
    // debugger
  }

  draw(ctx, x, y, w, h, startFrame, endFrame) {
    this.updateFrame(startFrame, endFrame);
    
    // ctx.clearRect(x, y, w, h);
    if (this.left === true) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(this.obj, this.srcX, this.srcY, this.width, this.height, -x - w, y, w, h);
      ctx.restore();
    } else {
      ctx.drawImage(this.obj, this.srcX, this.srcY, this.width, this.height, x, y, w, h);
    };
    
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}

export default Sprites;