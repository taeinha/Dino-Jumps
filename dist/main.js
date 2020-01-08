/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/climber.js":
/*!************************!*\
  !*** ./src/climber.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Climber =
/*#__PURE__*/
function () {
  function Climber(options) {
    _classCallCheck(this, Climber);

    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.game = options.game;
    this.jump = {
      up: false,
      hold: false,
      left: false,
      right: false
    };
    this.move = this.move.bind(this);
    this.jumpTime = 0;
  }

  _createClass(Climber, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.jump.hold) {
        this.size[1] = this.game.climberSize[1] / 2;
      } else {
        this.size[1] = this.game.climberSize[1];
      }

      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
      this.drawPowerBar(ctx);
    }
  }, {
    key: "drawPowerBar",
    value: function drawPowerBar(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(50, 882, 100, 12);
      ctx.fillStyle = "red";
      ctx.fillRect(50, 882, 100 * this.jumpTime, 12);
    }
  }, {
    key: "move",
    value: function move(dir, delta) {
      switch (dir) {
        case "ArrowLeft":
          this.vel[0] = -1 * this.game.move_speed;
          break;

        case "ArrowRight":
          this.vel[0] = this.game.move_speed;
          break;
      }

      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft" || dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight" || dir === "ArrowDown") {
        if (!this.jump.up) this.holdJump(delta, this.handleJump(dir));
      }
    }
  }, {
    key: "handleJump",
    value: function handleJump(dir) {
      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
        this.jump.left = true;
        return -this.game.jump_speed[0];
      } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
        this.jump.right = true;
        return this.game.jump_speed[0];
      } else if (dir === "ArrowDown") {
        return 0.01;
      }
    }
  }, {
    key: "holdJump",
    value: function holdJump(delta, velX) {
      this.jump.hold = true;
      this.jumpTime += delta / 1000; // if (!this.jump.hold) this.size[1] = this.size[1] / 2;

      if (this.jumpTime >= 1) {
        // hold down for 1 second
        this.releaseJump(velX);
      }
    }
  }, {
    key: "releaseJump",
    value: function releaseJump(velX, keys) {
      var vel_X = velX || this.handleJump(keys);
      this.jump.hold = false;

      if (!this.jump.up) {
        this.vel[1] -= this.jumpTime * this.game.jump_speed[1];
        if (this.jumpTime > 0.3) this.vel[0] += this.jumpTime * vel_X;
        this.jump.up = true;
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }

      this.jumpTime = 0;
    }
  }, {
    key: "gravity",
    value: function gravity() {
      if (this.vel[1] < this.game.MAX_VEL_Y) {
        this.vel[1] += this.game.gravity;
      }
    }
  }, {
    key: "arc",
    value: function arc() {
      if (this.vel[1] < this.game.MAX_VEL_Y) {
        this.vel[1] += this.game.arc[1];

        if (this.jump.left) {
          this.vel[0] -= this.game.arc[0];
        } else if (this.jump.right) {
          this.vel[0] += this.game.arc[0];
        }
      }
    }
  }, {
    key: "friction",
    value: function friction() {
      this.vel[0] *= this.game.friction;
    }
  }, {
    key: "allowJump",
    value: function allowJump() {
      this.jump.up = false;
      this.jump.left = false;
      this.jump.right = false;
      this.friction();
    }
  }, {
    key: "floor",
    value: function floor() {
      if (this.pos[1] > this.game.start_pos[1]) {
        this.pos[1] = this.game.start_pos[1];
        this.pos[1] += this.jump.hold ? 10 : 0;
        this.allowJump();
        this.vel[1] = 0;
      } else if (this.pos[1] < this.game.floor_start[0]) {
        this.pos[1] = this.game.floor_start[0];
        this.allowJump();
        this.vel[1] = 0;
      }
    }
  }, {
    key: "walls",
    value: function walls() {
      if (this.pos[0] < this.game.wall_start[0]) {
        // LEFT
        this.pos[0] = this.game.wall_start[0];
        this.vel[0] = -this.vel[0] / 2;
      } else if (this.pos[0] > this.game.wall_start[1]) {
        // RIGHT
        this.pos[0] = this.game.wall_start[1];
        this.vel[0] = -this.vel[0] / 2;
      }
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck(rect) {
      return this.pos[0] < rect.pos[0] + rect.size[0] && //
      this.pos[0] + this.size[0] > rect.pos[0] && this.pos[1] < rect.pos[1] + rect.size[1] && this.pos[1] + this.size[1] > rect.pos[1];
    }
  }, {
    key: "handleCollision",
    value: function handleCollision(rect) {
      var climberCenterX = this.pos[0] + this.size[0] * 0.5;
      var climberCenterY = this.pos[1] + this.size[1] * 0.5;
      var rectCenterX = rect.pos[0] + rect.size[0] * 0.5;
      var rectCenterY = rect.pos[1] + rect.size[1] * 0.5;
      var deltaX = climberCenterX - rectCenterX;
      var deltaY = climberCenterY - rectCenterY;
      var avgWidth = (rect.size[0] + this.size[0]) * 0.5;
      var avgHeight = (rect.size[1] + this.size[1]) * 0.5;
      if (Math.abs(deltaX) > avgWidth || Math.abs(deltaY) > avgHeight) return;

      if (Math.abs(deltaX / rect.size[0]) < Math.abs(deltaY / rect.size[1])) {
        if (deltaY < 0) {
          // TOP
          this.pos[1] = rect.pos[1] - this.size[1];
          this.vel[1] = 0;
          this.allowJump();
          return true;
        } else {
          // BOTTOM
          this.pos[1] = rect.pos[1] + rect.size[1];
          this.vel = [this.vel[0] / 4, this.game.gravity];
        }
      } else {
        if (deltaX < 0) {
          // LEFT
          // debugger
          this.pos[0] = rect.pos[0] - this.size[0];
          this.vel = [Math.min(-this.vel[0] / 2, -3), 3];
        } else {
          // RIGHT
          // debugger
          this.pos[0] = rect.pos[0] + rect.size[0];
          this.vel = [Math.min(-this.vel[0] / 2, -3), 3];
        }
      }

      return false;
    }
  }, {
    key: "checkPlatforms",
    value: function checkPlatforms() {
      var _this = this;

      this.game.platforms.forEach(function (platform) {
        // if(this.collisionCheck(platform)) {
        if (_this.handleCollision(platform) && platform.winner) {
          _this.game.nextLevel();
        } // }

      });
    }
  }, {
    key: "physics",
    value: function physics() {
      this.gravity();
      if (this.jump.up) this.arc();
      this.friction();
      this.floor();
      this.walls();
      this.checkPlatforms();
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
  }]);

  return Climber;
}();

/* harmony default export */ __webpack_exports__["default"] = (Climber);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _climber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./climber */ "./src/climber.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./src/platform.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/levels.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.FPS = 60;
    this.MAX_VEL_Y = 15;
    this.dim_x = 600;
    this.dim_y = 900;
    this.world_y = 900; // this.offset = 0;

    this.climberSize = [5, 20]; // width, height

    this.start_pos = [300, this.world_y - this.climberSize[1] - 25]; // x, y

    this.move_speed = 3;
    this.jump_speed = [27, 27]; // x 50, y 70

    this.floor_start = [12, this.world_y - 12];
    this.wall_start = [12 + 12, 588 - 36];
    this.bg_color = "#000000";
    this.gravity = 1;
    this.arc = [1.5, 1.5];
    this.friction = 0.75;
    this.level = 1;
    this.climber = new _climber__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos: this.start_pos,
      size: [10, 50],
      color: _util__WEBPACK_IMPORTED_MODULE_1__["randomColor"](),
      game: this
    });
    this.platforms = _levels__WEBPACK_IMPORTED_MODULE_3__["default"][this.level].map(function (obj) {
      return new _platform__WEBPACK_IMPORTED_MODULE_2__["default"](obj);
    });
  } // viewPortUpdate() {
  //   const climber = this.climber;
  //   const climberCenterY = climber.pos[1] + climber.size[1] / 2;
  //   this.offset = this.dim_y - 75 - climberCenterY;
  //   // if (climberCenterY < this.viewPortOffset) {
  //     climber.pos[1] = climber.pos[1] + this.viewPortOffset;
  //   // }    
  // }


  _createClass(Game, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.dim_x, this.dim_y);
      ctx.fillStyle = this.bg_color;
      ctx.fillRect(0, 0, this.dim_x, this.dim_y); // this.viewPortUpdate();

      this.floor(ctx);
      this.walls(ctx);
      this.climber.draw(ctx);
      this.drawPlatforms(ctx);
    }
  }, {
    key: "drawPlatforms",
    value: function drawPlatforms(ctx) {
      this.platforms.forEach(function (platform) {
        platform.draw(ctx);
      });
    }
  }, {
    key: "changePlatforms",
    value: function changePlatforms() {
      this.platforms = _levels__WEBPACK_IMPORTED_MODULE_3__["default"][this.level].map(function (obj) {
        return new _platform__WEBPACK_IMPORTED_MODULE_2__["default"](obj);
      });
    }
  }, {
    key: "nextLevel",
    value: function nextLevel() {
      this.restartLevel();
      this.level++;
      this.changePlatforms();
    }
  }, {
    key: "restartLevel",
    value: function restartLevel() {
      this.climber.pos = [300, this.world_y - this.climberSize[1] - 25];
    }
  }, {
    key: "floor",
    value: function floor(ctx) {
      ctx.strokeStyle = "#487299";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(0, this.floor_start[1]);
      ctx.lineTo(600, this.floor_start[1]);
      ctx.stroke();
      ctx.strokeStyle = "#487299";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(0, this.floor_start[0]);
      ctx.lineTo(600, this.floor_start[0]);
      ctx.stroke();
    }
  }, {
    key: "walls",
    value: function walls(ctx) {
      ctx.strokeStyle = "#487299";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(12, 900);
      ctx.stroke();
      ctx.strokeStyle = "#487299";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(588, 0);
      ctx.lineTo(588, 900);
      ctx.stroke();
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView =
/*#__PURE__*/
function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.climber = this.game.climber;
    this.keys = [];
    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
  }

  _createClass(GameView, [{
    key: "setControl",
    value: function setControl(e) {
      if (!this.keys.includes(e.key)) {
        this.keys.push(e.key);
      }
    }
  }, {
    key: "resetControl",
    value: function resetControl() {
      if (this.keys.includes("ArrowDown") && !this.keys.includes("ArrowUp")) {
        this.climber.releaseJump(null, this.keys.toString());
      }

      this.keys = [];
    }
  }, {
    key: "attachKeyHandlers",
    value: function attachKeyHandlers() {
      window.addEventListener("keydown", this.setControl);
      window.addEventListener("keyup", this.resetControl);
    }
  }, {
    key: "start",
    value: function start() {
      this.attachKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.render.bind(this));
    }
  }, {
    key: "render",
    value: function render(time) {
      var delta = time - this.lastTime;
      requestAnimationFrame(this.render.bind(this));
      this.climber.physics();

      if (delta > 1000 / this.game.FPS) {
        // CAP FPS
        if (this.keys[0]) {
          this.climber.move(this.keys.toString(), delta);
        }

        this.game.draw(this.ctx);
        this.lastTime = time;
      }
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementsByTagName("canvas")[0];
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
  canvas.width = game.dim_x;
  canvas.height = game.dim_y;
  var ctx = canvas.getContext("2d");
  var gameView = new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx);
  gameView.start();
});

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var levels = {
  1: [{
    pos: [100, 750],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 625],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [470, 500],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 380],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [100, 250],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [250, 120],
    size: [100, 30],
    color: "gold",
    winner: true
  }],
  2: [{
    pos: [100, 750],
    size: [50, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 625],
    size: [50, 30],
    color: "#ffac8e"
  }, {
    pos: [470, 500],
    size: [50, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 380],
    size: [50, 30],
    color: "#ffac8e"
  }, {
    pos: [100, 250],
    size: [50, 30],
    color: "#ffac8e"
  }, {
    pos: [250, 120],
    size: [50, 30],
    color: "gold",
    winner: true
  }],
  3: [{
    pos: [100, 750],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 625],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [470, 500],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [300, 380],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [100, 250],
    size: [100, 30],
    color: "#ffac8e"
  }, {
    pos: [250, 120],
    size: [100, 30],
    color: "gold",
    winner: true
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (levels);

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform =
/*#__PURE__*/
function () {
  function Platform(options) {
    _classCallCheck(this, Platform);

    this.pos = options.pos;
    this.vel = options.vel || [0, 0];
    this.size = options.size;
    this.color = options.color;
    this.winner = options.winner || false;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    }
  }]);

  return Platform;
}();

/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
var COLORS = ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#aaffc3", "#808000", "#ffd8b1", "#808080", "#ffffff"];
var randomColor = function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkNsaW1iZXIiLCJvcHRpb25zIiwicG9zIiwidmVsIiwic2l6ZSIsImNvbG9yIiwiZ2FtZSIsImp1bXAiLCJ1cCIsImhvbGQiLCJsZWZ0IiwicmlnaHQiLCJtb3ZlIiwiYmluZCIsImp1bXBUaW1lIiwiY3R4IiwiY2xpbWJlclNpemUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdQb3dlckJhciIsImRpciIsImRlbHRhIiwibW92ZV9zcGVlZCIsImhvbGRKdW1wIiwiaGFuZGxlSnVtcCIsImp1bXBfc3BlZWQiLCJ2ZWxYIiwicmVsZWFzZUp1bXAiLCJrZXlzIiwidmVsX1giLCJNQVhfVkVMX1kiLCJncmF2aXR5IiwiYXJjIiwiZnJpY3Rpb24iLCJzdGFydF9wb3MiLCJhbGxvd0p1bXAiLCJmbG9vcl9zdGFydCIsIndhbGxfc3RhcnQiLCJyZWN0IiwiY2xpbWJlckNlbnRlclgiLCJjbGltYmVyQ2VudGVyWSIsInJlY3RDZW50ZXJYIiwicmVjdENlbnRlclkiLCJkZWx0YVgiLCJkZWx0YVkiLCJhdmdXaWR0aCIsImF2Z0hlaWdodCIsIk1hdGgiLCJhYnMiLCJtaW4iLCJwbGF0Zm9ybXMiLCJmb3JFYWNoIiwicGxhdGZvcm0iLCJoYW5kbGVDb2xsaXNpb24iLCJ3aW5uZXIiLCJuZXh0TGV2ZWwiLCJmbG9vciIsIndhbGxzIiwiY2hlY2tQbGF0Zm9ybXMiLCJHYW1lIiwiRlBTIiwiZGltX3giLCJkaW1feSIsIndvcmxkX3kiLCJiZ19jb2xvciIsImxldmVsIiwiY2xpbWJlciIsIlV0aWwiLCJsZXZlbHMiLCJtYXAiLCJvYmoiLCJQbGF0Zm9ybSIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3UGxhdGZvcm1zIiwicmVzdGFydExldmVsIiwiY2hhbmdlUGxhdGZvcm1zIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJHYW1lVmlldyIsInNldENvbnRyb2wiLCJyZXNldENvbnRyb2wiLCJlIiwiaW5jbHVkZXMiLCJrZXkiLCJwdXNoIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoS2V5SGFuZGxlcnMiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInRpbWUiLCJwaHlzaWNzIiwiZG9jdW1lbnQiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3Iiwic3RhcnQiLCJDT0xPUlMiLCJyYW5kb21Db2xvciIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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LFNBUGEsRUFRYixTQVJhLEVBU2IsU0FUYSxFQVViLFNBVmEsRUFXYixTQVhhLEVBWWIsU0FaYSxFQWFiLFNBYmEsRUFjYixTQWRhLEVBZWIsU0FmYSxFQWdCYixTQWhCYSxFQWlCYixTQWpCYSxFQWtCYixTQWxCYSxFQW1CYixTQW5CYSxDQUFmO0FBc0JPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDL0IsU0FBT0QsTUFBTSxDQUFDNUQsSUFBSSxDQUFDUyxLQUFMLENBQVdULElBQUksQ0FBQzhELE1BQUwsS0FBZ0JGLE1BQU0sQ0FBQ0csTUFBbEMsQ0FBRCxDQUFiO0FBQ0QsQ0FGTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5jbGFzcyBDbGltYmVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgdGhpcy52ZWwgPSBvcHRpb25zLnZlbCB8fCBbMCwgMF07XG4gICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuZ2FtZSA9IG9wdGlvbnMuZ2FtZTtcbiAgICB0aGlzLmp1bXAgPSB7XG4gICAgICB1cDogZmFsc2UsXG4gICAgICBob2xkOiBmYWxzZSxcbiAgICAgIGxlZnQ6IGZhbHNlLFxuICAgICAgcmlnaHQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmp1bXBUaW1lID0gMDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgaWYgKHRoaXMuanVtcC5ob2xkKSB7XG4gICAgICB0aGlzLnNpemVbMV0gPSB0aGlzLmdhbWUuY2xpbWJlclNpemVbMV0gLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpemVbMV0gPSB0aGlzLmdhbWUuY2xpbWJlclNpemVbMV07XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5zaXplWzBdLCB0aGlzLnNpemVbMV0pO1xuXG4gICAgdGhpcy5kcmF3UG93ZXJCYXIoY3R4KTtcbiAgfVxuXG4gIGRyYXdQb3dlckJhcihjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgODgyLCAxMDAsIDEyKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgODgyLCAxMDAgKiB0aGlzLmp1bXBUaW1lLCAxMik7XG4gIH1cblxuICBtb3ZlKGRpciwgZGVsdGEpIHtcbiAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICB0aGlzLnZlbFswXSA9IC0xICogdGhpcy5nYW1lLm1vdmVfc3BlZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgdGhpcy52ZWxbMF0gPSB0aGlzLmdhbWUubW92ZV9zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGlyID09PSBcIkFycm93TGVmdCxBcnJvd0Rvd25cIiB8fFxuICAgICAgZGlyID09PSBcIkFycm93RG93bixBcnJvd0xlZnRcIiB8fFxuICAgICAgZGlyID09PSBcIkFycm93UmlnaHQsQXJyb3dEb3duXCIgfHxcbiAgICAgIGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dSaWdodFwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dEb3duXCJcbiAgICApIHtcbiAgICAgIGlmICghdGhpcy5qdW1wLnVwKSB0aGlzLmhvbGRKdW1wKGRlbHRhLCB0aGlzLmhhbmRsZUp1bXAoZGlyKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSnVtcChkaXIpIHtcbiAgICBpZiAoZGlyID09PSBcIkFycm93TGVmdCxBcnJvd0Rvd25cIiB8fCBkaXIgPT09IFwiQXJyb3dEb3duLEFycm93TGVmdFwiKSB7XG4gICAgICB0aGlzLmp1bXAubGVmdCA9IHRydWU7XG4gICAgICByZXR1cm4gLXRoaXMuZ2FtZS5qdW1wX3NwZWVkWzBdO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkaXIgPT09IFwiQXJyb3dSaWdodCxBcnJvd0Rvd25cIiB8fFxuICAgICAgZGlyID09PSBcIkFycm93RG93bixBcnJvd1JpZ2h0XCJcbiAgICApIHtcbiAgICAgIHRoaXMuanVtcC5yaWdodCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lLmp1bXBfc3BlZWRbMF07XG4gICAgfSBlbHNlIGlmIChkaXIgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIHJldHVybiAwLjAxO1xuICAgIH1cbiAgfVxuXG4gIGhvbGRKdW1wKGRlbHRhLCB2ZWxYKSB7XG4gICAgdGhpcy5qdW1wLmhvbGQgPSB0cnVlO1xuICAgIHRoaXMuanVtcFRpbWUgKz0gZGVsdGEgLyAxMDAwO1xuICAgIC8vIGlmICghdGhpcy5qdW1wLmhvbGQpIHRoaXMuc2l6ZVsxXSA9IHRoaXMuc2l6ZVsxXSAvIDI7XG4gICAgaWYgKHRoaXMuanVtcFRpbWUgPj0gMSkge1xuICAgICAgLy8gaG9sZCBkb3duIGZvciAxIHNlY29uZFxuICAgICAgdGhpcy5yZWxlYXNlSnVtcCh2ZWxYKTtcbiAgICB9XG4gIH1cblxuICByZWxlYXNlSnVtcCh2ZWxYLCBrZXlzKSB7XG4gICAgY29uc3QgdmVsX1ggPSB2ZWxYIHx8IHRoaXMuaGFuZGxlSnVtcChrZXlzKTtcbiAgICB0aGlzLmp1bXAuaG9sZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5qdW1wLnVwKSB7XG4gICAgICB0aGlzLnZlbFsxXSAtPSB0aGlzLmp1bXBUaW1lICogdGhpcy5nYW1lLmp1bXBfc3BlZWRbMV07XG4gICAgICBpZiAodGhpcy5qdW1wVGltZSA+IDAuMykgdGhpcy52ZWxbMF0gKz0gdGhpcy5qdW1wVGltZSAqIHZlbF9YO1xuICAgICAgdGhpcy5qdW1wLnVwID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIH1cblxuICAgIHRoaXMuanVtcFRpbWUgPSAwO1xuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAodGhpcy52ZWxbMV0gPCB0aGlzLmdhbWUuTUFYX1ZFTF9ZKSB7XG4gICAgICB0aGlzLnZlbFsxXSArPSB0aGlzLmdhbWUuZ3Jhdml0eTtcbiAgICB9XG4gIH1cblxuICBhcmMoKSB7XG4gICAgaWYgKHRoaXMudmVsWzFdIDwgdGhpcy5nYW1lLk1BWF9WRUxfWSkge1xuICAgICAgdGhpcy52ZWxbMV0gKz0gdGhpcy5nYW1lLmFyY1sxXTtcbiAgICAgIGlmICh0aGlzLmp1bXAubGVmdCkge1xuICAgICAgICB0aGlzLnZlbFswXSAtPSB0aGlzLmdhbWUuYXJjWzBdO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXAucmlnaHQpIHtcbiAgICAgICAgdGhpcy52ZWxbMF0gKz0gdGhpcy5nYW1lLmFyY1swXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmcmljdGlvbigpIHtcbiAgICB0aGlzLnZlbFswXSAqPSB0aGlzLmdhbWUuZnJpY3Rpb247XG4gIH1cblxuICBhbGxvd0p1bXAoKSB7XG4gICAgdGhpcy5qdW1wLnVwID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXAucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmZyaWN0aW9uKCk7XG4gIH1cblxuICBmbG9vcigpIHtcbiAgICBpZiAodGhpcy5wb3NbMV0gPiB0aGlzLmdhbWUuc3RhcnRfcG9zWzFdKSB7XG4gICAgICB0aGlzLnBvc1sxXSA9IHRoaXMuZ2FtZS5zdGFydF9wb3NbMV07XG4gICAgICB0aGlzLnBvc1sxXSArPSB0aGlzLmp1bXAuaG9sZCA/IDEwIDogMDtcbiAgICAgIHRoaXMuYWxsb3dKdW1wKCk7XG4gICAgICB0aGlzLnZlbFsxXSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1sxXSA8IHRoaXMuZ2FtZS5mbG9vcl9zdGFydFswXSkge1xuICAgICAgdGhpcy5wb3NbMV0gPSB0aGlzLmdhbWUuZmxvb3Jfc3RhcnRbMF07XG4gICAgICB0aGlzLmFsbG93SnVtcCgpO1xuICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHdhbGxzKCkge1xuICAgIGlmICh0aGlzLnBvc1swXSA8IHRoaXMuZ2FtZS53YWxsX3N0YXJ0WzBdKSB7IC8vIExFRlRcbiAgICAgIHRoaXMucG9zWzBdID0gdGhpcy5nYW1lLndhbGxfc3RhcnRbMF07XG4gICAgICB0aGlzLnZlbFswXSA9IC10aGlzLnZlbFswXSAvIDI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1swXSA+IHRoaXMuZ2FtZS53YWxsX3N0YXJ0WzFdKSB7IC8vIFJJR0hUXG4gICAgICB0aGlzLnBvc1swXSA9IHRoaXMuZ2FtZS53YWxsX3N0YXJ0WzFdO1xuICAgICAgdGhpcy52ZWxbMF0gPSAtdGhpcy52ZWxbMF0gLyAyO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbkNoZWNrKHJlY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wb3NbMF0gPCByZWN0LnBvc1swXSArIHJlY3Quc2l6ZVswXSAmJiAvL1xuICAgICAgdGhpcy5wb3NbMF0gKyB0aGlzLnNpemVbMF0gPiByZWN0LnBvc1swXSAmJlxuICAgICAgdGhpcy5wb3NbMV0gPCByZWN0LnBvc1sxXSArIHJlY3Quc2l6ZVsxXSAmJlxuICAgICAgdGhpcy5wb3NbMV0gKyB0aGlzLnNpemVbMV0gPiByZWN0LnBvc1sxXVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVDb2xsaXNpb24ocmVjdCkge1xuICAgIGNvbnN0IGNsaW1iZXJDZW50ZXJYID0gdGhpcy5wb3NbMF0gKyAodGhpcy5zaXplWzBdICogMC41KTtcbiAgICBjb25zdCBjbGltYmVyQ2VudGVyWSA9IHRoaXMucG9zWzFdICsgKHRoaXMuc2l6ZVsxXSAqIDAuNSk7XG4gICAgY29uc3QgcmVjdENlbnRlclggPSByZWN0LnBvc1swXSArIChyZWN0LnNpemVbMF0gKiAwLjUpO1xuICAgIGNvbnN0IHJlY3RDZW50ZXJZID0gcmVjdC5wb3NbMV0gKyAocmVjdC5zaXplWzFdICogMC41KTtcblxuICAgIGNvbnN0IGRlbHRhWCA9IGNsaW1iZXJDZW50ZXJYIC0gcmVjdENlbnRlclg7IFxuICAgIGNvbnN0IGRlbHRhWSA9IGNsaW1iZXJDZW50ZXJZIC0gcmVjdENlbnRlclk7XG4gICAgY29uc3QgYXZnV2lkdGggPSAocmVjdC5zaXplWzBdICsgdGhpcy5zaXplWzBdKSAqIDAuNTsgXG4gICAgY29uc3QgYXZnSGVpZ2h0ID0gKHJlY3Quc2l6ZVsxXSArIHRoaXMuc2l6ZVsxXSkgKiAwLjU7IFxuXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBhdmdXaWR0aCB8fCBNYXRoLmFicyhkZWx0YVkpID4gYXZnSGVpZ2h0KSByZXR1cm47XG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWCAvIHJlY3Quc2l6ZVswXSkgPCBNYXRoLmFicyhkZWx0YVkgLyByZWN0LnNpemVbMV0pKSB7XG4gICAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICAvLyBUT1BcbiAgICAgICAgdGhpcy5wb3NbMV0gPSByZWN0LnBvc1sxXSAtIHRoaXMuc2l6ZVsxXTtcbiAgICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgICAgICB0aGlzLmFsbG93SnVtcCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJPVFRPTVxuICAgICAgICB0aGlzLnBvc1sxXSA9IHJlY3QucG9zWzFdICsgcmVjdC5zaXplWzFdO1xuICAgICAgICB0aGlzLnZlbCA9IFt0aGlzLnZlbFswXSAvIDQsIHRoaXMuZ2FtZS5ncmF2aXR5XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlbHRhWCA8IDApIHtcbiAgICAgICAgLy8gTEVGVFxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnBvc1swXSA9IHJlY3QucG9zWzBdIC0gdGhpcy5zaXplWzBdO1xuICAgICAgICB0aGlzLnZlbCA9IFtNYXRoLm1pbigtdGhpcy52ZWxbMF0gLyAyLCAtMyksIDNdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUklHSFRcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5wb3NbMF0gPSByZWN0LnBvc1swXSArIHJlY3Quc2l6ZVswXTtcbiAgICAgICAgdGhpcy52ZWwgPSBbTWF0aC5taW4oLXRoaXMudmVsWzBdIC8gMiwgLTMpLCAzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5nYW1lLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgIC8vIGlmKHRoaXMuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUNvbGxpc2lvbihwbGF0Zm9ybSkgJiYgcGxhdGZvcm0ud2lubmVyKSB7XG4gICAgICAgICAgdGhpcy5nYW1lLm5leHRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgICAvLyB9XG4gICAgfSk7XG4gIH1cblxuICBwaHlzaWNzKCkge1xuICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgIGlmICh0aGlzLmp1bXAudXApIHRoaXMuYXJjKCk7XG4gICAgdGhpcy5mcmljdGlvbigpO1xuICAgIHRoaXMuZmxvb3IoKTtcbiAgICB0aGlzLndhbGxzKCk7XG4gICAgdGhpcy5jaGVja1BsYXRmb3JtcygpO1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGltYmVyOyIsImltcG9ydCBDbGltYmVyIGZyb20gJy4vY2xpbWJlcic7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWxzJztcblxuY2xhc3MgR2FtZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5GUFMgPSA2MDtcbiAgICB0aGlzLk1BWF9WRUxfWSA9IDE1O1xuICAgIHRoaXMuZGltX3ggPSA2MDA7XG4gICAgdGhpcy5kaW1feSA9IDkwMDtcbiAgICB0aGlzLndvcmxkX3kgPSA5MDA7XG4gICAgLy8gdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuY2xpbWJlclNpemUgPSBbNSwgMjBdOyAvLyB3aWR0aCwgaGVpZ2h0XG4gICAgdGhpcy5zdGFydF9wb3MgPSBbMzAwLCB0aGlzLndvcmxkX3kgLSB0aGlzLmNsaW1iZXJTaXplWzFdIC0gMjVdOyAvLyB4LCB5XG4gICAgdGhpcy5tb3ZlX3NwZWVkID0gMztcbiAgICB0aGlzLmp1bXBfc3BlZWQgPSBbMjcsIDI3XTsgLy8geCA1MCwgeSA3MFxuICAgIHRoaXMuZmxvb3Jfc3RhcnQgPSBbMTIsIHRoaXMud29ybGRfeSAtIDEyXTtcbiAgICB0aGlzLndhbGxfc3RhcnQgPSBbMTIgKyAxMiwgNTg4IC0gMzZdO1xuICAgIHRoaXMuYmdfY29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuICAgIHRoaXMuYXJjID0gWzEuNSwgMS41XTtcbiAgICB0aGlzLmZyaWN0aW9uID0gMC43NTtcbiAgICB0aGlzLmxldmVsID0gMTtcblxuICAgIHRoaXMuY2xpbWJlciA9IG5ldyBDbGltYmVyKHtcbiAgICAgIHBvczogdGhpcy5zdGFydF9wb3MsXG4gICAgICBzaXplOiBbMTAsIDUwXSxcbiAgICAgIGNvbG9yOiBVdGlsLnJhbmRvbUNvbG9yKCksXG4gICAgICBnYW1lOiB0aGlzXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXRmb3JtcyA9IGxldmVsc1t0aGlzLmxldmVsXS5tYXAob2JqID0+IG5ldyBQbGF0Zm9ybShvYmopKTtcbiAgfVxuXG4gIC8vIHZpZXdQb3J0VXBkYXRlKCkge1xuICAvLyAgIGNvbnN0IGNsaW1iZXIgPSB0aGlzLmNsaW1iZXI7XG4gIC8vICAgY29uc3QgY2xpbWJlckNlbnRlclkgPSBjbGltYmVyLnBvc1sxXSArIGNsaW1iZXIuc2l6ZVsxXSAvIDI7XG5cbiAgLy8gICB0aGlzLm9mZnNldCA9IHRoaXMuZGltX3kgLSA3NSAtIGNsaW1iZXJDZW50ZXJZO1xuICAvLyAgIC8vIGlmIChjbGltYmVyQ2VudGVyWSA8IHRoaXMudmlld1BvcnRPZmZzZXQpIHtcbiAgLy8gICAgIGNsaW1iZXIucG9zWzFdID0gY2xpbWJlci5wb3NbMV0gKyB0aGlzLnZpZXdQb3J0T2Zmc2V0O1xuICAvLyAgIC8vIH0gICAgXG4gIC8vIH1cblxuICBkcmF3KGN0eCkge1xuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbV94LCB0aGlzLmRpbV95KTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5iZ19jb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1feCwgdGhpcy5kaW1feSk7XG4gICAgLy8gdGhpcy52aWV3UG9ydFVwZGF0ZSgpO1xuICAgIHRoaXMuZmxvb3IoY3R4KTtcbiAgICB0aGlzLndhbGxzKGN0eCk7XG4gICAgdGhpcy5jbGltYmVyLmRyYXcoY3R4KTtcbiAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoY3R4KTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybXMoY3R4KSB7XG4gICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICBwbGF0Zm9ybS5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBsZXZlbHNbdGhpcy5sZXZlbF0ubWFwKG9iaiA9PiBuZXcgUGxhdGZvcm0ob2JqKSk7XG4gIH1cblxuICBuZXh0TGV2ZWwoKSB7XG4gICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICB0aGlzLmxldmVsKys7XG4gICAgdGhpcy5jaGFuZ2VQbGF0Zm9ybXMoKTtcbiAgfVxuXG4gIHJlc3RhcnRMZXZlbCgpIHtcbiAgICB0aGlzLmNsaW1iZXIucG9zID0gWzMwMCwgdGhpcy53b3JsZF95IC0gdGhpcy5jbGltYmVyU2l6ZVsxXSAtIDI1XTtcbiAgfVxuXG4gIGZsb29yKGN0eCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzQ4NzI5OVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCB0aGlzLmZsb29yX3N0YXJ0WzFdKTtcbiAgICBjdHgubGluZVRvKDYwMCwgdGhpcy5mbG9vcl9zdGFydFsxXSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIHRoaXMuZmxvb3Jfc3RhcnRbMF0pO1xuICAgIGN0eC5saW5lVG8oNjAwLCB0aGlzLmZsb29yX3N0YXJ0WzBdKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICB3YWxscyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMTIsIDApO1xuICAgIGN0eC5saW5lVG8oMTIsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDU4OCwgMCk7XG4gICAgY3R4LmxpbmVUbyg1ODgsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmNsaW1iZXIgPSB0aGlzLmdhbWUuY2xpbWJlcjtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB0aGlzLnNldENvbnRyb2wgPSB0aGlzLnNldENvbnRyb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0Q29udHJvbCA9IHRoaXMucmVzZXRDb250cm9sLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRDb250cm9sKGUpIHtcbiAgICBpZiAoIXRoaXMua2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIHRoaXMua2V5cy5wdXNoKGUua2V5KTtcbiAgICB9XG4gIH1cblxuICByZXNldENvbnRyb2woKSB7XG4gICAgaWYgKHRoaXMua2V5cy5pbmNsdWRlcyhcIkFycm93RG93blwiKSAmJiAhdGhpcy5rZXlzLmluY2x1ZGVzKFwiQXJyb3dVcFwiKSkge1xuICAgICAgdGhpcy5jbGltYmVyLnJlbGVhc2VKdW1wKG51bGwsIHRoaXMua2V5cy50b1N0cmluZygpKTtcbiAgICB9XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH1cblxuICBhdHRhY2hLZXlIYW5kbGVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5zZXRDb250cm9sKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMucmVzZXRDb250cm9sKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuYXR0YWNoS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIodGltZSkge1xuICAgIGNvbnN0IGRlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5jbGltYmVyLnBoeXNpY3MoKTtcbiAgICBpZiAoZGVsdGEgPiAxMDAwIC8gdGhpcy5nYW1lLkZQUykgeyAvLyBDQVAgRlBTXG4gICAgICBpZiAodGhpcy5rZXlzWzBdKSB7XG4gICAgICAgIHRoaXMuY2xpbWJlci5tb3ZlKHRoaXMua2V5cy50b1N0cmluZygpLCBkZWx0YSk7XG4gICAgICB9IFxuICAgICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBjYW52YXMud2lkdGggPSBnYW1lLmRpbV94O1xuICBjYW52YXMuaGVpZ2h0ID0gZ2FtZS5kaW1feTtcbiAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG59KTsiLCJjb25zdCBsZXZlbHMgPSB7XG4gIDE6IFtcbiAgICB7XG4gICAgICBwb3M6IFsxMDAsIDc1MF0sXG4gICAgICBzaXplOiBbMTAwLCAzMF0sXG4gICAgICBjb2xvcjogXCIjZmZhYzhlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvczogWzMwMCwgNjI1XSxcbiAgICAgIHNpemU6IFsxMDAsIDMwXSxcbiAgICAgIGNvbG9yOiBcIiNmZmFjOGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgcG9zOiBbNDcwLCA1MDBdLFxuICAgICAgc2l6ZTogWzEwMCwgMzBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3M6IFszMDAsIDM4MF0sXG4gICAgICBzaXplOiBbMTAwLCAzMF0sXG4gICAgICBjb2xvcjogXCIjZmZhYzhlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvczogWzEwMCwgMjUwXSxcbiAgICAgIHNpemU6IFsxMDAsIDMwXSxcbiAgICAgIGNvbG9yOiBcIiNmZmFjOGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgcG9zOiBbMjUwLCAxMjBdLFxuICAgICAgc2l6ZTogWzEwMCwgMzBdLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgd2lubmVyOiB0cnVlXG4gICAgfVxuICBdLFxuICAyOiBbXG4gICAge1xuICAgICAgcG9zOiBbMTAwLCA3NTBdLFxuICAgICAgc2l6ZTogWzUwLCAzMF0sXG4gICAgICBjb2xvcjogXCIjZmZhYzhlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvczogWzMwMCwgNjI1XSxcbiAgICAgIHNpemU6IFs1MCwgMzBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3M6IFs0NzAsIDUwMF0sXG4gICAgICBzaXplOiBbNTAsIDMwXSxcbiAgICAgIGNvbG9yOiBcIiNmZmFjOGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgcG9zOiBbMzAwLCAzODBdLFxuICAgICAgc2l6ZTogWzUwLCAzMF0sXG4gICAgICBjb2xvcjogXCIjZmZhYzhlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvczogWzEwMCwgMjUwXSxcbiAgICAgIHNpemU6IFs1MCwgMzBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3M6IFsyNTAsIDEyMF0sXG4gICAgICBzaXplOiBbNTAsIDMwXSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIHdpbm5lcjogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgMzogW1xuICAgIHtcbiAgICAgIHBvczogWzEwMCwgNzUwXSxcbiAgICAgIHNpemU6IFsxMDAsIDMwXSxcbiAgICAgIGNvbG9yOiBcIiNmZmFjOGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgcG9zOiBbMzAwLCA2MjVdLFxuICAgICAgc2l6ZTogWzEwMCwgMzBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3M6IFs0NzAsIDUwMF0sXG4gICAgICBzaXplOiBbMTAwLCAzMF0sXG4gICAgICBjb2xvcjogXCIjZmZhYzhlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvczogWzMwMCwgMzgwXSxcbiAgICAgIHNpemU6IFsxMDAsIDMwXSxcbiAgICAgIGNvbG9yOiBcIiNmZmFjOGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgcG9zOiBbMTAwLCAyNTBdLFxuICAgICAgc2l6ZTogWzEwMCwgMzBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3M6IFsyNTAsIDEyMF0sXG4gICAgICBzaXplOiBbMTAwLCAzMF0sXG4gICAgICBjb2xvcjogXCJnb2xkXCIsXG4gICAgICB3aW5uZXI6IHRydWVcbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxldmVscztcbiIsImNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgdGhpcy52ZWwgPSBvcHRpb25zLnZlbCB8fCBbMCwgMF07XG4gICAgdGhpcy5zaXplID0gb3B0aW9ucy5zaXplO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMud2lubmVyID0gb3B0aW9ucy53aW5uZXIgfHwgZmFsc2U7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMuc2l6ZVswXSwgdGhpcy5zaXplWzFdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBDT0xPUlMgPSBbXG4gIFwiI2U2MTk0YlwiLFxuICBcIiMzY2I0NGJcIixcbiAgXCIjZmZlMTE5XCIsXG4gIFwiIzQzNjNkOFwiLFxuICBcIiNmNTgyMzFcIixcbiAgXCIjOTExZWI0XCIsXG4gIFwiIzQ2ZjBmMFwiLFxuICBcIiNmMDMyZTZcIixcbiAgXCIjYmNmNjBjXCIsXG4gIFwiI2ZhYmViZVwiLFxuICBcIiMwMDgwODBcIixcbiAgXCIjZTZiZWZmXCIsXG4gIFwiIzlhNjMyNFwiLFxuICBcIiNmZmZhYzhcIixcbiAgXCIjYWFmZmMzXCIsXG4gIFwiIzgwODAwMFwiLFxuICBcIiNmZmQ4YjFcIixcbiAgXCIjODA4MDgwXCIsXG4gIFwiI2ZmZmZmZlwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gKCkgPT4ge1xuICByZXR1cm4gQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTE9SUy5sZW5ndGgpXTtcbn0iXSwic291cmNlUm9vdCI6IiJ9