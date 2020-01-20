import "./styles/reset.scss";
import './styles/index.scss';
import './styles/highscores.scss';
import './styles/sidebars.scss';
import './styles/grid.scss';

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

// const modal = document.getElementById("highscore-modal");
// const _listener = e => {
//   debugger
//   if (e.target === modal) {
//     modal.className = "modal-background hidden";
//   }
// };

// modal.addEventListener("onclick", _listener);

