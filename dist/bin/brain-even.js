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

const cycle = (counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const number = getRandomNum(100);
  console.log(`Question: ${number}`);

  const answer = _readlineSync.default.question('Your answer: ');

  const reply = () => {
    if (answer === 'yes' && number % 2 === 0 || answer === 'no' && number % 2 !== 0) {
      console.log('Correct!');
      return cycle(counter + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
    return cycle();
  };

  return reply();
};

cycle();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwiZ2V0UmFuZG9tTnVtIiwibWF4TnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjeWNsZSIsImNvdW50ZXIiLCJudW1iZXIiLCJhbnN3ZXIiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsInJlcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEdBQUQsSUFBVUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCLElBQWxEOztBQUNBLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxTQUEzQixDQUFwQzs7QUFDQUksT0FBTyxDQUFDQyxHQUFSO0FBQ0E7QUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZ0JBQWI7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0MsSUFBSyxLQUEzQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLENBQVgsS0FBaUI7QUFDN0IsTUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2pCLFdBQU9KLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkMsSUFBSyxHQUFyQyxDQUFQO0FBQ0Q7O0FBQ0QsUUFBTUcsTUFBTSxHQUFHVixZQUFZLENBQUMsR0FBRCxDQUEzQjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZSSxNQUFPLEVBQWhDOztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFLSCxNQUFNLEtBQUssS0FBWCxJQUFvQkQsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFwQyxJQUEyQ0MsTUFBTSxLQUFLLElBQVgsSUFBbUJELE1BQU0sR0FBRyxDQUFULEtBQWUsQ0FBakYsRUFBcUY7QUFDbkZMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxhQUFPRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFYLENBQVo7QUFDRDs7QUFDREosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR0ssTUFBTyw2Q0FBNENiLE9BQU8sQ0FBQ1ksTUFBRCxDQUFTLHdCQUF1QkgsSUFBSyxHQUEvRztBQUNBLFdBQU9DLEtBQUssRUFBWjtBQUNELEdBUEQ7O0FBUUEsU0FBT00sS0FBSyxFQUFaO0FBQ0QsQ0FoQkQ7O0FBaUJBTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5pbXBvcnQgeyB3ZWxjb21lLCBnZXROYW1lIH0gZnJvbSAnLi4nO1xuXG5jb25zdCB0cnVlQW5zID0gKG51bSkgPT4gKG51bSAlIDIgPT09IDAgPyAneWVzJyA6ICdubycpO1xuY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1heE51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4TnVtYmVyKTtcbmNvbnNvbGUubG9nKCk7XG53ZWxjb21lKCk7XG5jb25zb2xlLmxvZygnQW5zd2VyIFwieWVzXCIgaWYgdGhlIG51bWJlciBpcyBldmVuLCBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi5cXG4nKTtcbmNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG5jb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hXFxuYCk7XG5jb25zdCBjeWNsZSA9IChjb3VudGVyID0gMCkgPT4ge1xuICBpZiAoY291bnRlciA9PT0gMykge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuICB9XG4gIGNvbnN0IG51bWJlciA9IGdldFJhbmRvbU51bSgxMDApO1xuICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7bnVtYmVyfWApO1xuICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgY29uc3QgcmVwbHkgPSAoKSA9PiB7XG4gICAgaWYgKChhbnN3ZXIgPT09ICd5ZXMnICYmIG51bWJlciAlIDIgPT09IDApIHx8IChhbnN3ZXIgPT09ICdubycgJiYgbnVtYmVyICUgMiAhPT0gMCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgICAgcmV0dXJuIGN5Y2xlKGNvdW50ZXIgKyAxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCcke2Fuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke3RydWVBbnMobnVtYmVyKX0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfSFgKTtcbiAgICByZXR1cm4gY3ljbGUoKTtcbiAgfTtcbiAgcmV0dXJuIHJlcGx5KCk7XG59O1xuY3ljbGUoKTtcbiJdfQ==