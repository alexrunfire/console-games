"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = exports.reply = exports.start = exports.getName = exports.welcome = exports.getFirstNum = exports.getSecondNum = exports.getRandomNum = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const getRandomNum = maxNumber => () => Math.floor(Math.random() * maxNumber);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21OdW0iLCJtYXhOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRTZWNvbmROdW0iLCJleHByZXNzaW9uIiwic2Vjb25kTnVtIiwiaSIsImxlbmd0aCIsImdldEZpcnN0TnVtIiwiZmlyc3ROdW0iLCJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsInN0YXJ0IiwicGhyYXNlIiwibmFtZSIsInJlcGx5IiwiYW5zd2VyIiwiY29ycmVjdFJlcyIsImN5Y2xlIiwiZnVuY0ZvclJhbmRvbSIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUZBO0FBSU8sTUFBTUEsWUFBWSxHQUFJQyxTQUFELElBQWUsTUFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsU0FBM0IsQ0FBMUM7Ozs7QUFDQSxNQUFNSSxZQUFZLEdBQUlDLFVBQUQsSUFBZ0I7QUFDMUMsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHRixVQUFVLENBQUNHLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NILFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLEtBQWtCLEdBQXRELEVBQTJEQSxDQUFDLElBQUksQ0FBaEUsRUFBbUU7QUFDakVELElBQUFBLFNBQVMsR0FBR0QsVUFBVSxDQUFDRSxDQUFELENBQVYsR0FBZ0JELFNBQTVCO0FBQ0Q7O0FBQ0QsU0FBT0EsU0FBUDtBQUNELENBTk07Ozs7QUFPQSxNQUFNRyxXQUFXLEdBQUlKLFVBQUQsSUFBZ0I7QUFDekMsTUFBSUssUUFBUSxHQUFHLEVBQWY7O0FBQ0EsT0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkYsVUFBVSxDQUFDRSxDQUFELENBQVYsS0FBa0IsR0FBbEMsRUFBdUNBLENBQUMsSUFBSSxDQUE1QyxFQUErQztBQUM3Q0csSUFBQUEsUUFBUSxJQUFJTCxVQUFVLENBQUNFLENBQUQsQ0FBdEI7QUFDRDs7QUFDRCxTQUFPRyxRQUFQO0FBQ0QsQ0FOTTs7OztBQU9BLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixDQUF0Qjs7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBdEI7Ozs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLE1BQUQsSUFBWTtBQUMvQk4sRUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FGLEVBQUFBLE9BQU87QUFDUEMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUssTUFBTyxJQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBR0wsT0FBTyxFQUFwQjtBQUNBRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTTSxJQUFLLEtBQTNCO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBUE07Ozs7QUFRQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTaEIsVUFBVCxFQUFxQmlCLFVBQXJCLEtBQW9DO0FBQ3ZELE1BQUlELE1BQU0sS0FBS0MsVUFBVSxDQUFDakIsVUFBRCxDQUF6QixFQUF1QztBQUNyQ08sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTk07Ozs7QUFPQSxNQUFNVSxLQUFLLEdBQUcsQ0FBQ0osSUFBRCxFQUFPSyxhQUFQLEVBQXNCRixVQUF0QixFQUFrQ0csT0FBTyxHQUFHLENBQTVDLEtBQWtEO0FBQ3JFLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPYixPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJNLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1kLFVBQVUsR0FBR21CLGFBQWEsRUFBaEM7QUFDQVosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWVIsVUFBVyxFQUFwQzs7QUFDQSxRQUFNZ0IsTUFBTSxHQUFHTixzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUNBLFNBQU9JLEtBQUssQ0FBQ0MsTUFBRCxFQUFTaEIsVUFBVCxFQUFxQmlCLFVBQXJCLENBQUwsR0FBd0NDLEtBQUssQ0FBQ0osSUFBRCxFQUFPSyxhQUFQLEVBQXNCRixVQUF0QixFQUFrQ0csT0FBTyxHQUFHLENBQTVDLENBQTdDLEdBQThGYixPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHUSxNQUFPLDZDQUE0Q0MsVUFBVSxDQUFDakIsVUFBRCxDQUFhLHdCQUF1QmMsSUFBSyxHQUF0SCxDQUFyRztBQUNELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW0gPSAobWF4TnVtYmVyKSA9PiAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhOdW1iZXIpO1xuZXhwb3J0IGNvbnN0IGdldFNlY29uZE51bSA9IChleHByZXNzaW9uKSA9PiB7XG4gIGxldCBzZWNvbmROdW0gPSAnJztcbiAgZm9yIChsZXQgaSA9IGV4cHJlc3Npb24ubGVuZ3RoIC0gMTsgZXhwcmVzc2lvbltpXSAhPT0gJyAnOyBpIC09IDEpIHtcbiAgICBzZWNvbmROdW0gPSBleHByZXNzaW9uW2ldICsgc2Vjb25kTnVtO1xuICB9XG4gIHJldHVybiBzZWNvbmROdW07XG59O1xuZXhwb3J0IGNvbnN0IGdldEZpcnN0TnVtID0gKGV4cHJlc3Npb24pID0+IHtcbiAgbGV0IGZpcnN0TnVtID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBleHByZXNzaW9uW2ldICE9PSAnICc7IGkgKz0gMSkge1xuICAgIGZpcnN0TnVtICs9IGV4cHJlc3Npb25baV07XG4gIH1cbiAgcmV0dXJuIGZpcnN0TnVtO1xufTtcbmV4cG9ydCBjb25zdCB3ZWxjb21lID0gKCkgPT4gY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluLUdhbWVzIScpO1xuZXhwb3J0IGNvbnN0IGdldE5hbWUgPSAoKSA9PiByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbmV4cG9ydCBjb25zdCBzdGFydCA9IChwaHJhc2UpID0+IHtcbiAgY29uc29sZS5sb2coKTtcbiAgd2VsY29tZSgpO1xuICBjb25zb2xlLmxvZyhgJHtwaHJhc2V9XFxuYCk7XG4gIGNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfSFcXG5gKTtcbiAgcmV0dXJuIG5hbWU7XG59O1xuZXhwb3J0IGNvbnN0IHJlcGx5ID0gKGFuc3dlciwgZXhwcmVzc2lvbiwgY29ycmVjdFJlcykgPT4ge1xuICBpZiAoYW5zd2VyID09PSBjb3JyZWN0UmVzKGV4cHJlc3Npb24pKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBjeWNsZSA9IChuYW1lLCBmdW5jRm9yUmFuZG9tLCBjb3JyZWN0UmVzLCBjb3VudGVyID0gMCkgPT4ge1xuICBpZiAoY291bnRlciA9PT0gMykge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuICB9XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBmdW5jRm9yUmFuZG9tKCk7XG4gIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtleHByZXNzaW9ufWApO1xuICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgcmV0dXJuIHJlcGx5KGFuc3dlciwgZXhwcmVzc2lvbiwgY29ycmVjdFJlcykgPyBjeWNsZShuYW1lLCBmdW5jRm9yUmFuZG9tLCBjb3JyZWN0UmVzLCBjb3VudGVyICsgMSkgOiBjb25zb2xlLmxvZyhgJyR7YW5zd2VyfScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7Y29ycmVjdFJlcyhleHByZXNzaW9uKX0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfSFgKTtcbn07XG4iXX0=