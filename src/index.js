import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  
  const game = new Game();
  const ctx = canvas.getContext("2d");
  new GameView(game, ctx).start();
});