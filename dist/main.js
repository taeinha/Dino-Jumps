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
      left: false,
      right: false
    };
    this.move = this.move.bind(this);
    this.jumpTime = 0;
  }

  _createClass(Climber, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
      ctx.fill();
    }
  }, {
    key: "move",
    value: function move(dir, delta) {
      switch (dir) {
        case "ArrowLeft":
          this.vel[0] = -1 * this.game.constructor.MOVE_SPEED;
          break;

        case "ArrowRight":
          this.vel[0] = this.game.constructor.MOVE_SPEED;
          break;
        // case "ArrowDown":
        //   this.holdJump(delta);
        //   break;
      } // if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
      //   this.holdJump(delta, -this.game.constructor.JUMP_SPEED[0]);
      // } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
      //   this.holdJump(delta, this.game.constructor.JUMP_SPEED[0]);
      // }


      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft" || dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight" || dir === "ArrowDown") {
        this.holdJump(delta, this.handleJump(dir));
      }
    }
  }, {
    key: "handleJump",
    value: function handleJump(dir) {
      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
        return -this.game.constructor.JUMP_SPEED[0];
      } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
        return this.game.constructor.JUMP_SPEED[0];
      } else if (dir === "ArrowDown") {
        return 0.01;
      }
    }
  }, {
    key: "holdJump",
    value: function holdJump(delta, velX) {
      this.jumpTime += delta / 1000;

      if (this.jumpTime >= 1) {
        // hold down for 1 second
        this.releaseJump(velX);
      }
    }
  }, {
    key: "releaseJump",
    value: function releaseJump(velX, keys) {
      var vel_X = velX || this.handleJump(keys);
      this.jumpTime = 0;

      if (!this.jump.up) {
        this.vel[1] -= this.game.constructor.JUMP_SPEED[1];
        this.vel[0] += vel_X;
        this.jump.up = true;
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }
    }
  }, {
    key: "gravity",
    value: function gravity() {
      this.vel[1] += this.game.constructor.GRAVITY;
    }
  }, {
    key: "arc",
    value: function arc() {
      // this.vel[0] += this.game.constructor.ARC[0];
      this.vel[1] += this.game.constructor.ARC[1];
    }
  }, {
    key: "friction",
    value: function friction() {
      this.vel[0] *= this.game.constructor.FRICTION;
    }
  }, {
    key: "floor",
    value: function floor() {
      if (this.pos[1] > this.game.constructor.START_POS[1]) {
        this.pos[1] = this.game.constructor.START_POS[1];
        this.jump.up = false;
        this.vel[1] = 0;
      } else if (this.pos[1] < this.game.constructor.FLOOR_START[0]) {
        this.pos[1] = this.game.constructor.FLOOR_START[0];
        this.jump.up = false;
        this.vel[1] = 0;
      }
    }
  }, {
    key: "walls",
    value: function walls() {
      if (this.pos[0] < this.game.constructor.WALL_START[0]) {
        this.pos[0] = this.game.constructor.WALL_START[0];
        this.vel[0] = 0;
      } else if (this.pos[0] > this.game.constructor.WALL_START[1]) {
        this.pos[0] = this.game.constructor.WALL_START[1];
        this.vel[0] = 0;
      }
    }
  }, {
    key: "physics",
    value: function physics() {
      this.gravity();
      if (this.jump.up) this.arc();
      this.friction();
      this.floor();
      this.walls();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.climber = new _climber__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos: Game.START_POS,
      size: Game.CLIMBER_SIZE,
      color: _util__WEBPACK_IMPORTED_MODULE_1__["randomColor"](),
      game: this
    });
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = Game.BG_COLOR;
      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
      this.floor(ctx);
      this.walls(ctx);
      this.climber.draw(ctx);
    }
  }, {
    key: "floor",
    value: function floor(ctx) {
      ctx.strokeStyle = "#108914";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(0, Game.FLOOR_START[1]);
      ctx.lineTo(600, Game.FLOOR_START[1]);
      ctx.stroke();
      ctx.strokeStyle = "#487299";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(0, Game.FLOOR_START[0]);
      ctx.lineTo(600, Game.FLOOR_START[0]);
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

Game.DIM_X = 600;
Game.DIM_Y = 900;
Game.START_POS = [300, 826]; // x, y

Game.CLIMBER_SIZE = [25, 50]; // width, height

Game.MOVE_SPEED = 3;
Game.JUMP_SPEED = [50, 70]; // x, y

Game.MAX_JUMP_SPEED = [50, 50];
Game.FLOOR_START = [12, 888];
Game.WALL_START = [12 + 12, 588 - 36];
Game.BG_COLOR = "#000000";
Game.GRAVITY = 1.5;
Game.ARC = [0.5, 10];
Game.FRICTION = 0.8;
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
      if (this.keys.includes("ArrowDown")) {
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

      if (this.keys[0]) {
        this.climber.move(this.keys.toString(), delta);
      }

      this.climber.physics();
      this.game.draw(this.ctx);
      this.lastTime = time;
      requestAnimationFrame(this.render.bind(this));
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
  canvas.width = _game__WEBPACK_IMPORTED_MODULE_1__["default"].DIM_X;
  canvas.height = _game__WEBPACK_IMPORTED_MODULE_1__["default"].DIM_Y;
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var ctx = canvas.getContext("2d");
  var gameView = new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx);
  gameView.start();
});

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
var randomColor = function randomColor() {
  var hexDigits = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 3; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }

  return color;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkNsaW1iZXIiLCJvcHRpb25zIiwicG9zIiwidmVsIiwic2l6ZSIsImNvbG9yIiwiZ2FtZSIsImp1bXAiLCJ1cCIsImxlZnQiLCJyaWdodCIsIm1vdmUiLCJiaW5kIiwianVtcFRpbWUiLCJjdHgiLCJmaWxsU3R5bGUiLCJyZWN0IiwiZmlsbCIsImRpciIsImRlbHRhIiwiY29uc3RydWN0b3IiLCJNT1ZFX1NQRUVEIiwiaG9sZEp1bXAiLCJoYW5kbGVKdW1wIiwiSlVNUF9TUEVFRCIsInZlbFgiLCJyZWxlYXNlSnVtcCIsImtleXMiLCJ2ZWxfWCIsIkdSQVZJVFkiLCJBUkMiLCJGUklDVElPTiIsIlNUQVJUX1BPUyIsIkZMT09SX1NUQVJUIiwiV0FMTF9TVEFSVCIsImdyYXZpdHkiLCJhcmMiLCJmcmljdGlvbiIsImZsb29yIiwid2FsbHMiLCJHYW1lIiwiY2xpbWJlciIsIkNMSU1CRVJfU0laRSIsIlV0aWwiLCJCR19DT0xPUiIsImZpbGxSZWN0IiwiRElNX1giLCJESU1fWSIsImRyYXciLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsIk1BWF9KVU1QX1NQRUVEIiwiR2FtZVZpZXciLCJzZXRDb250cm9sIiwicmVzZXRDb250cm9sIiwiZSIsImluY2x1ZGVzIiwia2V5IiwicHVzaCIsInRvU3RyaW5nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEtleUhhbmRsZXJzIiwibGFzdFRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJ0aW1lIiwicGh5c2ljcyIsImRvY3VtZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsInN0YXJ0IiwicmFuZG9tQ29sb3IiLCJoZXhEaWdpdHMiLCJpIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoRk1BLE87OztBQUNKLG1CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLEdBQUwsR0FBV0QsT0FBTyxDQUFDQyxHQUFuQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0YsT0FBTyxDQUFDRSxHQUFSLElBQWUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUExQjtBQUNBLFNBQUtDLElBQUwsR0FBWUgsT0FBTyxDQUFDRyxJQUFwQjtBQUNB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QUcsSUFBSWtDLDZDQUFKLEVBQWI7QUFDQSxNQUFNMUIsR0FBRyxHQUFHMkQsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSXRCLGtEQUFKLENBQWFsRCxJQUFiLEVBQW1CUSxHQUFuQixDQUFqQjtBQUNBZ0UsVUFBUSxDQUFDQyxLQUFUO0FBQ0QsQ0FURCxFOzs7Ozs7Ozs7OztBQ0xBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQixNQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsTUFBSTVFLEtBQUssR0FBRyxHQUFaOztBQUNBLE9BQUssSUFBSTZFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUI3RSxTQUFLLElBQUk0RSxTQUFTLENBQUNFLElBQUksQ0FBQzdDLEtBQUwsQ0FBWTZDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUE1QixDQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FBTy9FLEtBQVA7QUFDRCxDQVBNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmNsYXNzIENsaW1iZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsIHx8IFswLCAwXTtcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xuICAgIHRoaXMuanVtcCA9IHtcbiAgICAgIHVwOiBmYWxzZSxcbiAgICAgIGxlZnQ6IGZhbHNlLFxuICAgICAgcmlnaHQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmp1bXBUaW1lID0gMDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnNpemVbMF0sIHRoaXMuc2l6ZVsxXSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIG1vdmUoZGlyLCBkZWx0YSkge1xuICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIHRoaXMudmVsWzBdID0gLTEgKiB0aGlzLmdhbWUuY29uc3RydWN0b3IuTU9WRV9TUEVFRDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICB0aGlzLnZlbFswXSA9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5NT1ZFX1NQRUVEO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgIC8vICAgdGhpcy5ob2xkSnVtcChkZWx0YSk7XG4gICAgICAvLyAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBpZiAoZGlyID09PSBcIkFycm93TGVmdCxBcnJvd0Rvd25cIiB8fCBkaXIgPT09IFwiQXJyb3dEb3duLEFycm93TGVmdFwiKSB7XG4gICAgLy8gICB0aGlzLmhvbGRKdW1wKGRlbHRhLCAtdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkpVTVBfU1BFRURbMF0pO1xuICAgIC8vIH0gZWxzZSBpZiAoZGlyID09PSBcIkFycm93UmlnaHQsQXJyb3dEb3duXCIgfHwgZGlyID09PSBcIkFycm93RG93bixBcnJvd1JpZ2h0XCIpIHtcbiAgICAvLyAgIHRoaXMuaG9sZEp1bXAoZGVsdGEsIHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5KVU1QX1NQRUVEWzBdKTtcbiAgICAvLyB9XG5cbiAgICBpZiAoXG4gICAgICBkaXIgPT09IFwiQXJyb3dMZWZ0LEFycm93RG93blwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dEb3duLEFycm93TGVmdFwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dSaWdodCxBcnJvd0Rvd25cIiB8fFxuICAgICAgZGlyID09PSBcIkFycm93RG93bixBcnJvd1JpZ2h0XCIgfHxcbiAgICAgIGRpciA9PT0gXCJBcnJvd0Rvd25cIlxuICAgICkge1xuICAgICAgdGhpcy5ob2xkSnVtcChkZWx0YSwgdGhpcy5oYW5kbGVKdW1wKGRpcikpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUp1bXAoZGlyKSB7XG4gICAgaWYgKGRpciA9PT0gXCJBcnJvd0xlZnQsQXJyb3dEb3duXCIgfHwgZGlyID09PSBcIkFycm93RG93bixBcnJvd0xlZnRcIikge1xuICAgICAgcmV0dXJuIC10aGlzLmdhbWUuY29uc3RydWN0b3IuSlVNUF9TUEVFRFswXTtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJBcnJvd1JpZ2h0LEFycm93RG93blwiIHx8IGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dSaWdodFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkpVTVBfU1BFRURbMF07XG4gICAgfSBlbHNlIGlmIChkaXIgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIHJldHVybiAwLjAxO1xuICAgIH1cbiAgfVxuXG4gIGhvbGRKdW1wKGRlbHRhLCB2ZWxYKSB7XG4gICAgdGhpcy5qdW1wVGltZSArPSBkZWx0YS8xMDAwO1xuICAgIGlmICh0aGlzLmp1bXBUaW1lID49IDEpIHsgLy8gaG9sZCBkb3duIGZvciAxIHNlY29uZFxuICAgICAgdGhpcy5yZWxlYXNlSnVtcCh2ZWxYKTtcbiAgICB9XG4gIH1cblxuICByZWxlYXNlSnVtcCh2ZWxYLCBrZXlzKSB7XG4gICAgY29uc3QgdmVsX1ggPSB2ZWxYIHx8IHRoaXMuaGFuZGxlSnVtcChrZXlzKTtcblxuICAgIHRoaXMuanVtcFRpbWUgPSAwO1xuICAgIGlmICghdGhpcy5qdW1wLnVwKSB7XG4gICAgICB0aGlzLnZlbFsxXSAtPSB0aGlzLmdhbWUuY29uc3RydWN0b3IuSlVNUF9TUEVFRFsxXTtcbiAgICAgIHRoaXMudmVsWzBdICs9IHZlbF9YO1xuICAgICAgdGhpcy5qdW1wLnVwID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIH1cbiAgfVxuXG5cblxuICBncmF2aXR5KCkge1xuICAgIHRoaXMudmVsWzFdICs9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5HUkFWSVRZO1xuICB9XG5cbiAgYXJjKCkge1xuICAgIC8vIHRoaXMudmVsWzBdICs9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5BUkNbMF07XG4gICAgdGhpcy52ZWxbMV0gKz0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkFSQ1sxXTtcbiAgfVxuXG4gIGZyaWN0aW9uKCkge1xuICAgIHRoaXMudmVsWzBdICo9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5GUklDVElPTjtcbiAgfVxuXG4gIGZsb29yKCkge1xuICAgIGlmICh0aGlzLnBvc1sxXSA+IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5TVEFSVF9QT1NbMV0pIHtcbiAgICAgIHRoaXMucG9zWzFdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLlNUQVJUX1BPU1sxXTtcbiAgICAgIHRoaXMuanVtcC51cCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NbMV0gPCB0aGlzLmdhbWUuY29uc3RydWN0b3IuRkxPT1JfU1RBUlRbMF0pIHtcbiAgICAgIHRoaXMucG9zWzFdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkZMT09SX1NUQVJUWzBdO1xuICAgICAgdGhpcy5qdW1wLnVwID0gZmFsc2U7XG4gICAgICB0aGlzLnZlbFsxXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgd2FsbHMoKSB7XG4gICAgaWYgKHRoaXMucG9zWzBdIDwgdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMF0pIHtcbiAgICAgIHRoaXMucG9zWzBdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMF07XG4gICAgICB0aGlzLnZlbFswXSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1swXSA+IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5XQUxMX1NUQVJUWzFdKSB7XG4gICAgICB0aGlzLnBvc1swXSA9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5XQUxMX1NUQVJUWzFdO1xuICAgICAgdGhpcy52ZWxbMF0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHBoeXNpY3MoKSB7XG4gICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgaWYgKHRoaXMuanVtcC51cCkgdGhpcy5hcmMoKTtcbiAgICB0aGlzLmZyaWN0aW9uKCk7XG4gICAgdGhpcy5mbG9vcigpO1xuICAgIHRoaXMud2FsbHMoKTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdLCB0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdXTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpbWJlcjsiLCJpbXBvcnQgQ2xpbWJlciBmcm9tICcuL2NsaW1iZXInO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jbGltYmVyID0gbmV3IENsaW1iZXIoe1xuICAgICAgcG9zOiBHYW1lLlNUQVJUX1BPUyxcbiAgICAgIHNpemU6IEdhbWUuQ0xJTUJFUl9TSVpFLFxuICAgICAgY29sb3I6IFV0aWwucmFuZG9tQ29sb3IoKSxcbiAgICAgIGdhbWU6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gICAgdGhpcy5mbG9vcihjdHgpO1xuICAgIHRoaXMud2FsbHMoY3R4KTtcbiAgICB0aGlzLmNsaW1iZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZmxvb3IoY3R4KSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMTA4OTE0XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIEdhbWUuRkxPT1JfU1RBUlRbMV0pO1xuICAgIGN0eC5saW5lVG8oNjAwLCBHYW1lLkZMT09SX1NUQVJUWzFdKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgR2FtZS5GTE9PUl9TVEFSVFswXSk7XG4gICAgY3R4LmxpbmVUbyg2MDAsIEdhbWUuRkxPT1JfU1RBUlRbMF0pO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHdhbGxzKGN0eCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzQ4NzI5OVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygxMiwgMCk7XG4gICAgY3R4LmxpbmVUbygxMiwgOTAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oNTg4LCAwKTtcbiAgICBjdHgubGluZVRvKDU4OCwgOTAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxufVxuXG5HYW1lLkRJTV9YID0gNjAwO1xuR2FtZS5ESU1fWSA9IDkwMDtcbkdhbWUuU1RBUlRfUE9TID0gWzMwMCwgODI2XTsgLy8geCwgeVxuR2FtZS5DTElNQkVSX1NJWkUgPSBbMjUsIDUwXTsgLy8gd2lkdGgsIGhlaWdodFxuR2FtZS5NT1ZFX1NQRUVEID0gMzsgXG5HYW1lLkpVTVBfU1BFRUQgPSBbNTAsIDcwXTsgLy8geCwgeVxuR2FtZS5NQVhfSlVNUF9TUEVFRCA9IFs1MCwgNTBdO1xuR2FtZS5GTE9PUl9TVEFSVCA9IFsxMiwgODg4XTtcbkdhbWUuV0FMTF9TVEFSVCA9IFsxMiArIDEyLCA1ODggLSAzNl07XG5HYW1lLkJHX0NPTE9SID0gXCIjMDAwMDAwXCI7XG5HYW1lLkdSQVZJVFkgPSAxLjU7XG5HYW1lLkFSQyA9IFswLjUsIDEwXTtcbkdhbWUuRlJJQ1RJT04gPSAwLjg7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuY2xpbWJlciA9IHRoaXMuZ2FtZS5jbGltYmVyO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICAgIHRoaXMuc2V0Q29udHJvbCA9IHRoaXMuc2V0Q29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRDb250cm9sID0gdGhpcy5yZXNldENvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldENvbnRyb2woZSkge1xuICAgIGlmICghdGhpcy5rZXlzLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgdGhpcy5rZXlzLnB1c2goZS5rZXkpO1xuICAgIH1cblxuICB9XG5cbiAgcmVzZXRDb250cm9sKCkge1xuICAgIGlmICh0aGlzLmtleXMuaW5jbHVkZXMoXCJBcnJvd0Rvd25cIikpIHtcbiAgICAgIHRoaXMuY2xpbWJlci5yZWxlYXNlSnVtcChudWxsLCB0aGlzLmtleXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNoS2V5SGFuZGxlcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuc2V0Q29udHJvbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLnJlc2V0Q29udHJvbCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmF0dGFjaEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICBjb25zdCBkZWx0YSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuXG4gICAgaWYgKHRoaXMua2V5c1swXSkge1xuICAgICAgdGhpcy5jbGltYmVyLm1vdmUodGhpcy5rZXlzLnRvU3RyaW5nKCksIGRlbHRhKTtcbiAgICB9IFxuICAgIHRoaXMuY2xpbWJlci5waHlzaWNzKCk7XG4gICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldztcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXMud2lkdGggPSBHYW1lLkRJTV9YO1xuICBjYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gKCkgPT4ge1xuICBjb25zdCBoZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlBQkNERUZcIjtcbiAgbGV0IGNvbG9yID0gXCIjXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29sb3IgKz0gaGV4RGlnaXRzW01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxNikpXTtcbiAgfVxuICByZXR1cm4gY29sb3I7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==