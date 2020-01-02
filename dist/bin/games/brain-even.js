#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _ = require("../..");

const trueAns = num => num % 2 === 0 ? 'yes' : 'no';

const name = (0, _.start)('Answer "yes" if the number is even, otherwise answer "no".');
(0, _.cycle)(name, (0, _.getRandomNum)(0, 100), trueAns);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJ0cnVlQW5zIiwibnVtIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7OztBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBSUMsR0FBRCxJQUFVQSxHQUFHLEdBQUcsQ0FBTixLQUFZLENBQVosR0FBZ0IsS0FBaEIsR0FBd0IsSUFBbEQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLGFBQU0sNERBQU4sQ0FBYjtBQUNBLGFBQU1BLElBQU4sRUFBWSxvQkFBYSxDQUFiLEVBQWdCLEdBQWhCLENBQVosRUFBa0NGLE9BQWxDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgeyBzdGFydCwgY3ljbGUsIGdldFJhbmRvbU51bSB9IGZyb20gJy4uLy4uJztcblxuY29uc3QgdHJ1ZUFucyA9IChudW0pID0+IChudW0gJSAyID09PSAwID8gJ3llcycgOiAnbm8nKTtcbmNvbnN0IG5hbWUgPSBzdGFydCgnQW5zd2VyIFwieWVzXCIgaWYgdGhlIG51bWJlciBpcyBldmVuLCBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi4nKTtcbmN5Y2xlKG5hbWUsIGdldFJhbmRvbU51bSgwLCAxMDApLCB0cnVlQW5zKTtcbiJdfQ==