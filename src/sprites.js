const SPRITES_LOC = {
  left: {
    idle: {
      start: 23,
      end: 20
    },
    run: {
      start: 19,
      end: 13
    },
    jump: {
      start: 6,
      end: 6
    }
  },
  right: {
    idle: {
      start: 0,
      end: 3
    },
    run: {
      start: 4,
      end: 10
    },
    jump: {
      start: 17,
      end: 17
    }
  }
};

class Sprites {
  constructor(imgRight, imgLeft, sWidth, sHeight, rows, cols) {
    this.rightChar = new Image();
    this.rightChar.src = imgRight;
    this.leftChar = new Image();
    this.leftChar.src = imgLeft;
    // this.obj.style = "background-color: transparent";
    this.spriteWidth = sWidth;
    this.spriteHeight = sHeight;
    this.cols = cols;
    this.rows = rows;
    this.width = this.spriteWidth / cols;
    this.height = this.spriteHeight / rows;
    this.srcX = 0;
    this.srcY = 0;
    this.elapsedTime = Date.now();
    this.left = false;
    this.idle = true;
    // this.changedDir = false;
    this.prevDir = "RIGHT";
    this.changed = false;
  }

  updateFrame(startFrame, endFrame, changedDir) {
    const delta = Date.now() - this.elapsedTime;
    if (this.curFrame === undefined || changedDir) this.curFrame = startFrame;
    if (delta < 1000 / 20) return;
    if (
      (this.curFrame >= endFrame && !this.left) ||
      (this.curFrame <= endFrame && this.left)
    ) {
      this.curFrame = startFrame;
    } else {
      if (!this.left) {
        this.curFrame += 1;
      } else {
        this.curFrame -= 1;
      }
    }
    this.srcX = this.curFrame * this.width;
    this.elapsedTime = Date.now();
  }

  changedDir(move) {
    let result;
    switch (move) {
      case "RIGHT":
        result = this.prevDir !== "RIGHT";
        this.prevDir = "RIGHT";
        return result;
      case "RIGHT RUN":
        result = this.prevDir !== "RIGHT RUN";
        this.prevDir = "RIGHT RUN";
        return result;
      case "LEFT":
        result = this.prevDir !== "LEFT";
        this.prevDir = "LEFT";
        return result;
      case "LEFT RUN":
        result = this.prevDir !== "LEFT RUN";
        this.prevDir = "LEFT RUN";
        return result;
      case "HOLD JUMP":
        result = this.prevDir !== "HOLD JUMP";
        // this.prevDir = "HOLD JUMP";
        return result;
    }
  }

  getAction(action) {
    if (this.left === true) {
      if (action === "HOLD JUMP") {
        this.changed = this.changedDir(action);
        return SPRITES_LOC.left.jump;
      } else if (this.idle === false) {
        // debugger
        this.changed = this.changedDir("LEFT RUN");
        return SPRITES_LOC.left.run;
      } else {
        this.changed = this.changedDir("LEFT");
        return SPRITES_LOC.left.idle;
      }
    } else {
      if (action === "HOLD JUMP") {
        this.changed = this.changedDir(action);
        return SPRITES_LOC.right.jump;
      } else if (this.idle === false) {
        this.changed = this.changedDir("RIGHT");
        return SPRITES_LOC.right.run;
      } else {
        this.changed = this.changedDir("RIGHT");
        return SPRITES_LOC.right.idle;
      }
    }
  }

  draw(ctx, x, y, w, h, action) {
    // ctx.clearRect(x, y, w, h);
    if (this.left === true) {
      const loc = this.getAction(action); 
        // debugger
      this.updateFrame(loc.start, loc.end, this.changed);
      ctx.drawImage(this.leftChar, this.srcX-2, this.srcY, this.width-2, this.height-2, x, y, w, h);
    } else {
      const loc = this.getAction(action); 
      this.updateFrame(loc.start, loc.end, this.changed);
      ctx.drawImage(this.rightChar, this.srcX+2, this.srcY, this.width-2, this.height-2, x, y, w, h);
    }
  }
}

export default Sprites;