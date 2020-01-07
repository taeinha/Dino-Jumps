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
    this.jump = false;
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
          this.vel[0] = -1 * this.game.constructor.MOVE_SPEED[0];
          break;

        case "ArrowRight":
          this.vel[0] = this.game.constructor.MOVE_SPEED[0];
          break;

        case "ArrowDown":
          this.holdJump(delta);
          break;
      }

      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
        this.holdJump(delta, -2 * this.game.constructor.MOVE_SPEED[0]);
      } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
        this.holdJump(delta, 2 * this.game.constructor.MOVE_SPEED[0]);
      }
    }
  }, {
    key: "holdJump",
    value: function holdJump(delta, velX) {
      this.jumpTime += delta / 1000;

      if (this.jumpTime >= 1) {
        this.releaseJump(velX);
      }
    }
  }, {
    key: "releaseJump",
    value: function releaseJump(velX) {
      this.jumpTime = 0;

      if (!this.jump) {
        this.vel[1] -= this.game.constructor.MOVE_SPEED[1];
        this.vel[0] += this.game.constructor.MOVE_SPEED[0];
        this.jump = true;
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }
    }
  }, {
    key: "gravity",
    value: function gravity() {
      this.vel[1] += this.game.constructor.GRAVITY;
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
        this.jump = false;
        this.vel[1] = 0;
      } else if (this.pos[1] < this.game.constructor.FLOOR_START[0]) {
        this.pos[1] = this.game.constructor.FLOOR_START[0];
        this.jump = false;
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

Game.MOVE_SPEED = [1.5, 30]; // x, y

Game.FLOOR_START = [12, 888];
Game.WALL_START = [12 + 12, 588 - 36];
Game.BG_COLOR = "#000000";
Game.GRAVITY = 1.5;
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
        this.climber.releaseJump();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkNsaW1iZXIiLCJvcHRpb25zIiwicG9zIiwidmVsIiwic2l6ZSIsImNvbG9yIiwiZ2FtZSIsImp1bXAiLCJtb3ZlIiwiYmluZCIsImp1bXBUaW1lIiwiY3R4IiwiZmlsbFN0eWxlIiwicmVjdCIsImZpbGwiLCJkaXIiLCJkZWx0YSIsImNvbnN0cnVjdG9yIiwiTU9WRV9TUEVFRCIsImhvbGRKdW1wIiwidmVsWCIsInJlbGVhc2VKdW1wIiwiR1JBVklUWSIsIkZSSUNUSU9OIiwiU1RBUlRfUE9TIiwiRkxPT1JfU1RBUlQiLCJXQUxMX1NUQVJUIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwiZmxvb3IiLCJ3YWxscyIsIkdhbWUiLCJjbGltYmVyIiwiQ0xJTUJFUl9TSVpFIiwiVXRpbCIsIkJHX0NPTE9SIiwiZmlsbFJlY3QiLCJESU1fWCIsIkRJTV9ZIiwiZHJhdyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiR2FtZVZpZXciLCJrZXlzIiwic2V0Q29udHJvbCIsInJlc2V0Q29udHJvbCIsImUiLCJpbmNsdWRlcyIsImtleSIsInB1c2giLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoS2V5SGFuZGxlcnMiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInRpbWUiLCJ0b1N0cmluZyIsInBoeXNpY3MiLCJkb2N1bWVudCIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJzdGFydCIsInJhbmRvbUNvbG9yIiwiaGV4RGlnaXRzIiwiaSIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEZNQSxPOzs7QUFDSixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxHQUFMLEdBQVdELE9BQU8sQ0FBQ0MsR0FBbkI7QUFDQSxTQUFLQyxHQUFMLEdBQVdGLE9BQU8sQ0FBQ0UsR0FBUixJQUFlLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBMUI7QUFDQSxTQUFLQyxJQUFMLEdBQVlILE9BQU8sQ0FBQ0csSUFBcEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFKLE9BQU8sQ0FBQ0ksS0FBckI7QUFDQSxTQUFLQyxJQUFMLEdBQVlMLE9BQU8sQ0FBQ0ssSUFBcEI7QUFDQSxTQUFL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b0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBZjtBQUNBRCxRQUFNLENBQUNFLEtBQVAsR0FBZW5DLDZDQUFJLENBQUNNLEtBQXBCO0FBQ0EyQixRQUFNLENBQUNHLE1BQVAsR0FBZ0JwQyw2Q0FBSSxDQUFDTyxLQUFyQjtBQUVBLE1BQU1oQyxJQUFJLEdBQUcsSUFBSXlCLDZDQUFKLEVBQWI7QUFDQSxNQUFNcEIsR0FBRyxHQUFHcUQsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSXZCLGtEQUFKLENBQWF4QyxJQUFiLEVBQW1CSyxHQUFuQixDQUFqQjtBQUNBMEQsVUFBUSxDQUFDQyxLQUFUO0FBQ0QsQ0FURCxFOzs7Ozs7Ozs7OztBQ0xBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQixNQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsTUFBSW5FLEtBQUssR0FBRyxHQUFaOztBQUNBLE9BQUssSUFBSW9FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJwRSxTQUFLLElBQUltRSxTQUFTLENBQUNFLElBQUksQ0FBQzdDLEtBQUwsQ0FBWTZDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUE1QixDQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FBT3RFLEtBQVA7QUFDRCxDQVBNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmNsYXNzIENsaW1iZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsIHx8IFswLCAwXTtcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xuICAgIHRoaXMuanVtcCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuanVtcFRpbWUgPSAwO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHgucmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMuc2l6ZVswXSwgdGhpcy5zaXplWzFdKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZShkaXIsIGRlbHRhKSB7XG4gICAgc3dpdGNoIChkaXIpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgdGhpcy52ZWxbMF0gPSAtMSAqIHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5NT1ZFX1NQRUVEWzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIHRoaXMudmVsWzBdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLk1PVkVfU1BFRURbMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICB0aGlzLmhvbGRKdW1wKGRlbHRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkaXIgPT09IFwiQXJyb3dMZWZ0LEFycm93RG93blwiIHx8IGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dMZWZ0XCIpIHtcbiAgICAgIHRoaXMuaG9sZEp1bXAoZGVsdGEsIC0yICogdGhpcy5nYW1lLmNvbnN0cnVjdG9yLk1PVkVfU1BFRURbMF0pO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSBcIkFycm93UmlnaHQsQXJyb3dEb3duXCIgfHwgZGlyID09PSBcIkFycm93RG93bixBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHRoaXMuaG9sZEp1bXAoZGVsdGEsIDIgKiB0aGlzLmdhbWUuY29uc3RydWN0b3IuTU9WRV9TUEVFRFswXSk7XG4gICAgfVxuICB9XG5cbiAgaG9sZEp1bXAoZGVsdGEsIHZlbFgpIHtcbiAgICB0aGlzLmp1bXBUaW1lICs9IGRlbHRhLzEwMDA7XG4gICAgaWYgKHRoaXMuanVtcFRpbWUgPj0gMSkge1xuICAgICAgdGhpcy5yZWxlYXNlSnVtcCh2ZWxYKTtcbiAgICB9XG4gIH1cblxuICByZWxlYXNlSnVtcCh2ZWxYKSB7XG4gICAgdGhpcy5qdW1wVGltZSA9IDA7XG4gICAgaWYgKCF0aGlzLmp1bXApIHtcbiAgICAgIHRoaXMudmVsWzFdIC09IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5NT1ZFX1NQRUVEWzFdO1xuICAgICAgdGhpcy52ZWxbMF0gKz0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLk1PVkVfU1BFRURbMF07XG4gICAgICB0aGlzLmp1bXAgPSB0cnVlO1xuICAgICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gICAgfVxuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICB0aGlzLnZlbFsxXSArPSB0aGlzLmdhbWUuY29uc3RydWN0b3IuR1JBVklUWTtcbiAgfVxuXG4gIGZyaWN0aW9uKCkge1xuICAgIHRoaXMudmVsWzBdICo9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5GUklDVElPTjtcbiAgfVxuXG4gIGZsb29yKCkge1xuICAgIGlmICh0aGlzLnBvc1sxXSA+IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5TVEFSVF9QT1NbMV0pIHtcbiAgICAgIHRoaXMucG9zWzFdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLlNUQVJUX1BPU1sxXTtcbiAgICAgIHRoaXMuanVtcCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NbMV0gPCB0aGlzLmdhbWUuY29uc3RydWN0b3IuRkxPT1JfU1RBUlRbMF0pIHtcbiAgICAgIHRoaXMucG9zWzFdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkZMT09SX1NUQVJUWzBdO1xuICAgICAgdGhpcy5qdW1wID0gZmFsc2U7XG4gICAgICB0aGlzLnZlbFsxXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgd2FsbHMoKSB7XG4gICAgaWYgKHRoaXMucG9zWzBdIDwgdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMF0pIHtcbiAgICAgIHRoaXMucG9zWzBdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMF07XG4gICAgICB0aGlzLnZlbFswXSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc1swXSA+IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5XQUxMX1NUQVJUWzFdKSB7XG4gICAgICB0aGlzLnBvc1swXSA9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5XQUxMX1NUQVJUWzFdO1xuICAgICAgdGhpcy52ZWxbMF0gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHBoeXNpY3MoKSB7XG4gICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgdGhpcy5mcmljdGlvbigpO1xuICAgIHRoaXMuZmxvb3IoKTtcbiAgICB0aGlzLndhbGxzKCk7XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaW1iZXI7IiwiaW1wb3J0IENsaW1iZXIgZnJvbSAnLi9jbGltYmVyJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2xpbWJlciA9IG5ldyBDbGltYmVyKHtcbiAgICAgIHBvczogR2FtZS5TVEFSVF9QT1MsXG4gICAgICBzaXplOiBHYW1lLkNMSU1CRVJfU0laRSxcbiAgICAgIGNvbG9yOiBVdGlsLnJhbmRvbUNvbG9yKCksXG4gICAgICBnYW1lOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBHYW1lLkJHX0NPTE9SO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgIHRoaXMuZmxvb3IoY3R4KTtcbiAgICB0aGlzLndhbGxzKGN0eCk7XG4gICAgdGhpcy5jbGltYmVyLmRyYXcoY3R4KTtcbiAgfVxuXG4gIGZsb29yKGN0eCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzEwODkxNFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCBHYW1lLkZMT09SX1NUQVJUWzFdKTtcbiAgICBjdHgubGluZVRvKDYwMCwgR2FtZS5GTE9PUl9TVEFSVFsxXSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIEdhbWUuRkxPT1JfU1RBUlRbMF0pO1xuICAgIGN0eC5saW5lVG8oNjAwLCBHYW1lLkZMT09SX1NUQVJUWzBdKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICB3YWxscyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMTIsIDApO1xuICAgIGN0eC5saW5lVG8oMTIsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDU4OCwgMCk7XG4gICAgY3R4LmxpbmVUbyg1ODgsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbn1cblxuR2FtZS5ESU1fWCA9IDYwMDtcbkdhbWUuRElNX1kgPSA5MDA7XG5HYW1lLlNUQVJUX1BPUyA9IFszMDAsIDgyNl07IC8vIHgsIHlcbkdhbWUuQ0xJTUJFUl9TSVpFID0gWzI1LCA1MF07IC8vIHdpZHRoLCBoZWlnaHRcbkdhbWUuTU9WRV9TUEVFRCA9IFsxLjUsIDMwXTsgLy8geCwgeVxuR2FtZS5GTE9PUl9TVEFSVCA9IFsxMiwgODg4XTtcbkdhbWUuV0FMTF9TVEFSVCA9IFsxMiArIDEyLCA1ODggLSAzNl07XG5HYW1lLkJHX0NPTE9SID0gXCIjMDAwMDAwXCI7XG5HYW1lLkdSQVZJVFkgPSAxLjU7XG5HYW1lLkZSSUNUSU9OID0gMC44O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmNsaW1iZXIgPSB0aGlzLmdhbWUuY2xpbWJlcjtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB0aGlzLnNldENvbnRyb2wgPSB0aGlzLnNldENvbnRyb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0Q29udHJvbCA9IHRoaXMucmVzZXRDb250cm9sLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRDb250cm9sKGUpIHtcbiAgICBpZiAoIXRoaXMua2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIHRoaXMua2V5cy5wdXNoKGUua2V5KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlc2V0Q29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5rZXlzLmluY2x1ZGVzKFwiQXJyb3dEb3duXCIpKSB7XG4gICAgICB0aGlzLmNsaW1iZXIucmVsZWFzZUp1bXAoKTtcbiAgICB9XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH1cblxuICBhdHRhY2hLZXlIYW5kbGVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5zZXRDb250cm9sKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMucmVzZXRDb250cm9sKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuYXR0YWNoS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIodGltZSkge1xuICAgIGNvbnN0IGRlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICBpZiAodGhpcy5rZXlzWzBdKSB7XG4gICAgICB0aGlzLmNsaW1iZXIubW92ZSh0aGlzLmtleXMudG9TdHJpbmcoKSwgZGVsdGEpO1xuICAgIH0gXG4gICAgdGhpcy5jbGltYmVyLnBoeXNpY3MoKTtcbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhcy53aWR0aCA9IEdhbWUuRElNX1g7XG4gIGNhbnZhcy5oZWlnaHQgPSBHYW1lLkRJTV9ZO1xuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgcmFuZG9tQ29sb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGhleERpZ2l0cyA9IFwiMDEyMzQ1Njc4OUFCQ0RFRlwiO1xuICBsZXQgY29sb3IgPSBcIiNcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb2xvciArPSBoZXhEaWdpdHNbTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDE2KSldO1xuICB9XG4gIHJldHVybiBjb2xvcjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9