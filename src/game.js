import Climber from './climber';
import Util from './util';

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

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, Game.FLOOR_HEIGHT);
    ctx.lineTo(600, Game.FLOOR_HEIGHT);
    ctx.stroke();

    this.climber.draw(ctx);
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 1000;
Game.START_POS = [300, 75]; // x, y
Game.CLIMBER_SIZE = [25, 50]; // width, height
Game.MOVE_SPEED = [1.5, 1.5];
Game.FLOOR_HEIGHT = 50;
Game.BG_COLOR = "#000000";

export default Game;