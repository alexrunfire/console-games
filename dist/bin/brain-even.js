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

const reply = (answer, number, counter) => {
  if (answer === 'yes' && number % 2 === 0 || answer === 'no' && number % 2 !== 0) {
    console.log('Correct!');
    return cycle(counter + 1);
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
  return cycle();
};

const cycle = (counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const number = getRandomNum(100);
  console.log(`Question: ${number}`);

  const answer = _readlineSync.default.question('Your answer: ');

  return reply(answer, number, counter);
};

cycle();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwiZ2V0UmFuZG9tTnVtIiwibWF4TnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZXBseSIsImFuc3dlciIsIm51bWJlciIsImNvdW50ZXIiLCJjeWNsZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEdBQUQsSUFBVUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCLElBQWxEOztBQUNBLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxTQUEzQixDQUFwQzs7QUFDQUksT0FBTyxDQUFDQyxHQUFSO0FBQ0E7QUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZ0JBQWI7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0MsSUFBSyxLQUEzQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxPQUFqQixLQUE2QjtBQUN6QyxNQUFNRixNQUFNLEtBQUssS0FBWixJQUF1QkMsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUF2QyxJQUFnREQsTUFBTSxLQUFLLElBQVosSUFBc0JDLE1BQU0sR0FBRyxDQUFULEtBQWUsQ0FBeEYsRUFBNkY7QUFDM0ZMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPTSxLQUFLLENBQUNELE9BQU8sR0FBRyxDQUFYLENBQVo7QUFDRDs7QUFDRE4sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR0csTUFBTyw2Q0FBNENYLE9BQU8sQ0FBQ1ksTUFBRCxDQUFTLHdCQUF1QkgsSUFBSyxHQUEvRztBQUNBLFNBQU9LLEtBQUssRUFBWjtBQUNELENBUEQ7O0FBUUEsTUFBTUEsS0FBSyxHQUFHLENBQUNELE9BQU8sR0FBRyxDQUFYLEtBQWlCO0FBQzdCLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPTixPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJDLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLE1BQU0sR0FBR1YsWUFBWSxDQUFDLEdBQUQsQ0FBM0I7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUksTUFBTyxFQUFoQzs7QUFDQSxRQUFNRCxNQUFNLEdBQUdJLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsU0FBT04sS0FBSyxDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLE9BQWpCLENBQVo7QUFDRCxDQVJEOztBQVNBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5pbXBvcnQgeyB3ZWxjb21lLCBnZXROYW1lIH0gZnJvbSAnLi4nO1xuXG5jb25zdCB0cnVlQW5zID0gKG51bSkgPT4gKG51bSAlIDIgPT09IDAgPyAneWVzJyA6ICdubycpO1xuY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1heE51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4TnVtYmVyKTtcbmNvbnNvbGUubG9nKCk7XG53ZWxjb21lKCk7XG5jb25zb2xlLmxvZygnQW5zd2VyIFwieWVzXCIgaWYgdGhlIG51bWJlciBpcyBldmVuLCBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi5cXG4nKTtcbmNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG5jb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hXFxuYCk7XG5jb25zdCByZXBseSA9IChhbnN3ZXIsIG51bWJlciwgY291bnRlcikgPT4ge1xuICBpZiAoKChhbnN3ZXIgPT09ICd5ZXMnKSAmJiAobnVtYmVyICUgMiA9PT0gMCkpIHx8ICgoYW5zd2VyID09PSAnbm8nKSAmJiAobnVtYmVyICUgMiAhPT0gMCkpKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIGN5Y2xlKGNvdW50ZXIgKyAxKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJyR7YW5zd2VyfScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7dHJ1ZUFucyhudW1iZXIpfScuXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9IWApO1xuICByZXR1cm4gY3ljbGUoKTtcbn07XG5jb25zdCBjeWNsZSA9IChjb3VudGVyID0gMCkgPT4ge1xuICBpZiAoY291bnRlciA9PT0gMykge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuICB9XG4gIGNvbnN0IG51bWJlciA9IGdldFJhbmRvbU51bSgxMDApO1xuICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7bnVtYmVyfWApO1xuICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgcmV0dXJuIHJlcGx5KGFuc3dlciwgbnVtYmVyLCBjb3VudGVyKVxufTtcbmN5Y2xlKCk7XG4iXX0=