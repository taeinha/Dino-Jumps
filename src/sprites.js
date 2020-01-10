const SPRITES_LOC = {
  left: {
    idle: {
      start: 20,
      end: 23
    },
    run: {
      start: 13,
      end: 19
    },
    jump: {
      start: 0,
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
      end: 23
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
    if (delta < 1000 / 8) return;
      if (this.curFrame >= endFrame) {
        this.curFrame = startFrame;
      } else {
        this.curFrame += 1;
      }
      // if (startFrame === 17) debugger;      
    this.srcX = this.curFrame * this.width;
    this.elapsedTime = Date.now();
    // debugger
  }

  changedDir(move) {
    let result;
    switch (move) {
      case "RIGHT":
        result = this.prevDir !== "RIGHT";
        this.prevDir = "RIGHT";
        return result;
      case "LEFT":
        result = this.prevDir !== "LEFT";
        this.prevDir = "LEFT";
        return result;
      case "HOLD JUMP":
        result = this.prevDir !== "HOLD JUMP";
        this.prevDir = "HOLD JUMP";
        return result;
    }
  }

  getAction(action) {
    if (this.left === true) {
      if (action === "HOLD JUMP") {
        this.changed = this.changedDir(action);
        return SPRITES_LOC[left][jump];
      } else if (this.idle === false) {
        this.changed = this.changedDir(action);
        return SPRITES_LOC[left][run];
      } else {
        return SPRITES_LOC[left][idle];
      }
    } else {
      if (action === "HOLD JUMP") {
        return SPRITES_LOC[right][jump];
      } else if (this.idle === false) {
        return SPRITES_LOC[right][run];
      } else {
        return SPRITES_LOC[right][idle];
      }
    }
  }

  draw(ctx, x, y, w, h, action, startFrame, endFrame) {
    // ctx.clearRect(x, y, w, h);
    let changed;
    if (action === "HOLD JUMP") {
      changed = this.changedDir("HOLD JUMP");
    }
    if (this.left === true) {
      const offset = endFrame - startFrame;
      const newStart = this.cols - offset - 1;
      const newEnd = this.cols - startFrame - 1;
      // debugger
      changed = this.changedDir("LEFT");
      
      const startFrame =
        // debugger
        this.updateFrame(startFrame, endFrame, changed);
      ctx.drawImage(this.leftChar, this.srcX, this.srcY, this.width, this.height, x, y, w, h);
      this.prevDir = "LEFT";
    } else {
      changed = this.changedDir("RIGHT");
      this.updateFrame(startFrame, endFrame, changed);
      ctx.drawImage(this.rightChar, this.srcX, this.srcY, this.width, this.height, x, y, w, h);
    }
    
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}

export default Sprites;