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
      hold: false
    };
    this.move = this.move.bind(this);
    this.jumpTime = 0;
  }

  _createClass(Climber, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;

      if (this.jump.hold) {
        this.size[1] = 50 / 2;
      } else {
        this.size[1] = this.game.climberSize[1];
      }

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
        return -this.game.jump_speed[0];
      } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
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
      this.vel[1] += this.game.gravity;
    }
  }, {
    key: "arc",
    value: function arc() {
      // this.vel[0] += this.game.arc[0];
      this.vel[1] += this.game.arc[1];
    }
  }, {
    key: "friction",
    value: function friction() {
      this.vel[0] *= this.game.friction;
    }
  }, {
    key: "floor",
    value: function floor() {
      if (this.pos[1] > this.game.start_pos[1]) {
        this.pos[1] = this.game.start_pos[1];
        this.pos[1] += this.jump.hold ? 25 : 0;
        this.jump.up = false;
        this.vel[1] = 0;
      } else if (this.pos[1] < this.game.floor_start[0]) {
        this.pos[1] = this.game.floor_start[0];
        this.jump.up = false;
        this.vel[1] = 0;
      }
    }
  }, {
    key: "walls",
    value: function walls() {
      if (this.pos[0] < this.game.wall_start[0]) {
        this.pos[0] = this.game.wall_start[0];
        this.vel[0] = 0;
      } else if (this.pos[0] > this.game.wall_start[1]) {
        this.pos[0] = this.game.wall_start[1];
        this.vel[0] = 0;
      }
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck(rect) {
      return this.pos[0] < rect.pos[0] + rect.size[0] && //
      this.pos[0] + this.size[0] > rect.pos[0] && this.pos[1] < rect.pos[1] + rect.size[1] && this.pos[1] + this.size[1] > rect.pos[1];
    } // handleCollision(rect) {
    //   if (this.vel[1] < this.game.gravity && this.collisionCheck(rect)) {
    //     // BOTTOM
    //     this.vel[1] = 0;
    //     this.vel[0] = 0;
    //     this.pos[1] = rect.pos[1] + this.size[1] + 0.01;
    //     this.jump.up = false;
    //     // } else if (this.vel[0] < 0 && this.collisionCheck(rect)) { // RIGHT
    //     //   this.vel[0] = 0;
    //     //   this.vel[1] = 0;
    //     //   this.pos[0] = this.pos[0] + 0.01;
    //     // } else if (this.vel[0] < 0 && this.collisionCheck(rect)) { // LEFT
    //     //   this.vel[0] = 0;
    //     //   this.vel[1] = 0;
    //     //   this.pos[0] = this.pos[0] + 0.01;
    //   } else if (this.vel[1] > this.game.gravity && this.collisionCheck(rect)) {
    //     // TOP
    //     this.vel[1] = this.game.gravity;
    //     this.pos[1] = rect.pos[1] - this.size[1] - 0.01;
    //     this.jump.up = false;
    //   }
    // }

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
      if (Math.abs(deltaX) > avgWidth || Math.abs(deltaY) > avgHeight) return false;

      if (Math.abs(deltaX / rect.size[0]) > Math.abs(deltaY / rect.size[1])) {
        if (deltaX < 0) {
          // LEFT
          // debugger
          this.pos[0] = rect.pos[0] - this.size[0];
          this.vel = [0, 3];
        } else {
          // RIGHT
          // debugger
          this.pos[0] = rect.pos[0] + rect.size[0];
          this.vel = [0, 3];
        }
      } else {
        if (deltaY < 0) {
          // TOP
          this.pos[1] = rect.pos[1] - this.size[1];
          this.vel[1] = this.game.gravity;
          this.jump.up = false;
        } else {
          // BOTTOM
          this.pos[1] = rect.pos[1] + rect.size[1];
          this.vel[1] = this.game.gravity;
          ;
        }
      }

      return true;
    }
  }, {
    key: "physics",
    value: function physics() {
      this.gravity();
      if (this.jump.up) this.arc();
      this.friction();
      this.floor();
      this.walls();
      this.handleCollision(this.game.platform);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.dim_x = 600;
    this.dim_y = 900;
    this.start_pos = [300, 826]; // x, y

    this.climberSize = [25, 50]; // width, height

    this.move_speed = 3;
    this.jump_speed = [50, 100]; // x, y

    this.floor_start = [12, 888];
    this.wall_start = [12 + 12, 588 - 36];
    this.bg_color = "#000000";
    this.gravity = 1.5;
    this.arc = [0.5, 10];
    this.friction = 0.8;
    this.climber = new _climber__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos: this.start_pos,
      size: [25, 50],
      color: _util__WEBPACK_IMPORTED_MODULE_1__["randomColor"](),
      game: this
    });
    this.platform = new _platform__WEBPACK_IMPORTED_MODULE_2__["default"]({
      pos: [24, 700],
      size: [100, 100],
      color: "#ffac8e"
    });
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.bg_color;
      ctx.fillRect(0, 0, this.dim_x, this.dim_y);
      this.floor(ctx);
      this.walls(ctx);
      this.climber.draw(ctx);
      this.platform.draw(ctx);
    }
  }, {
    key: "floor",
    value: function floor(ctx) {
      ctx.strokeStyle = "#108914";
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
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
  canvas.width = game.dim_x;
  canvas.height = game.dim_y;
  var ctx = canvas.getContext("2d");
  var gameView = new _game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx);
  gameView.start();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJDbGltYmVyIiwib3B0aW9ucyIsInBvcyIsInZlbCIsInNpemUiLCJjb2xvciIsImdhbWUiLCJqdW1wIiwidXAiLCJob2xkIiwibW92ZSIsImJpbmQiLCJqdW1wVGltZSIsImN0eCIsImZpbGxTdHlsZSIsImNsaW1iZXJTaXplIiwiZmlsbFJlY3QiLCJkcmF3UG93ZXJCYXIiLCJkaXIiLCJkZWx0YSIsIm1vdmVfc3BlZWQiLCJob2xkSnVtcCIsImhhbmRsZUp1bXAiLCJqdW1wX3NwZWVkIiwidmVsWCIsInJlbGVhc2VKdW1wIiwia2V5cyIsInZlbF9YIiwiZ3Jhdml0eSIsImFyYyIsImZyaWN0aW9uIiwic3RhcnRfcG9zIiwiZmxvb3Jfc3RhcnQiLCJ3YWxsX3N0YXJ0IiwicmVjdCIsImNsaW1iZXJDZW50ZXJYIiwiY2xpbWJlckNlbnRlclkiLCJyZWN0Q2VudGVyWCIsInJlY3RDZW50ZXJZIiwiZGVsdGFYIiwiZGVsdGFZIiwiYXZnV2lkdGgiLCJhdmdIZWlnaHQiLCJNYXRoIiwiYWJzIiwiZmxvb3IiLCJ3YWxscyIsImhhbmRsZUNvbGxpc2lvbiIsInBsYXRmb3JtIiwiR2FtZSIsImRpbV94IiwiZGltX3kiLCJiZ19jb2xvciIsImNsaW1iZXIiLCJVdGlsIiwiUGxhdGZvcm0iLCJkcmF3Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJHYW1lVmlldyIsInNldENvbnRyb2wiLCJyZXNldENvbnRyb2wiLCJlIiwiaW5jbHVkZXMiLCJrZXkiLCJwdXNoIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoS2V5SGFuZGxlcnMiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInRpbWUiLCJwaHlzaWNzIiwiZG9jdW1lbnQiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3Iiwic3RhcnQiLCJyYW5kb21Db2xvciIsImhleERpZ2l0cyIsImkiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0MsR0FBTCxHQUFXRCxP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LEVBQXFELEtBQUtBLElBQUwsQ0FBVSxDQUFWLENBQXJEO0FBQ0Q7Ozs7OztBQUdZbUQsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNkQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFPLElBQU1nQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQy9CLE1BQU1DLFNBQVMsR0FBRyxrQkFBbEI7QUFDQSxNQUFJbkYsS0FBSyxHQUFHLEdBQVo7O0FBQ0EsT0FBSyxJQUFJb0YsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQnBGLFNBQUssSUFBSW1GLFNBQVMsQ0FBQzdDLElBQUksQ0FBQ0UsS0FBTCxDQUFZRixJQUFJLENBQUMrQyxNQUFMLEtBQWdCLEVBQTVCLENBQUQsQ0FBbEI7QUFDRDs7QUFDRCxTQUFPckYsS0FBUDtBQUNELENBUE0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuY2xhc3MgQ2xpbWJlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWwgfHwgWzAsIDBdO1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgdGhpcy5qdW1wID0ge1xuICAgICAgdXA6IGZhbHNlLFxuICAgICAgaG9sZDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuanVtcFRpbWUgPSAwO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBpZiAodGhpcy5qdW1wLmhvbGQpIHtcbiAgICAgIHRoaXMuc2l6ZVsxXSA9IDUwIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaXplWzFdID0gdGhpcy5nYW1lLmNsaW1iZXJTaXplWzFdO1xuICAgIH1cbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnNpemVbMF0sIHRoaXMuc2l6ZVsxXSk7XG5cbiAgICB0aGlzLmRyYXdQb3dlckJhcihjdHgpO1xuICB9XG5cbiAgZHJhd1Bvd2VyQmFyKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDUwLCA4ODIsIDEwMCwgMTIpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxSZWN0KDUwLCA4ODIsIDEwMCAqIHRoaXMuanVtcFRpbWUsIDEyKTtcbiAgfVxuXG4gIG1vdmUoZGlyLCBkZWx0YSkge1xuICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIHRoaXMudmVsWzBdID0gLTEgKiB0aGlzLmdhbWUubW92ZV9zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICB0aGlzLnZlbFswXSA9IHRoaXMuZ2FtZS5tb3ZlX3NwZWVkO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkaXIgPT09IFwiQXJyb3dMZWZ0LEFycm93RG93blwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dEb3duLEFycm93TGVmdFwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dSaWdodCxBcnJvd0Rvd25cIiB8fFxuICAgICAgZGlyID09PSBcIkFycm93RG93bixBcnJvd1JpZ2h0XCIgfHxcbiAgICAgIGRpciA9PT0gXCJBcnJvd0Rvd25cIlxuICAgICkge1xuICAgICAgaWYgKCF0aGlzLmp1bXAudXApIHRoaXMuaG9sZEp1bXAoZGVsdGEsIHRoaXMuaGFuZGxlSnVtcChkaXIpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVKdW1wKGRpcikge1xuICAgIGlmIChkaXIgPT09IFwiQXJyb3dMZWZ0LEFycm93RG93blwiIHx8IGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dMZWZ0XCIpIHtcbiAgICAgIHJldHVybiAtdGhpcy5nYW1lLmp1bXBfc3BlZWRbMF07XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRpciA9PT0gXCJBcnJvd1JpZ2h0LEFycm93RG93blwiIHx8XG4gICAgICBkaXIgPT09IFwiQXJyb3dEb3duLEFycm93UmlnaHRcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5qdW1wX3NwZWVkWzBdO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICByZXR1cm4gMC4wMTtcbiAgICB9XG4gIH1cblxuICBob2xkSnVtcChkZWx0YSwgdmVsWCkge1xuICAgIHRoaXMuanVtcC5ob2xkID0gdHJ1ZTtcbiAgICB0aGlzLmp1bXBUaW1lICs9IGRlbHRhIC8gMTAwMDtcbiAgICAvLyBpZiAoIXRoaXMuanVtcC5ob2xkKSB0aGlzLnNpemVbMV0gPSB0aGlzLnNpemVbMV0gLyAyO1xuICAgIGlmICh0aGlzLmp1bXBUaW1lID49IDEpIHtcbiAgICAgIC8vIGhvbGQgZG93biBmb3IgMSBzZWNvbmRcbiAgICAgIHRoaXMucmVsZWFzZUp1bXAodmVsWCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZUp1bXAodmVsWCwga2V5cykge1xuICAgIGNvbnN0IHZlbF9YID0gdmVsWCB8fCB0aGlzLmhhbmRsZUp1bXAoa2V5cyk7XG4gICAgdGhpcy5qdW1wLmhvbGQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuanVtcC51cCkge1xuICAgICAgdGhpcy52ZWxbMV0gLT0gdGhpcy5qdW1wVGltZSAqIHRoaXMuZ2FtZS5qdW1wX3NwZWVkWzFdO1xuICAgICAgaWYgKHRoaXMuanVtcFRpbWUgPiAwLjMpIHRoaXMudmVsWzBdICs9IHRoaXMuanVtcFRpbWUgKiB2ZWxfWDtcbiAgICAgIHRoaXMuanVtcC51cCA9IHRydWU7XG4gICAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdLCB0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdXTtcbiAgICB9XG5cbiAgICB0aGlzLmp1bXBUaW1lID0gMDtcbiAgfVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgdGhpcy52ZWxbMV0gKz0gdGhpcy5nYW1lLmdyYXZpdHk7XG4gIH1cblxuICBhcmMoKSB7XG4gICAgLy8gdGhpcy52ZWxbMF0gKz0gdGhpcy5nYW1lLmFyY1swXTtcbiAgICB0aGlzLnZlbFsxXSArPSB0aGlzLmdhbWUuYXJjWzFdO1xuICB9XG5cbiAgZnJpY3Rpb24oKSB7XG4gICAgdGhpcy52ZWxbMF0gKj0gdGhpcy5nYW1lLmZyaWN0aW9uO1xuICB9XG5cbiAgZmxvb3IoKSB7XG4gICAgaWYgKHRoaXMucG9zWzFdID4gdGhpcy5nYW1lLnN0YXJ0X3Bvc1sxXSkge1xuICAgICAgdGhpcy5wb3NbMV0gPSB0aGlzLmdhbWUuc3RhcnRfcG9zWzFdO1xuICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy5qdW1wLmhvbGQgPyAyNSA6IDA7XG4gICAgICB0aGlzLmp1bXAudXAgPSBmYWxzZTtcbiAgICAgIHRoaXMudmVsWzFdID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zWzFdIDwgdGhpcy5nYW1lLmZsb29yX3N0YXJ0WzBdKSB7XG4gICAgICB0aGlzLnBvc1sxXSA9IHRoaXMuZ2FtZS5mbG9vcl9zdGFydFswXTtcbiAgICAgIHRoaXMuanVtcC51cCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHdhbGxzKCkge1xuICAgIGlmICh0aGlzLnBvc1swXSA8IHRoaXMuZ2FtZS53YWxsX3N0YXJ0WzBdKSB7XG4gICAgICB0aGlzLnBvc1swXSA9IHRoaXMuZ2FtZS53YWxsX3N0YXJ0WzBdO1xuICAgICAgdGhpcy52ZWxbMF0gPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NbMF0gPiB0aGlzLmdhbWUud2FsbF9zdGFydFsxXSkge1xuICAgICAgdGhpcy5wb3NbMF0gPSB0aGlzLmdhbWUud2FsbF9zdGFydFsxXTtcbiAgICAgIHRoaXMudmVsWzBdID0gMDtcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb25DaGVjayhyZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucG9zWzBdIDwgcmVjdC5wb3NbMF0gKyByZWN0LnNpemVbMF0gJiYgLy9cbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zaXplWzBdID4gcmVjdC5wb3NbMF0gJiZcbiAgICAgIHRoaXMucG9zWzFdIDwgcmVjdC5wb3NbMV0gKyByZWN0LnNpemVbMV0gJiZcbiAgICAgIHRoaXMucG9zWzFdICsgdGhpcy5zaXplWzFdID4gcmVjdC5wb3NbMV1cbiAgICApO1xuICB9XG5cbiAgLy8gaGFuZGxlQ29sbGlzaW9uKHJlY3QpIHtcbiAgLy8gICBpZiAodGhpcy52ZWxbMV0gPCB0aGlzLmdhbWUuZ3Jhdml0eSAmJiB0aGlzLmNvbGxpc2lvbkNoZWNrKHJlY3QpKSB7XG4gIC8vICAgICAvLyBCT1RUT01cbiAgLy8gICAgIHRoaXMudmVsWzFdID0gMDtcbiAgLy8gICAgIHRoaXMudmVsWzBdID0gMDtcbiAgLy8gICAgIHRoaXMucG9zWzFdID0gcmVjdC5wb3NbMV0gKyB0aGlzLnNpemVbMV0gKyAwLjAxO1xuICAvLyAgICAgdGhpcy5qdW1wLnVwID0gZmFsc2U7XG4gIC8vICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudmVsWzBdIDwgMCAmJiB0aGlzLmNvbGxpc2lvbkNoZWNrKHJlY3QpKSB7IC8vIFJJR0hUXG4gIC8vICAgICAvLyAgIHRoaXMudmVsWzBdID0gMDtcbiAgLy8gICAgIC8vICAgdGhpcy52ZWxbMV0gPSAwO1xuICAvLyAgICAgLy8gICB0aGlzLnBvc1swXSA9IHRoaXMucG9zWzBdICsgMC4wMTtcbiAgLy8gICAgIC8vIH0gZWxzZSBpZiAodGhpcy52ZWxbMF0gPCAwICYmIHRoaXMuY29sbGlzaW9uQ2hlY2socmVjdCkpIHsgLy8gTEVGVFxuICAvLyAgICAgLy8gICB0aGlzLnZlbFswXSA9IDA7XG4gIC8vICAgICAvLyAgIHRoaXMudmVsWzFdID0gMDtcbiAgLy8gICAgIC8vICAgdGhpcy5wb3NbMF0gPSB0aGlzLnBvc1swXSArIDAuMDE7XG4gIC8vICAgfSBlbHNlIGlmICh0aGlzLnZlbFsxXSA+IHRoaXMuZ2FtZS5ncmF2aXR5ICYmIHRoaXMuY29sbGlzaW9uQ2hlY2socmVjdCkpIHtcbiAgLy8gICAgIC8vIFRPUFxuICAvLyAgICAgdGhpcy52ZWxbMV0gPSB0aGlzLmdhbWUuZ3Jhdml0eTtcbiAgLy8gICAgIHRoaXMucG9zWzFdID0gcmVjdC5wb3NbMV0gLSB0aGlzLnNpemVbMV0gLSAwLjAxO1xuICAvLyAgICAgdGhpcy5qdW1wLnVwID0gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaGFuZGxlQ29sbGlzaW9uKHJlY3QpIHtcbiAgICBjb25zdCBjbGltYmVyQ2VudGVyWCA9IHRoaXMucG9zWzBdICsgKHRoaXMuc2l6ZVswXSAqIDAuNSk7XG4gICAgY29uc3QgY2xpbWJlckNlbnRlclkgPSB0aGlzLnBvc1sxXSArICh0aGlzLnNpemVbMV0gKiAwLjUpO1xuICAgIGNvbnN0IHJlY3RDZW50ZXJYID0gcmVjdC5wb3NbMF0gKyAocmVjdC5zaXplWzBdICogMC41KTtcbiAgICBjb25zdCByZWN0Q2VudGVyWSA9IHJlY3QucG9zWzFdICsgKHJlY3Quc2l6ZVsxXSAqIDAuNSk7XG5cbiAgICBjb25zdCBkZWx0YVggPSBjbGltYmVyQ2VudGVyWCAtIHJlY3RDZW50ZXJYOyBcbiAgICBjb25zdCBkZWx0YVkgPSBjbGltYmVyQ2VudGVyWSAtIHJlY3RDZW50ZXJZO1xuICAgIGNvbnN0IGF2Z1dpZHRoID0gKHJlY3Quc2l6ZVswXSArIHRoaXMuc2l6ZVswXSkgKiAwLjU7IFxuICAgIGNvbnN0IGF2Z0hlaWdodCA9IChyZWN0LnNpemVbMV0gKyB0aGlzLnNpemVbMV0pICogMC41OyBcblxuICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gYXZnV2lkdGggfHwgTWF0aC5hYnMoZGVsdGFZKSA+IGF2Z0hlaWdodCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWCAvIHJlY3Quc2l6ZVswXSkgPiBNYXRoLmFicyhkZWx0YVkgLyByZWN0LnNpemVbMV0pKSB7XG4gICAgICBpZiAoZGVsdGFYIDwgMCkgeyAvLyBMRUZUXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMucG9zWzBdID0gcmVjdC5wb3NbMF0gLSB0aGlzLnNpemVbMF07XG4gICAgICAgIHRoaXMudmVsID0gWzAsIDNdO1xuICAgICAgfSBlbHNlIHsgLy8gUklHSFRcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5wb3NbMF0gPSByZWN0LnBvc1swXSArIHJlY3Quc2l6ZVswXTsgXG4gICAgICAgIHRoaXMudmVsID0gWzAsIDNdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGVsdGFZIDwgMCkgeyAvLyBUT1BcbiAgICAgICAgdGhpcy5wb3NbMV0gPSByZWN0LnBvc1sxXSAtIHRoaXMuc2l6ZVsxXTtcbiAgICAgICAgdGhpcy52ZWxbMV0gPSB0aGlzLmdhbWUuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5qdW1wLnVwID0gZmFsc2U7XG4gICAgICB9IGVsc2UgeyAvLyBCT1RUT01cbiAgICAgICAgdGhpcy5wb3NbMV0gPSByZWN0LnBvc1sxXSArIHJlY3Quc2l6ZVsxXTsgXG4gICAgICAgIHRoaXMudmVsWzFdID0gdGhpcy5nYW1lLmdyYXZpdHk7O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcGh5c2ljcygpIHtcbiAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICBpZiAodGhpcy5qdW1wLnVwKSB0aGlzLmFyYygpO1xuICAgIHRoaXMuZnJpY3Rpb24oKTtcbiAgICB0aGlzLmZsb29yKCk7XG4gICAgdGhpcy53YWxscygpO1xuICAgIHRoaXMuaGFuZGxlQ29sbGlzaW9uKHRoaXMuZ2FtZS5wbGF0Zm9ybSk7XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpbWJlcjsiLCJpbXBvcnQgQ2xpbWJlciBmcm9tICcuL2NsaW1iZXInO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuXG5jbGFzcyBHYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRpbV94ID0gNjAwO1xuICAgIHRoaXMuZGltX3kgPSA5MDA7XG4gICAgdGhpcy5zdGFydF9wb3MgPSBbMzAwLCA4MjZdOyAvLyB4LCB5XG4gICAgdGhpcy5jbGltYmVyU2l6ZSA9IFsyNSwgNTBdOyAvLyB3aWR0aCwgaGVpZ2h0XG4gICAgdGhpcy5tb3ZlX3NwZWVkID0gMztcbiAgICB0aGlzLmp1bXBfc3BlZWQgPSBbNTAsIDEwMF07IC8vIHgsIHlcbiAgICB0aGlzLmZsb29yX3N0YXJ0ID0gWzEyLCA4ODhdO1xuICAgIHRoaXMud2FsbF9zdGFydCA9IFsxMiArIDEyLCA1ODggLSAzNl07XG4gICAgdGhpcy5iZ19jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuZ3Jhdml0eSA9IDEuNTtcbiAgICB0aGlzLmFyYyA9IFswLjUsIDEwXTtcbiAgICB0aGlzLmZyaWN0aW9uID0gMC44O1xuXG4gICAgdGhpcy5jbGltYmVyID0gbmV3IENsaW1iZXIoe1xuICAgICAgcG9zOiB0aGlzLnN0YXJ0X3BvcyxcbiAgICAgIHNpemU6IFsyNSwgNTBdLFxuICAgICAgY29sb3I6IFV0aWwucmFuZG9tQ29sb3IoKSxcbiAgICAgIGdhbWU6IHRoaXNcbiAgICB9KTtcblxuICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oe1xuICAgICAgcG9zOiBbMjQsIDcwMF0sXG4gICAgICBzaXplOiBbMTAwLCAxMDBdLFxuICAgICAgY29sb3I6IFwiI2ZmYWM4ZVwiXG4gICAgfSk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJnX2NvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbV94LCB0aGlzLmRpbV95KTtcblxuICAgIHRoaXMuZmxvb3IoY3R4KTtcbiAgICB0aGlzLndhbGxzKGN0eCk7XG4gICAgdGhpcy5jbGltYmVyLmRyYXcoY3R4KTtcbiAgICB0aGlzLnBsYXRmb3JtLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGZsb29yKGN0eCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzEwODkxNFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCB0aGlzLmZsb29yX3N0YXJ0WzFdKTtcbiAgICBjdHgubGluZVRvKDYwMCwgdGhpcy5mbG9vcl9zdGFydFsxXSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIHRoaXMuZmxvb3Jfc3RhcnRbMF0pO1xuICAgIGN0eC5saW5lVG8oNjAwLCB0aGlzLmZsb29yX3N0YXJ0WzBdKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICB3YWxscyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMTIsIDApO1xuICAgIGN0eC5saW5lVG8oMTIsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDU4OCwgMCk7XG4gICAgY3R4LmxpbmVUbyg1ODgsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmNsaW1iZXIgPSB0aGlzLmdhbWUuY2xpbWJlcjtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB0aGlzLnNldENvbnRyb2wgPSB0aGlzLnNldENvbnRyb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0Q29udHJvbCA9IHRoaXMucmVzZXRDb250cm9sLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRDb250cm9sKGUpIHtcbiAgICBpZiAoIXRoaXMua2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIHRoaXMua2V5cy5wdXNoKGUua2V5KTtcbiAgICB9XG4gIH1cblxuICByZXNldENvbnRyb2woKSB7XG4gICAgaWYgKHRoaXMua2V5cy5pbmNsdWRlcyhcIkFycm93RG93blwiKSAmJiAhdGhpcy5rZXlzLmluY2x1ZGVzKFwiQXJyb3dVcFwiKSkge1xuICAgICAgdGhpcy5jbGltYmVyLnJlbGVhc2VKdW1wKG51bGwsIHRoaXMua2V5cy50b1N0cmluZygpKTtcbiAgICB9XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH1cblxuICBhdHRhY2hLZXlIYW5kbGVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5zZXRDb250cm9sKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMucmVzZXRDb250cm9sKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuYXR0YWNoS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIodGltZSkge1xuICAgIGNvbnN0IGRlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICBpZiAodGhpcy5rZXlzWzBdKSB7XG4gICAgICB0aGlzLmNsaW1iZXIubW92ZSh0aGlzLmtleXMudG9TdHJpbmcoKSwgZGVsdGEpO1xuICAgIH0gXG4gICAgdGhpcy5jbGltYmVyLnBoeXNpY3MoKTtcbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBjYW52YXMud2lkdGggPSBnYW1lLmRpbV94O1xuICBjYW52YXMuaGVpZ2h0ID0gZ2FtZS5kaW1feTtcbiAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG59KTsiLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWwgfHwgWzAsIDBdO1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5zaXplWzBdLCB0aGlzLnNpemVbMV0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9ICgpID0+IHtcbiAgY29uc3QgaGV4RGlnaXRzID0gXCIwMTIzNDU2Nzg5QUJDREVGXCI7XG4gIGxldCBjb2xvciA9IFwiI1wiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbG9yICs9IGhleERpZ2l0c1tNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTYpKV07XG4gIH1cbiAgcmV0dXJuIGNvbG9yO1xufTsiXSwic291cmNlUm9vdCI6IiJ9