"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = exports.reply = exports.start = exports.getName = exports.welcome = exports.getRandomNum = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const getRandomNum = maxNumber => () => Math.floor(Math.random() * maxNumber);

exports.getRandomNum = getRandomNum;

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

  const expression = funcForRandom();
  console.log(`Question: ${expression}`);

  const answer = _readlineSync.default.question('Your answer: ');

  return reply(answer, expression, correctRes) ? cycle(name, funcForRandom, correctRes, counter + 1) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctRes(expression)}'.\nLet's try again, ${name}!`);
};

exports.cycle = cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW0iLCJtYXhOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsInN0YXJ0IiwicGhyYXNlIiwibmFtZSIsInJlcGx5IiwiYW5zd2VyIiwiZXhwcmVzc2lvbiIsImNvcnJlY3RSZXMiLCJjeWNsZSIsImZ1bmNGb3JSYW5kb20iLCJjb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7QUFGQTtBQUlPLE1BQU1BLFlBQVksR0FBSUMsU0FBRCxJQUFlLE1BQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILFNBQTNCLENBQTFDOzs7O0FBQ0EsTUFBTUksT0FBTyxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLENBQXRCOzs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLHNCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUF0Qjs7OztBQUNBLE1BQU1DLEtBQUssR0FBSUMsTUFBRCxJQUFZO0FBQy9CTixFQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQUYsRUFBQUEsT0FBTztBQUNQQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFSyxNQUFPLElBQXRCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLEVBQXBCO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNNLElBQUssS0FBM0I7QUFDQSxTQUFPQSxJQUFQO0FBQ0QsQ0FQTTs7OztBQVFBLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBcUJDLFVBQXJCLEtBQW9DO0FBQ3ZELE1BQUlGLE1BQU0sS0FBS0UsVUFBVSxDQUFDRCxVQUFELENBQXpCLEVBQXVDO0FBQ3JDVixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FOTTs7OztBQU9BLE1BQU1XLEtBQUssR0FBRyxDQUFDTCxJQUFELEVBQU9NLGFBQVAsRUFBc0JGLFVBQXRCLEVBQWtDRyxPQUFPLEdBQUcsQ0FBNUMsS0FBa0Q7QUFDckUsTUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2pCLFdBQU9kLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQk0sSUFBSyxHQUFyQyxDQUFQO0FBQ0Q7O0FBQ0QsUUFBTUcsVUFBVSxHQUFHRyxhQUFhLEVBQWhDO0FBQ0FiLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlTLFVBQVcsRUFBcEM7O0FBQ0EsUUFBTUQsTUFBTSxHQUFHTixzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUNBLFNBQU9JLEtBQUssQ0FBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQXFCQyxVQUFyQixDQUFMLEdBQXdDQyxLQUFLLENBQUNMLElBQUQsRUFBT00sYUFBUCxFQUFzQkYsVUFBdEIsRUFBa0NHLE9BQU8sR0FBRyxDQUE1QyxDQUE3QyxHQUE4RmQsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR1EsTUFBTyw2Q0FBNENFLFVBQVUsQ0FBQ0QsVUFBRCxDQUFhLHdCQUF1QkgsSUFBSyxHQUF0SCxDQUFyRztBQUNELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW0gPSAobWF4TnVtYmVyKSA9PiAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhOdW1iZXIpO1xuZXhwb3J0IGNvbnN0IHdlbGNvbWUgPSAoKSA9PiBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4tR2FtZXMhJyk7XG5leHBvcnQgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gKHBocmFzZSkgPT4ge1xuICBjb25zb2xlLmxvZygpO1xuICB3ZWxjb21lKCk7XG4gIGNvbnNvbGUubG9nKGAke3BocmFzZX1cXG5gKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWUoKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IVxcbmApO1xuICByZXR1cm4gbmFtZTtcbn07XG5leHBvcnQgY29uc3QgcmVwbHkgPSAoYW5zd2VyLCBleHByZXNzaW9uLCBjb3JyZWN0UmVzKSA9PiB7XG4gIGlmIChhbnN3ZXIgPT09IGNvcnJlY3RSZXMoZXhwcmVzc2lvbikpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGN5Y2xlID0gKG5hbWUsIGZ1bmNGb3JSYW5kb20sIGNvcnJlY3RSZXMsIGNvdW50ZXIgPSAwKSA9PiB7XG4gIGlmIChjb3VudGVyID09PSAzKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX0hYCk7XG4gIH1cbiAgY29uc3QgZXhwcmVzc2lvbiA9IGZ1bmNGb3JSYW5kb20oKTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2V4cHJlc3Npb259YCk7XG4gIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICByZXR1cm4gcmVwbHkoYW5zd2VyLCBleHByZXNzaW9uLCBjb3JyZWN0UmVzKSA/IGN5Y2xlKG5hbWUsIGZ1bmNGb3JSYW5kb20sIGNvcnJlY3RSZXMsIGNvdW50ZXIgKyAxKSA6IGNvbnNvbGUubG9nKGAnJHthbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHtjb3JyZWN0UmVzKGV4cHJlc3Npb24pfScuXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9IWApO1xufTtcbiJdfQ==