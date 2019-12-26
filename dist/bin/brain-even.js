#!/usr/bin/env node
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

  if (answer === 'yes' && number % 2 === 0 || answer === 'no' && number % 2 !== 0) {
    console.log('Correct!');
    return cycle(counter + 1);
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
  return cycle();
};

cycle();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwiZ2V0UmFuZG9tTnVtIiwibWF4TnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjeWNsZSIsImNvdW50ZXIiLCJudW1iZXIiLCJhbnN3ZXIiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOztBQUVBOzs7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxHQUFELElBQVVBLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBWixHQUFnQixLQUFoQixHQUF3QixJQUFsRDs7QUFDQSxNQUFNQyxZQUFZLEdBQUlDLFNBQUQsSUFBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsU0FBM0IsQ0FBcEM7O0FBQ0FJLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBO0FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhEQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLGdCQUFiO0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNDLElBQUssS0FBM0I7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQUNDLE9BQU8sR0FBRyxDQUFYLEtBQWlCO0FBQzdCLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPSixPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJDLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLE1BQU0sR0FBR1YsWUFBWSxDQUFDLEdBQUQsQ0FBM0I7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUksTUFBTyxFQUFoQzs7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsTUFBTUYsTUFBTSxLQUFLLEtBQVosSUFBdUJELE1BQU0sR0FBRyxDQUFULEtBQWUsQ0FBdkMsSUFBZ0RDLE1BQU0sS0FBSyxJQUFaLElBQXNCRCxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQXhGLEVBQTZGO0FBQzNGTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBT0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBWCxDQUFaO0FBQ0Q7O0FBQ0RKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLElBQUdLLE1BQU8sNkNBQTRDYixPQUFPLENBQUNZLE1BQUQsQ0FBUyx3QkFBdUJILElBQUssR0FBL0c7QUFDQSxTQUFPQyxLQUFLLEVBQVo7QUFDRCxDQWJEOztBQWNBQSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5pbXBvcnQgeyB3ZWxjb21lLCBnZXROYW1lIH0gZnJvbSAnLi4nO1xuXG5jb25zdCB0cnVlQW5zID0gKG51bSkgPT4gKG51bSAlIDIgPT09IDAgPyAneWVzJyA6ICdubycpO1xuY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1heE51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4TnVtYmVyKTtcbmNvbnNvbGUubG9nKCk7XG53ZWxjb21lKCk7XG5jb25zb2xlLmxvZygnQW5zd2VyIFwieWVzXCIgaWYgdGhlIG51bWJlciBpcyBldmVuLCBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi5cXG4nKTtcbmNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG5jb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hXFxuYCk7XG5jb25zdCBjeWNsZSA9IChjb3VudGVyID0gMCkgPT4ge1xuICBpZiAoY291bnRlciA9PT0gMykge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuICB9XG4gIGNvbnN0IG51bWJlciA9IGdldFJhbmRvbU51bSgxMDApO1xuICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7bnVtYmVyfWApO1xuICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgaWYgKCgoYW5zd2VyID09PSAneWVzJykgJiYgKG51bWJlciAlIDIgPT09IDApKSB8fCAoKGFuc3dlciA9PT0gJ25vJykgJiYgKG51bWJlciAlIDIgIT09IDApKSkge1xuICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIHJldHVybiBjeWNsZShjb3VudGVyICsgMSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCcke2Fuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke3RydWVBbnMobnVtYmVyKX0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfSFgKTtcbiAgcmV0dXJuIGN5Y2xlKCk7XG59O1xuY3ljbGUoKTtcbiJdfQ==