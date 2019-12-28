#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const trueAns = num => num % 2 === 0 ? 'yes' : 'no';

const getRandomNum = maxNumber => Math.floor(Math.random() * maxNumber);

console.log();
(0, _.welcome)();
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = (0, _.getName)();
console.log(`Hello, ${name}!\n`);

const reply = (answer, number) => {
  if (answer === 'yes' && number % 2 === 0 || answer === 'no' && number % 2 !== 0) {
    console.log('Correct!');
    return true;
  }

  return false;
};

const cycle = (counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const number = getRandomNum(100);
  console.log(`Question: ${number}`);

  const answer = _readlineSync.default.question('Your answer: ');

  return reply(answer, number) ? cycle(counter + 1) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
};

cycle();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwiZ2V0UmFuZG9tTnVtIiwibWF4TnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZXBseSIsImFuc3dlciIsIm51bWJlciIsImN5Y2xlIiwiY291bnRlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEdBQUQsSUFBVUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCLElBQWxEOztBQUNBLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxTQUEzQixDQUFwQzs7QUFDQUksT0FBTyxDQUFDQyxHQUFSO0FBQ0E7QUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZ0JBQWI7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0MsSUFBSyxLQUEzQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEtBQW9CO0FBQ2hDLE1BQUtELE1BQU0sS0FBSyxLQUFYLElBQW9CQyxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQXBDLElBQTJDRCxNQUFNLEtBQUssSUFBWCxJQUFtQkMsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFqRixFQUFxRjtBQUNuRkwsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTkQ7O0FBT0EsTUFBTUssS0FBSyxHQUFHLENBQUNDLE9BQU8sR0FBRyxDQUFYLEtBQWlCO0FBQzdCLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPUCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJDLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLE1BQU0sR0FBR1YsWUFBWSxDQUFDLEdBQUQsQ0FBM0I7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUksTUFBTyxFQUFoQzs7QUFDQSxRQUFNRCxNQUFNLEdBQUdJLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsU0FBT04sS0FBSyxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FBTCxHQUF3QkMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBWCxDQUE3QixHQUE2Q1AsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR0csTUFBTyw2Q0FBNENYLE9BQU8sQ0FBQ1ksTUFBRCxDQUFTLHdCQUF1QkgsSUFBSyxHQUEvRyxDQUFwRDtBQUNELENBUkQ7O0FBU0FJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmltcG9ydCB7IHdlbGNvbWUsIGdldE5hbWUgfSBmcm9tICcuLic7XG5cbmNvbnN0IHRydWVBbnMgPSAobnVtKSA9PiAobnVtICUgMiA9PT0gMCA/ICd5ZXMnIDogJ25vJyk7XG5jb25zdCBnZXRSYW5kb21OdW0gPSAobWF4TnVtYmVyKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhOdW1iZXIpO1xuY29uc29sZS5sb2coKTtcbndlbGNvbWUoKTtcbmNvbnNvbGUubG9nKCdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLlxcbicpO1xuY29uc3QgbmFtZSA9IGdldE5hbWUoKTtcbmNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfSFcXG5gKTtcbmNvbnN0IHJlcGx5ID0gKGFuc3dlciwgbnVtYmVyKSA9PiB7XG4gIGlmICgoYW5zd2VyID09PSAneWVzJyAmJiBudW1iZXIgJSAyID09PSAwKSB8fCAoYW5zd2VyID09PSAnbm8nICYmIG51bWJlciAlIDIgIT09IDApKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGN5Y2xlID0gKGNvdW50ZXIgPSAwKSA9PiB7XG4gIGlmIChjb3VudGVyID09PSAzKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX0hYCk7XG4gIH1cbiAgY29uc3QgbnVtYmVyID0gZ2V0UmFuZG9tTnVtKDEwMCk7XG4gIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtudW1iZXJ9YCk7XG4gIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICByZXR1cm4gcmVwbHkoYW5zd2VyLCBudW1iZXIpID8gY3ljbGUoY291bnRlciArIDEpIDogY29uc29sZS5sb2coYCcke2Fuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke3RydWVBbnMobnVtYmVyKX0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfSFgKTtcbn07XG5jeWNsZSgpO1xuIl19