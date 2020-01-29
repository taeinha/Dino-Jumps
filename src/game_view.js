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
    const highscores = document.getElementsByClassName("game-highscores-list")[0];
    const controls = document.getElementsByClassName("game-controls-info")[0];
    const instructions = document.getElementsByClassName("game-instructions-info")[0];

    buttons[0].addEventListener("click", e => {
      this.switchHighscores(highscores);
      this.hideControls(controls);
      this.hideInstructions(instructions);
    });
    buttons[1].addEventListener("click", e => {
      this.hideHighscores(highscores);
      this.switchControls(controls);
      this.hideInstructions(instructions);
    });
    buttons[2].addEventListener("click", e => {
      this.hideHighscores(highscores);
      this.hideControls(controls);
      this.switchInstructions(instructions);
    });
  }

  switchHighscores(highscores) {
    this.showHighscores = !this.showHighscores;
    if (this.showHighscores) {
      highscores.className = "game-highscores-list";
    } else {
      highscores.className = "game-highscores-list hidden";
    }
  }

  switchControls(controls) {
    this.showControls = !this.showControls;
    if (this.showControls) {
      controls.className = "game-controls-info";
    } else {
      controls.className = "game-controls-info hidden";
    }
  }

  switchInstructions(instructions) {
    this.showInstructions = !this.showInstructions;
    if (this.showInstructions) {
      instructions.className = "game-instructions-info";
    } else {
      instructions.className = "game-instructions-info hidden";
    }
  }

  hideHighscores(highscores) {
    this.showHighscores = false;
    highscores.className = "game-highscores-list hidden";
  }

  hideControls(controls) {
    this.showControls = false;
    controls.className = "game-controls-info hidden";
  }

  hideInstructions(instructions) {
    this.showInstructions = false;
    instructions.className = "game-instructions-info hidden";
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
    if (delta > (1000 / this.game.FPS)) { // CAP FPS
      if (this.keys[0]) {
        this.climber.move(this.keys.toString(), delta);
      } 
      this.game.draw(this.ctx, delta);
      this.lastTime = time;
    }
  }
}

export default GameView;
