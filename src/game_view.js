class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.climber = this.game.climber;
    this.resetControl();
    // this.keys = [];
    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
  }

  setControl(e) {
    // switch(e.key) {
    //   case 'ArrowLeft':
    //     this.controls.left = true;
    //     break;
    //   case 'ArrowRight':
    //     this.controls.right = true;
    //     break;
    //   case 'ArrowDown':
    //     this.controls.jump = true;
    //     break;
    // }
    if (!this.keys.includes(e.key)) {
      this.keys.push(e.key);
    }

  }

  resetControl() {
    // this.controls = {
    //   left: false,
    //   right: false,
    //   jump: false
    // };
    this.keys = [];
  }

  attachKeyHandlers() {
    window.addEventListener("keydown", this.setControl);
    window.addEventListener("keyup", this.resetControl);
  }

  start() {
    this.attachKeyHandlers();
    requestAnimationFrame(this.render.bind(this));
  }

  render() {
    if (this.keys[0]) {
      this.climber.move(this.keys.toString());
    }
    this.climber.physics();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.render.bind(this));
  }
}

export default GameView;
