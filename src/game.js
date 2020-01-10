import Climber from './climber';
import * as Util from './util';
import Platform from './platform';
import levels from './levels';
import { writeHighScoreData, retrieveHighScores, removeHighScore } from "./firebase";

class Game {
  constructor() {
    this.FPS = 60;
    this.MAX_VEL_Y = 15;
    this.MAX_LEVELS = Object.keys(levels).length;
    this.dim_x = 700;
    this.dim_y = 700;
    this.world_y = 700;
    // this.offset = 0;
    this.climberSize = [10, 20]; // width, height
    this.start_pos = [this.dim_x / 2, this.world_y - this.climberSize[1] - 25]; // x, y
    this.move_speed = 3;
    this.jump_speed = [27, 27]; // x 50, y 70
    this.floor_start = [12, this.world_y - 12];
    this.wall_start = [12 + 12, this.dim_x - 34];
    this.bg_color = "#000000";
    this.gravity = 1;
    this.arc = [1.5, 1.5];
    this.friction = 0.75;
    this.level = 1;
    this.elapsedTime = 0;
    this.seconds = 0;

    this.climber = new Climber({
      pos: this.start_pos,
      size: [10, 20],
      color: Util.randomColor(),
      game: this
    });

    this.platforms = levels[this.level].map(obj => new Platform(obj));

    this.highscores = null;
    this.winner = false;
    retrieveHighScores(this.setHighScores.bind(this));
  }

  setHighScores(data) {
    data.sort((a, b) => a.time - b.time);
    this.highscores = data;
    const highscoreList = document.getElementsByClassName("game-highscores")[0];
    this.highscores.forEach(hs => {
      highscoreList.innerHTML += `<li>${hs.name} - ${hs.time}</li>`;
    });
  }

  // viewPortUpdate() {
  //   const climber = this.climber;
  //   const climberCenterY = climber.pos[1] + climber.size[1] / 2;

  //   this.offset = this.dim_y - 75 - climberCenterY;
  //   // if (climberCenterY < this.viewPortOffset) {
  //     climber.pos[1] = climber.pos[1] + this.viewPortOffset;
  //   // }
  // }
  //Util.randomId()

  // updateOffset() {
  //   this.offset = this.start_pos[1] - this.climber.pos[1];
  //   debugger
  // }

  draw(ctx, delta) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    ctx.fillStyle = this.bg_color;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    // this.viewPortUpdate();
    this.floor(ctx);
    this.walls(ctx);
    this.climber.draw(ctx);
    this.drawPlatforms(ctx);
    this.drawTimer(ctx, delta);
  }

  drawTimer(ctx, delta) {
    this.seconds += delta / 1000;
    if (this.seconds >= 0.999 && !this.winner) {
      this.elapsedTime++;
      this.seconds = 0;
    }
    ctx.font = "20px Arial";
    ctx.fillStyle = "#aaffb0";
    ctx.fillText(Util.convertSeconds(this.elapsedTime), 35, 50);
  }

  drawPlatforms(ctx) {
    this.platforms.forEach(platform => {
      // platform.pos[1] -= this.offset;
      platform.draw(ctx);
    });
  }

  changePlatforms() {
    this.platforms = levels[this.level].map(obj => new Platform(obj));
  }

  nextLevel() {
    if (this.level >= this.MAX_LEVELS) {
      this.winner = true;
      this.openHighscoreModal();
    } else {
      this.restartLevel();
    }
  }

  openHighscoreModal() {
    let name = "";

    const modal = document.getElementById("highscore-modal");
    modal.className = "modal-background";

    modal.addEventListener("click", function hideModal(event) {
      if (event.target == modal) {
        modal.className = "modal-background hidden";
        modal.removeEventListener("click", hideModal);
      }
    });
    
    if (this.isWinner()) {
      const modalContent = document.getElementsByClassName("game-highscores-winner")[0];
      modalContent.className = "modal-content game-highscores-winner";
      
      const timeLabel = document.getElementById("game-highscores-form-time");
      timeLabel.innerText = `${this.elapsedTime} seconds`;

      const nameInput = document.getElementById("game-highscores-form-name");
      nameInput.addEventListener("change", e => (name = e.currentTarget.value));

      const button = document.getElementById("game-highscores-form-submit");
      button.addEventListener("click", e => {
        this.submitWinner(name, this.elapsedTime);
      });
    } else {
      const modalContent = document.getElementsByClassName("game-highscores-lose")[0];
      modalContent.className = "modal-content game-highscores-lose";
    }
    
  }

  submitWinner(name, time) {
    const numScores = this.highscores.length;
    const lastScore = this.highscores[numScores - 1];
    if (this.isWinner()) {
      removeHighScore(lastScore.id, name, time, this.setHighScores);
    } else {
      writeHighScoreData(name, time).then(el =>
        retrieveHighScores(this.setHighScores)
      );
    }
  }

  isWinner() {
    const numScores = this.highscores.length;
    const lastScore = this.highscores[numScores - 1];
    if (numScores === 10 && this.elapsedTime >= lastScore.time) return false;
    return true;
  }

  restartLevel() {
    this.climber.pos = [300, this.world_y - this.climberSize[1] - 25];
    this.level++;
    this.changePlatforms();
  }

  floor(ctx) {
    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, this.floor_start[1]);
    ctx.lineTo(this.dim_x, this.floor_start[1]);
    ctx.stroke();

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(0, this.floor_start[0]);
    ctx.lineTo(this.dim_x, this.floor_start[0]);
    ctx.stroke();
  }

  walls(ctx) {
    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(12, this.dim_y);
    ctx.stroke();

    ctx.strokeStyle = "#487299";
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(this.dim_x - 12, 0);
    ctx.lineTo(this.dim_x - 12, this.dim_y);
    ctx.stroke();
  }
}



export default Game;