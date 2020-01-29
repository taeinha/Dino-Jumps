class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.climber = this.game.climber;
    this.keys = [];
    this.startGame = false;
    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
    this.restartGame = false;
    this.showHighscores = true;
    this.showControls = false;
    this.showInstructions = false;
  }

  setControl(e) {
    if (e.key === "r" && !this.game.winModalExists()) {
      return this.game.restartGame();
    }
    if (!this.keys.includes(e.key)) {
      this.keys.push(e.key);
    }
    this.climber.holdKey();
  }

  resetControl() {
    if (this.keys.includes("ArrowDown") && !this.keys.includes("ArrowUp")) {
      this.climber.releaseJump(null, this.keys.toString());
    }
    this.climber.releaseKey();
    this.keys = [];
  }

  attachKeyHandlers() {
    window.addEventListener("keydown", this.setControl);
    window.addEventListener("keyup", this.resetControl);
  }

  removeKeyHandlers() {
    window.removeEventListener("keydown", this.setControl);
    window.removeEventListener("keyup", this.resetControl);
  }

  attachButtonHandlers() {
    const buttons = document.getElementsByClassName("game-sidebar-button");
    const highscores = document.getElementsByClassName(
      "game-highscores-list"
    )[0];
    const controls = document.getElementsByClassName("game-controls-info")[0];
    const instructions = document.getElementsByClassName(
      "game-instructions-info"
    )[0];

    buttons[0].addEventListener("click", e => {
      this.switchHighscores(highscores, buttons[0]);
      this.hideControls(controls, buttons[1]);
      this.hideInstructions(instructions, buttons[2]);
    });
    buttons[1].addEventListener("click", e => {
      this.hideHighscores(highscores, buttons[0]);
      this.switchControls(controls, buttons[1]);
      this.hideInstructions(instructions, buttons[2]);
    });
    buttons[2].addEventListener("click", e => {
      this.hideHighscores(highscores, buttons[0]);
      this.hideControls(controls, buttons[1]);
      this.switchInstructions(instructions, buttons[2]);
    });
  }

  switchHighscores(highscores, button) {
    this.showHighscores = !this.showHighscores;
    if (this.showHighscores) {
      highscores.className = "game-highscores-list";
      button.className = "game-sidebar-button game-sidebar-button-bottom";
    } else {
      highscores.className = "game-highscores-list side-hidden";
      button.className = "game-sidebar-button";
    }
  }

  switchControls(controls, button) {
    this.showControls = !this.showControls;
    if (this.showControls) {
      controls.className = "game-controls-info";
      button.className = "game-sidebar-button game-sidebar-button-bottom";
    } else {
      controls.className = "game-controls-info side-hidden";
      button.className = "game-sidebar-button";
    }
  }

  switchInstructions(instructions, button) {
    this.showInstructions = !this.showInstructions;
    if (this.showInstructions) {
      instructions.className = "game-instructions-info";
      button.className = "game-sidebar-button game-sidebar-button-bottom";
    } else {
      instructions.className = "game-instructions-info side-hidden";
      button.className = "game-sidebar-button";
    }
  }

  hideHighscores(highscores, button) {
    this.showHighscores = false;
    highscores.className = "game-highscores-list side-hidden";
    button.className = "game-sidebar-button";
  }

  hideControls(controls, button) {
    this.showControls = false;
    controls.className = "game-controls-info side-hidden";
    button.className = "game-sidebar-button";
  }

  hideInstructions(instructions, button) {
    this.showInstructions = false;
    instructions.className = "game-instructions-info side-hidden";
    button.className = "game-sidebar-button";
  }

  // setHighScores(data) {
  //   data.sort((a, b) => a.time - b.time);
  //   this.highscores = data;
  //   const highscoreList = document.getElementsByClassName("game-highscores-list")[0];
  //   this.highscores.forEach(hs => {
  //     highscoreList.innerHTML += `<li>${hs.name} - ${hs.time}</li>`;
  //   });
  // }

  start() {
    // if (!this.startGame) {

    // } else {
    this.attachKeyHandlers();
    this.attachButtonHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.render.bind(this));
    // }
  }

  render(time) {
    const delta = time - this.lastTime;
    requestAnimationFrame(this.render.bind(this));

    this.climber.physics();
    if (delta > 1000 / this.game.FPS) {
      // CAP FPS
      if (this.keys[0]) {
        this.climber.move(this.keys.toString(), delta);
      }
      this.game.draw(this.ctx, delta);
      this.lastTime = time;
    }
  }
}

export default GameView;
