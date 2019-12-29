"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = exports.reply = exports.start = exports.getName = exports.welcome = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const welcome = () => console.log('Welcome to the Brain-Games!');

exports.welcome = welcome;

const getName = () => _readlineSync.default.question('May I have your name? ');

exports.getName = getName;

const start = phrase => {
  console.log();
  welcome();
  console.log(`${phrase}\n`);
  const name = getName();
  console.log(`Hello, ${name}!\n`);
  return name;
};

exports.start = start;

const reply = (answer, expression, correctRes) => {
  if (answer === correctRes(expression)) {
    console.log('Correct!');
    return true;
  }

  return false;
};

exports.reply = reply;

const cycle = (name, funcForRandom, correctRes, counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const expression = funcForRandom;
  console.log(`Question: ${expression}`);

  const answer = _readlineSync.default.question('Your answer: ');

  return reply(answer, expression, correctRes) ? cycle(counter + 1) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctRes(expression)}'.\nLet's try again, ${name}!`);
};

exports.cycle = cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsInN0YXJ0IiwicGhyYXNlIiwibmFtZSIsInJlcGx5IiwiYW5zd2VyIiwiZXhwcmVzc2lvbiIsImNvcnJlY3RSZXMiLCJjeWNsZSIsImZ1bmNGb3JSYW5kb20iLCJjb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7QUFGQTtBQUlPLE1BQU1BLE9BQU8sR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixDQUF0Qjs7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBdEI7Ozs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLE1BQUQsSUFBWTtBQUMvQk4sRUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FGLEVBQUFBLE9BQU87QUFDUEMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUssTUFBTyxJQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBR0wsT0FBTyxFQUFwQjtBQUNBRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTTSxJQUFLLEtBQTNCO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBUE07Ozs7QUFRQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQXFCQyxVQUFyQixLQUFvQztBQUN2RCxNQUFJRixNQUFNLEtBQUtFLFVBQVUsQ0FBQ0QsVUFBRCxDQUF6QixFQUF1QztBQUNyQ1YsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTk07Ozs7QUFPQSxNQUFNVyxLQUFLLEdBQUcsQ0FBQ0wsSUFBRCxFQUFPTSxhQUFQLEVBQXNCRixVQUF0QixFQUFrQ0csT0FBTyxHQUFHLENBQTVDLEtBQWtEO0FBQ3JFLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPZCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJNLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLFVBQVUsR0FBR0csYUFBbkI7QUFDQWIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWVMsVUFBVyxFQUFwQzs7QUFDQSxRQUFNRCxNQUFNLEdBQUdOLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsU0FBT0ksS0FBSyxDQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBcUJDLFVBQXJCLENBQUwsR0FBd0NDLEtBQUssQ0FBQ0UsT0FBTyxHQUFHLENBQVgsQ0FBN0MsR0FBNkRkLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLElBQUdRLE1BQU8sNkNBQTRDRSxVQUFVLENBQUNELFVBQUQsQ0FBYSx3QkFBdUJILElBQUssR0FBdEgsQ0FBcEU7QUFDRCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3Qgd2VsY29tZSA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbi1HYW1lcyEnKTtcbmV4cG9ydCBjb25zdCBnZXROYW1lID0gKCkgPT4gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG5leHBvcnQgY29uc3Qgc3RhcnQgPSAocGhyYXNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCk7XG4gIHdlbGNvbWUoKTtcbiAgY29uc29sZS5sb2coYCR7cGhyYXNlfVxcbmApO1xuICBjb25zdCBuYW1lID0gZ2V0TmFtZSgpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hXFxuYCk7XG4gIHJldHVybiBuYW1lO1xufTtcbmV4cG9ydCBjb25zdCByZXBseSA9IChhbnN3ZXIsIGV4cHJlc3Npb24sIGNvcnJlY3RSZXMpID0+IHtcbiAgaWYgKGFuc3dlciA9PT0gY29ycmVjdFJlcyhleHByZXNzaW9uKSkge1xuICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgY3ljbGUgPSAobmFtZSwgZnVuY0ZvclJhbmRvbSwgY29ycmVjdFJlcywgY291bnRlciA9IDApID0+IHtcbiAgaWYgKGNvdW50ZXIgPT09IDMpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfSFgKTtcbiAgfVxuICBjb25zdCBleHByZXNzaW9uID0gZnVuY0ZvclJhbmRvbTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2V4cHJlc3Npb259YCk7XG4gIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICByZXR1cm4gcmVwbHkoYW5zd2VyLCBleHByZXNzaW9uLCBjb3JyZWN0UmVzKSA/IGN5Y2xlKGNvdW50ZXIgKyAxKSA6IGNvbnNvbGUubG9nKGAnJHthbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHtjb3JyZWN0UmVzKGV4cHJlc3Npb24pfScuXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9IWApO1xufTtcbiJdfQ==