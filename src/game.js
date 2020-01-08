import Climber from './climber';
import * as Util from './util';
import Platform from './platform';

class Game {

  constructor() {
    this.dim_x = 600;
    this.dim_y = 900;
    this.start_pos = [300, 826]; // x, y
    this.climberSize = [25, 50]; // width, height
    this.move_speed = 3;
    this.jump_speed = [50, 100]; // x, y
    this.floor_start = [12, 888];
    this.wall_start = [12 + 12, 588 - 36];
    this.bg_color = "#000000";
    this.gravity = 1.5;
    this.arc = [0.5, 10];
    this.friction = 0.8;

    this.climber = new Climber({
      pos: this.start_pos,
      size: [25, 50],
      color: Util.randomColor(),
      game: this
    });

    this.platform = new Platform({
      pos: [24, 700],
      size: [100, 100],
      color: "#ffac8e"
    });
  }

  draw(ctx) {
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);

    this.floor(ctx);
    this.walls(ctx);
    this.climber.draw(ctx);
    this.platform.draw(ctx);
  }

  floor(ctx) {
    ctx.strokeStyle = "#108914";
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