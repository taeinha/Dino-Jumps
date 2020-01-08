class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.climber = this.game.climber;
    this.keys = [];
    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
  }

  setControl(e) {
    if (!this.keys.includes(e.key)) {
      this.keys.push(e.key);
    }
  }

  resetControl() {
    if (this.keys.includes("ArrowDown") && !this.keys.includes("ArrowUp")) {
      this.climber.releaseJump(null, this.keys.toString());
    }
    this.keys = [];
  }

  attachKeyHandlers() {
    window.addEventListener("keydown", this.setControl);
    window.addEventListener("keyup", this.resetControl);
  }

  start() {
    this.attachKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.render.bind(this));
  }

  render(time) {
    const delta = time - this.lastTime;

    if (this.keys[0]) {
      this.climber.move(this.keys.toString(), delta);
    } 
    this.climber.physics();
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.render.bind(this));
  }
}

export default GameView;
