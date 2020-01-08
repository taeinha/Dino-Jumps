import Climber from './climber';
import * as Util from './util';
import Platform from './platform';
import levels from './levels';

class Game {

  constructor() {
    this.FPS = 60;
    this.MAX_VEL_Y = 15;
    this.dim_x = 600;
    this.dim_y = 900;
    this.world_y = 900;
    // this.offset = 0;
    this.climberSize = [5, 20]; // width, height
    this.start_pos = [300, this.world_y - this.climberSize[1] - 25]; // x, y
    this.move_speed = 3;
    this.jump_speed = [27, 27]; // x 50, y 70
    this.floor_start = [12, this.world_y - 12];
    this.wall_start = [12 + 12, 588 - 36];
    this.bg_color = "#000000";
    this.gravity = 1;
    this.arc = [1.5, 1.5];
    this.friction = 0.75;
    this.level = 1;

    this.climber = new Climber({
      pos: this.start_pos,
      size: [10, 50],
      color: Util.randomColor(),
      game: this
    });

    this.platforms = levels[this.level].map(obj => new Platform(obj));
  }

  // viewPortUpdate() {
  //   const climber = this.climber;
  //   const climberCenterY = climber.pos[1] + climber.size[1] / 2;

  //   this.offset = this.dim_y - 75 - climberCenterY;
  //   // if (climberCenterY < this.viewPortOffset) {
  //     climber.pos[1] = climber.pos[1] + this.viewPortOffset;
  //   // }    
  // }

  draw(ctx) {

    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    // this.viewPortUpdate();
    this.floor(ctx);
    this.walls(ctx);
    this.climber.draw(ctx);
    this.drawPlatforms(ctx);
  }

  drawPlatforms(ctx) {
    this.platforms.forEach(platform => {
      platform.draw(ctx);
    });
  }

  changePlatforms() {
    this.platforms = levels[this.level].map(obj => new Platform(obj));
  }

  nextLevel() {
    this.restartLevel();
    this.level++;
    this.changePlatforms();
  }

  restartLevel() {
    this.climber.pos = [300, this.world_y - this.climberSize[1] - 25];
  }

  floor(ctx) {
    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, this.floor_start[1]);
    ctx.lineTo(600, this.floor_start[1]);
    ctx.stroke();

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, this.floor_start[0]);
    ctx.lineTo(600, this.floor_start[0]);
    ctx.stroke();
  }

  walls(ctx) {
    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(12, 900);
    ctx.stroke();

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(588, 0);
    ctx.lineTo(588, 900);
    ctx.stroke();
  }
}



export default Game;