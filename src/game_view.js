class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.climber = this.game.climber;
    this.keys = [];
    this.startGame = false;
    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
  }

  setControl(e) {
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

  start() {
    // if (!this.startGame) {
      
    // } else {
      this.attachKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.render.bind(this));
    // }

    
  }

  render(time) {
    const delta = time - this.lastTime;
    requestAnimationFrame(this.render.bind(this));

    this.climber.physics();
    if (delta > 1000 / this.game.FPS) { // CAP FPS
      if (this.keys[0]) {
        this.climber.move(this.keys.toString(), delta);
      } 
      this.game.draw(this.ctx, delta);
      this.lastTime = time;
    }
  }
}

export default GameView;
