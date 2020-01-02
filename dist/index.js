"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = exports.reply = exports.start = exports.getName = exports.welcome = exports.getFirstNum = exports.getSecondNum = exports.getRandomNum = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const getRandomNum = (min, max) => () => Math.floor(Math.random() * (max - min) + min);

exports.getRandomNum = getRandomNum;

const getSecondNum = expression => {
  let secondNum = '';

  for (let i = expression.length - 1; expression[i] !== ' '; i -= 1) {
    secondNum = expression[i] + secondNum;
  }

  return secondNum;
};

exports.getSecondNum = getSecondNum;

const getFirstNum = expression => {
  let firstNum = '';

  for (let i = 0; expression[i] !== ' '; i += 1) {
    firstNum += expression[i];
  }

  return firstNum;
};

exports.getFirstNum = getFirstNum;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRTZWNvbmROdW0iLCJleHByZXNzaW9uIiwic2Vjb25kTnVtIiwiaSIsImxlbmd0aCIsImdldEZpcnN0TnVtIiwiZmlyc3ROdW0iLCJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsInN0YXJ0IiwicGhyYXNlIiwibmFtZSIsInJlcGx5IiwiYW5zd2VyIiwiY29ycmVjdFJlcyIsImN5Y2xlIiwiZnVuY0ZvclJhbmRvbSIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUZBO0FBSU8sTUFBTUEsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjLE1BQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJILEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXpDLENBQXpDOzs7O0FBQ0EsTUFBTUssWUFBWSxHQUFJQyxVQUFELElBQWdCO0FBQzFDLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBR0YsVUFBVSxDQUFDRyxNQUFYLEdBQW9CLENBQWpDLEVBQW9DSCxVQUFVLENBQUNFLENBQUQsQ0FBVixLQUFrQixHQUF0RCxFQUEyREEsQ0FBQyxJQUFJLENBQWhFLEVBQW1FO0FBQ2pFRCxJQUFBQSxTQUFTLEdBQUdELFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLEdBQWdCRCxTQUE1QjtBQUNEOztBQUNELFNBQU9BLFNBQVA7QUFDRCxDQU5NOzs7O0FBT0EsTUFBTUcsV0FBVyxHQUFJSixVQUFELElBQWdCO0FBQ3pDLE1BQUlLLFFBQVEsR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JGLFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLEtBQWtCLEdBQWxDLEVBQXVDQSxDQUFDLElBQUksQ0FBNUMsRUFBK0M7QUFDN0NHLElBQUFBLFFBQVEsSUFBSUwsVUFBVSxDQUFDRSxDQUFELENBQXRCO0FBQ0Q7O0FBQ0QsU0FBT0csUUFBUDtBQUNELENBTk07Ozs7QUFPQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosQ0FBdEI7Ozs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQXRCOzs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxNQUFELElBQVk7QUFDL0JOLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBRixFQUFBQSxPQUFPO0FBQ1BDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLEdBQUVLLE1BQU8sSUFBdEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdMLE9BQU8sRUFBcEI7QUFDQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU00sSUFBSyxLQUEzQjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQVBNOzs7O0FBUUEsTUFBTUMsS0FBSyxHQUFHLENBQUNDLE1BQUQsRUFBU2hCLFVBQVQsRUFBcUJpQixVQUFyQixLQUFvQztBQUN2RCxNQUFJRCxNQUFNLEtBQUtDLFVBQVUsQ0FBQ2pCLFVBQUQsQ0FBekIsRUFBdUM7QUFDckNPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQU5NOzs7O0FBT0EsTUFBTVUsS0FBSyxHQUFHLENBQUNKLElBQUQsRUFBT0ssYUFBUCxFQUFzQkYsVUFBdEIsRUFBa0NHLE9BQU8sR0FBRyxDQUE1QyxLQUFrRDtBQUNyRSxNQUFJQSxPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDakIsV0FBT2IsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CTSxJQUFLLEdBQXJDLENBQVA7QUFDRDs7QUFDRCxRQUFNZCxVQUFVLEdBQUdtQixhQUFhLEVBQWhDO0FBQ0FaLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlSLFVBQVcsRUFBcEM7O0FBQ0EsUUFBTWdCLE1BQU0sR0FBR04sc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxTQUFPSSxLQUFLLENBQUNDLE1BQUQsRUFBU2hCLFVBQVQsRUFBcUJpQixVQUFyQixDQUFMLEdBQXdDQyxLQUFLLENBQUNKLElBQUQsRUFBT0ssYUFBUCxFQUFzQkYsVUFBdEIsRUFBa0NHLE9BQU8sR0FBRyxDQUE1QyxDQUE3QyxHQUE4RmIsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR1EsTUFBTyw2Q0FBNENDLFVBQVUsQ0FBQ2pCLFVBQUQsQ0FBYSx3QkFBdUJjLElBQUssR0FBdEgsQ0FBckc7QUFDRCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1pbiwgbWF4KSA9PiAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kTnVtID0gKGV4cHJlc3Npb24pID0+IHtcbiAgbGV0IHNlY29uZE51bSA9ICcnO1xuICBmb3IgKGxldCBpID0gZXhwcmVzc2lvbi5sZW5ndGggLSAxOyBleHByZXNzaW9uW2ldICE9PSAnICc7IGkgLT0gMSkge1xuICAgIHNlY29uZE51bSA9IGV4cHJlc3Npb25baV0gKyBzZWNvbmROdW07XG4gIH1cbiAgcmV0dXJuIHNlY29uZE51bTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Rmlyc3ROdW0gPSAoZXhwcmVzc2lvbikgPT4ge1xuICBsZXQgZmlyc3ROdW0gPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGV4cHJlc3Npb25baV0gIT09ICcgJzsgaSArPSAxKSB7XG4gICAgZmlyc3ROdW0gKz0gZXhwcmVzc2lvbltpXTtcbiAgfVxuICByZXR1cm4gZmlyc3ROdW07XG59O1xuZXhwb3J0IGNvbnN0IHdlbGNvbWUgPSAoKSA9PiBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4tR2FtZXMhJyk7XG5leHBvcnQgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gKHBocmFzZSkgPT4ge1xuICBjb25zb2xlLmxvZygpO1xuICB3ZWxjb21lKCk7XG4gIGNvbnNvbGUubG9nKGAke3BocmFzZX1cXG5gKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWUoKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IVxcbmApO1xuICByZXR1cm4gbmFtZTtcbn07XG5leHBvcnQgY29uc3QgcmVwbHkgPSAoYW5zd2VyLCBleHByZXNzaW9uLCBjb3JyZWN0UmVzKSA9PiB7XG4gIGlmIChhbnN3ZXIgPT09IGNvcnJlY3RSZXMoZXhwcmVzc2lvbikpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGN5Y2xlID0gKG5hbWUsIGZ1bmNGb3JSYW5kb20sIGNvcnJlY3RSZXMsIGNvdW50ZXIgPSAwKSA9PiB7XG4gIGlmIChjb3VudGVyID09PSAzKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX0hYCk7XG4gIH1cbiAgY29uc3QgZXhwcmVzc2lvbiA9IGZ1bmNGb3JSYW5kb20oKTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2V4cHJlc3Npb259YCk7XG4gIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICByZXR1cm4gcmVwbHkoYW5zd2VyLCBleHByZXNzaW9uLCBjb3JyZWN0UmVzKSA/IGN5Y2xlKG5hbWUsIGZ1bmNGb3JSYW5kb20sIGNvcnJlY3RSZXMsIGNvdW50ZXIgKyAxKSA6IGNvbnNvbGUubG9nKGAnJHthbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHtjb3JyZWN0UmVzKGV4cHJlc3Npb24pfScuXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9IWApO1xufTtcbiJdfQ==