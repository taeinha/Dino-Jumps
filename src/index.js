import './styles/index.scss';

import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const game = new Game();
  canvas.width = game.dim_x;
  canvas.height = game.dim_y;
  
  const ctx = canvas.getContext("2d");
  const gameView = new GameView(game, ctx);
  gameView.start();
});