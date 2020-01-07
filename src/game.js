import Climber from './climber';
import * as Util from './util';

class Game {
  constructor() {
    this.climber = new Climber({
      pos: Game.START_POS,
      size: Game.CLIMBER_SIZE,
      color: Util.randomColor(),
      game: this
    });
  }

  draw(ctx) {
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.floor(ctx);
    this.walls(ctx);
    this.climber.draw(ctx);
  }

  floor(ctx) {
    ctx.strokeStyle = "#108914";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, Game.FLOOR_START[1]);
    ctx.lineTo(600, Game.FLOOR_START[1]);
    ctx.stroke();

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, Game.FLOOR_START[0]);
    ctx.lineTo(600, Game.FLOOR_START[0]);
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

Game.DIM_X = 600;
Game.DIM_Y = 900;
Game.START_POS = [300, 826]; // x, y
Game.CLIMBER_SIZE = [25, 50]; // width, height
Game.MOVE_SPEED = [1.5, 30]; // x, y
Game.FLOOR_START = [12, 888];
Game.WALL_START = [12 + 12, 588 - 36];
Game.BG_COLOR = "#000000";
Game.GRAVITY = 1.5;
Game.FRICTION = 0.8;

export default Game;