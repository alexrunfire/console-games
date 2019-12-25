"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = exports.welcome = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const welcome = () => console.log('Welcome to the Brain-Games!');

exports.welcome = welcome;

const getName = () => _readlineSync.default.question('May I have your name? ');

exports.getName = getName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsT0FBTyxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLENBQXRCOzs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLHNCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCB3ZWxjb21lID0gKCkgPT4gY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluLUdhbWVzIScpO1xuZXhwb3J0IGNvbnN0IGdldE5hbWUgPSAoKSA9PiByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiJdfQ==