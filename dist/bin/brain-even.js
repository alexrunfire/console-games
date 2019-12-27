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

const reply = (answer, number, counter) => {
  if (answer === 'yes' && number % 2 === 0 || answer === 'no' && number % 2 !== 0) {
    console.log('Correct!');
    return counter + 1;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
  return 0;
};

const cycle = (counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const number = getRandomNum(100);
  console.log(`Question: ${number}`);

  const answer = _readlineSync.default.question('Your answer: ');

  return cycle(reply(answer, number, counter));
};

cycle();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwiZ2V0UmFuZG9tTnVtIiwibWF4TnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZXBseSIsImFuc3dlciIsIm51bWJlciIsImNvdW50ZXIiLCJjeWNsZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEdBQUQsSUFBVUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCLElBQWxEOztBQUNBLE1BQU1DLFlBQVksR0FBSUMsU0FBRCxJQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxTQUEzQixDQUFwQzs7QUFDQUksT0FBTyxDQUFDQyxHQUFSO0FBQ0E7QUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZ0JBQWI7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0MsSUFBSyxLQUEzQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxPQUFqQixLQUE2QjtBQUN6QyxNQUFLRixNQUFNLEtBQUssS0FBWCxJQUFvQkMsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFwQyxJQUEyQ0QsTUFBTSxLQUFLLElBQVgsSUFBbUJDLE1BQU0sR0FBRyxDQUFULEtBQWUsQ0FBakYsRUFBcUY7QUFDbkZMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPSyxPQUFPLEdBQUcsQ0FBakI7QUFDRDs7QUFDRE4sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR0csTUFBTyw2Q0FBNENYLE9BQU8sQ0FBQ1ksTUFBRCxDQUFTLHdCQUF1QkgsSUFBSyxHQUEvRztBQUNBLFNBQU8sQ0FBUDtBQUNELENBUEQ7O0FBUUEsTUFBTUssS0FBSyxHQUFHLENBQUNELE9BQU8sR0FBRyxDQUFYLEtBQWlCO0FBQzdCLE1BQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNqQixXQUFPTixPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJDLElBQUssR0FBckMsQ0FBUDtBQUNEOztBQUNELFFBQU1HLE1BQU0sR0FBR1YsWUFBWSxDQUFDLEdBQUQsQ0FBM0I7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUksTUFBTyxFQUFoQzs7QUFDQSxRQUFNRCxNQUFNLEdBQUdJLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7O0FBQ0EsU0FBT0YsS0FBSyxDQUFDSixLQUFLLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsT0FBakIsQ0FBTixDQUFaO0FBQ0QsQ0FSRDs7QUFTQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuaW1wb3J0IHsgd2VsY29tZSwgZ2V0TmFtZSB9IGZyb20gJy4uJztcblxuY29uc3QgdHJ1ZUFucyA9IChudW0pID0+IChudW0gJSAyID09PSAwID8gJ3llcycgOiAnbm8nKTtcbmNvbnN0IGdldFJhbmRvbU51bSA9IChtYXhOdW1iZXIpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWJlcik7XG5jb25zb2xlLmxvZygpO1xud2VsY29tZSgpO1xuY29uc29sZS5sb2coJ0Fuc3dlciBcInllc1wiIGlmIHRoZSBudW1iZXIgaXMgZXZlbiwgb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuXFxuJyk7XG5jb25zdCBuYW1lID0gZ2V0TmFtZSgpO1xuY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IVxcbmApO1xuY29uc3QgcmVwbHkgPSAoYW5zd2VyLCBudW1iZXIsIGNvdW50ZXIpID0+IHtcbiAgaWYgKChhbnN3ZXIgPT09ICd5ZXMnICYmIG51bWJlciAlIDIgPT09IDApIHx8IChhbnN3ZXIgPT09ICdubycgJiYgbnVtYmVyICUgMiAhPT0gMCkpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gY291bnRlciArIDE7XG4gIH1cbiAgY29uc29sZS5sb2coYCcke2Fuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke3RydWVBbnMobnVtYmVyKX0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfSFgKTtcbiAgcmV0dXJuIDA7XG59O1xuY29uc3QgY3ljbGUgPSAoY291bnRlciA9IDApID0+IHtcbiAgaWYgKGNvdW50ZXIgPT09IDMpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfSFgKTtcbiAgfVxuICBjb25zdCBudW1iZXIgPSBnZXRSYW5kb21OdW0oMTAwKTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke251bWJlcn1gKTtcbiAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gIHJldHVybiBjeWNsZShyZXBseShhbnN3ZXIsIG51bWJlciwgY291bnRlcikpO1xufTtcbmN5Y2xlKCk7XG4iXX0=