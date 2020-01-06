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
    value: function move(dir) {
      switch (dir) {
        case "ArrowLeft":
          this.vel[0] = -1 * this.game.constructor.MOVE_SPEED[0];
          break;

        case "ArrowRight":
          this.vel[0] = this.game.constructor.MOVE_SPEED[0];
          break;

        case "ArrowDown":
          this.charJump();
          break;
      }

      if (dir === "ArrowLeft,ArrowDown" || dir === "ArrowDown,ArrowLeft") {
        this.vel[0] = -2 * this.game.constructor.MOVE_SPEED[0];
        this.charJump();
      } else if (dir === "ArrowRight,ArrowDown" || dir === "ArrowDown,ArrowRight") {
        this.vel[0] = 2 * this.game.constructor.MOVE_SPEED[0];
        this.charJump();
      }
    }
  }, {
    key: "charJump",
    value: function charJump() {
      if (!this.jump) {
        this.vel[1] -= this.game.constructor.MOVE_SPEED[1];
        this.jump = true;
      }
    }
  }, {
    key: "gravity",
    value: function gravity() {
      this.vel[1] += this.game.constructor.GRAVITY;
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
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
      ctx.moveTo(0, Game.FLOOR_START);
      ctx.lineTo(600, Game.FLOOR_START);
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

Game.FLOOR_START = 888;
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
    this.resetControl(); // this.keys = [];

    this.setControl = this.setControl.bind(this);
    this.resetControl = this.resetControl.bind(this);
  }

  _createClass(GameView, [{
    key: "setControl",
    value: function setControl(e) {
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
  }, {
    key: "resetControl",
    value: function resetControl() {
      // this.controls = {
      //   left: false,
      //   right: false,
      //   jump: false
      // };
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
      requestAnimationFrame(this.render.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.keys[0]) {
        this.climber.move(this.keys.toString());
      }

      this.climber.physics();
      this.game.draw(this.ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkNsaW1iZXIiLCJvcHRpb25zIiwicG9zIiwidmVsIiwic2l6ZSIsImNvbG9yIiwiZ2FtZSIsImp1bXAiLCJtb3ZlIiwiYmluZCIsImN0eCIsImZpbGxTdHlsZSIsInJlY3QiLCJmaWxsIiwiZGlyIiwiY29uc3RydWN0b3IiLCJNT1ZFX1NQRUVEIiwiY2hhckp1bXAiLCJHUkFWSVRZIiwiRlJJQ1RJT04iLCJTVEFSVF9QT1MiLCJXQUxMX1NUQVJUIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwiZmxvb3IiLCJ3YWxscyIsIkdhbWUiLCJjbGltYmVyIiwiQ0xJTUJFUl9TSVpFIiwiVXRpbCIsIkJHX0NPTE9SIiwiZmlsbFJlY3QiLCJESU1fWCIsIkRJTV9ZIiwiZHJhdyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiRkxPT1JfU1RBUlQiLCJsaW5lVG8iLCJzdHJva2UiLCJHYW1lVmlldyIsInJlc2V0Q29udHJvbCIsInNldENvbnRyb2wiLCJlIiwia2V5cyIsImluY2x1ZGVzIiwia2V5IiwicHVzaCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hLZXlIYW5kbGVycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInRvU3RyaW5nIiwicGh5c2ljcyIsImRvY3VtZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImdldENvbnRleHQiLCJnYW1lVmll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QjtBQUNBcUQsVUFBUSxDQUFDQyxLQUFUO0FBQ0QsQ0FURCxFOzs7Ozs7Ozs7OztBQ0xBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQixNQUFNQyxTQUFTLEdBQUcsa0JBQWxCO0FBQ0EsTUFBSTdELEtBQUssR0FBRyxHQUFaOztBQUNBLE9BQUssSUFBSThELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUI5RCxTQUFLLElBQUk2RCxTQUFTLENBQUNFLElBQUksQ0FBQzVDLEtBQUwsQ0FBWTRDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUE1QixDQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FBT2hFLEtBQVA7QUFDRCxDQVBNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmNsYXNzIENsaW1iZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsIHx8IFswLCAwXTtcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xuICAgIHRoaXMuanVtcCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIFxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHgucmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMuc2l6ZVswXSwgdGhpcy5zaXplWzFdKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZShkaXIpIHtcbiAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICB0aGlzLnZlbFswXSA9IC0xICogdGhpcy5nYW1lLmNvbnN0cnVjdG9yLk1PVkVfU1BFRURbMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgdGhpcy52ZWxbMF0gPSB0aGlzLmdhbWUuY29uc3RydWN0b3IuTU9WRV9TUEVFRFswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIHRoaXMuY2hhckp1bXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkaXIgPT09IFwiQXJyb3dMZWZ0LEFycm93RG93blwiIHx8IGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dMZWZ0XCIpIHtcbiAgICAgIHRoaXMudmVsWzBdID0gLTIgKiB0aGlzLmdhbWUuY29uc3RydWN0b3IuTU9WRV9TUEVFRFswXTtcbiAgICAgIHRoaXMuY2hhckp1bXAoKTtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJBcnJvd1JpZ2h0LEFycm93RG93blwiIHx8IGRpciA9PT0gXCJBcnJvd0Rvd24sQXJyb3dSaWdodFwiKSB7XG4gICAgICB0aGlzLnZlbFswXSA9IDIgKiB0aGlzLmdhbWUuY29uc3RydWN0b3IuTU9WRV9TUEVFRFswXTtcbiAgICAgIHRoaXMuY2hhckp1bXAoKTtcbiAgICB9XG4gIH1cblxuICBjaGFySnVtcCgpIHtcbiAgICBpZiAoIXRoaXMuanVtcCkge1xuICAgICAgdGhpcy52ZWxbMV0gLT0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLk1PVkVfU1BFRURbMV07XG4gICAgICB0aGlzLmp1bXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgdGhpcy52ZWxbMV0gKz0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLkdSQVZJVFk7XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gIH1cblxuICBmcmljdGlvbigpIHtcbiAgICB0aGlzLnZlbFswXSAqPSB0aGlzLmdhbWUuY29uc3RydWN0b3IuRlJJQ1RJT047XG4gIH1cblxuICBmbG9vcigpIHtcbiAgICBpZiAodGhpcy5wb3NbMV0gPiB0aGlzLmdhbWUuY29uc3RydWN0b3IuU1RBUlRfUE9TWzFdKSB7XG4gICAgICB0aGlzLnBvc1sxXSA9IHRoaXMuZ2FtZS5jb25zdHJ1Y3Rvci5TVEFSVF9QT1NbMV07XG4gICAgICB0aGlzLmp1bXAgPSBmYWxzZTtcbiAgICAgIHRoaXMudmVsWzFdID0gMDtcbiAgICB9XG4gIH1cblxuICB3YWxscygpIHtcbiAgICBpZiAodGhpcy5wb3NbMF0gPCB0aGlzLmdhbWUuY29uc3RydWN0b3IuV0FMTF9TVEFSVFswXSkge1xuICAgICAgdGhpcy5wb3NbMF0gPSB0aGlzLmdhbWUuY29uc3RydWN0b3IuV0FMTF9TVEFSVFswXTtcbiAgICAgIHRoaXMudmVsWzBdID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zWzBdID4gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMV0pIHtcbiAgICAgIHRoaXMucG9zWzBdID0gdGhpcy5nYW1lLmNvbnN0cnVjdG9yLldBTExfU1RBUlRbMV07XG4gICAgICB0aGlzLnZlbFswXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgcGh5c2ljcygpIHtcbiAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB0aGlzLmZyaWN0aW9uKCk7XG4gICAgdGhpcy5mbG9vcigpO1xuICAgIHRoaXMud2FsbHMoKTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpbWJlcjsiLCJpbXBvcnQgQ2xpbWJlciBmcm9tICcuL2NsaW1iZXInO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jbGltYmVyID0gbmV3IENsaW1iZXIoe1xuICAgICAgcG9zOiBHYW1lLlNUQVJUX1BPUyxcbiAgICAgIHNpemU6IEdhbWUuQ0xJTUJFUl9TSVpFLFxuICAgICAgY29sb3I6IFV0aWwucmFuZG9tQ29sb3IoKSxcbiAgICAgIGdhbWU6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gICAgdGhpcy5mbG9vcihjdHgpO1xuICAgIHRoaXMud2FsbHMoY3R4KTtcbiAgICB0aGlzLmNsaW1iZXIuZHJhdyhjdHgpO1xuICB9XG5cbiAgZmxvb3IoY3R4KSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMTA4OTE0XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIEdhbWUuRkxPT1JfU1RBUlQpO1xuICAgIGN0eC5saW5lVG8oNjAwLCBHYW1lLkZMT09SX1NUQVJUKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICB3YWxscyhjdHgpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODcyOTlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMTIsIDApO1xuICAgIGN0eC5saW5lVG8oMTIsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg3Mjk5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDU4OCwgMCk7XG4gICAgY3R4LmxpbmVUbyg1ODgsIDkwMCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbn1cblxuR2FtZS5ESU1fWCA9IDYwMDtcbkdhbWUuRElNX1kgPSA5MDA7XG5HYW1lLlNUQVJUX1BPUyA9IFszMDAsIDgyNl07IC8vIHgsIHlcbkdhbWUuQ0xJTUJFUl9TSVpFID0gWzI1LCA1MF07IC8vIHdpZHRoLCBoZWlnaHRcbkdhbWUuTU9WRV9TUEVFRCA9IFsxLjUsIDMwXTsgLy8geCwgeVxuR2FtZS5GTE9PUl9TVEFSVCA9IDg4ODtcbkdhbWUuV0FMTF9TVEFSVCA9IFsxMiArIDEyLCA1ODggLSAzNl07XG5HYW1lLkJHX0NPTE9SID0gXCIjMDAwMDAwXCI7XG5HYW1lLkdSQVZJVFkgPSAxLjU7XG5HYW1lLkZSSUNUSU9OID0gMC44O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmNsaW1iZXIgPSB0aGlzLmdhbWUuY2xpbWJlcjtcbiAgICB0aGlzLnJlc2V0Q29udHJvbCgpO1xuICAgIC8vIHRoaXMua2V5cyA9IFtdO1xuICAgIHRoaXMuc2V0Q29udHJvbCA9IHRoaXMuc2V0Q29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRDb250cm9sID0gdGhpcy5yZXNldENvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldENvbnRyb2woZSkge1xuICAgIC8vIHN3aXRjaChlLmtleSkge1xuICAgIC8vICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAvLyAgICAgdGhpcy5jb250cm9scy5sZWZ0ID0gdHJ1ZTtcbiAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAvLyAgICAgdGhpcy5jb250cm9scy5yaWdodCA9IHRydWU7XG4gICAgLy8gICAgIGJyZWFrO1xuICAgIC8vICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAvLyAgICAgdGhpcy5jb250cm9scy5qdW1wID0gdHJ1ZTtcbiAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gfVxuICAgIGlmICghdGhpcy5rZXlzLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgdGhpcy5rZXlzLnB1c2goZS5rZXkpO1xuICAgIH1cblxuICB9XG5cbiAgcmVzZXRDb250cm9sKCkge1xuICAgIC8vIHRoaXMuY29udHJvbHMgPSB7XG4gICAgLy8gICBsZWZ0OiBmYWxzZSxcbiAgICAvLyAgIHJpZ2h0OiBmYWxzZSxcbiAgICAvLyAgIGp1bXA6IGZhbHNlXG4gICAgLy8gfTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfVxuXG4gIGF0dGFjaEtleUhhbmRsZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnNldENvbnRyb2wpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5yZXNldENvbnRyb2wpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5hdHRhY2hLZXlIYW5kbGVycygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5rZXlzWzBdKSB7XG4gICAgICB0aGlzLmNsaW1iZXIubW92ZSh0aGlzLmtleXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHRoaXMuY2xpbWJlci5waHlzaWNzKCk7XG4gICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldztcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICBjYW52YXMud2lkdGggPSBHYW1lLkRJTV9YO1xuICBjYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gKCkgPT4ge1xuICBjb25zdCBoZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlBQkNERUZcIjtcbiAgbGV0IGNvbG9yID0gXCIjXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29sb3IgKz0gaGV4RGlnaXRzW01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxNikpXTtcbiAgfVxuICByZXR1cm4gY29sb3I7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==