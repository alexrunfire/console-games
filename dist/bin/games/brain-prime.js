#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _primeNumber = _interopRequireDefault(require("prime-number"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prime = num => (0, _primeNumber.default)(num) ? 'yes' : 'no';

const name = (0, _.start)('Answer "yes" if given number is prime. Otherwise answer "no".');
(0, _.cycle)(name, (0, _.getRandomNum)(2, 1000), prime);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tcHJpbWUuanMiXSwibmFtZXMiOlsicHJpbWUiLCJudW0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUlDLEdBQUQsSUFBVSwwQkFBUUEsR0FBUixJQUFlLEtBQWYsR0FBdUIsSUFBL0M7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLGFBQU0sK0RBQU4sQ0FBYjtBQUNBLGFBQU1BLElBQU4sRUFBWSxvQkFBYSxDQUFiLEVBQWdCLElBQWhCLENBQVosRUFBbUNGLEtBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgaXNQcmltZSBmcm9tICdwcmltZS1udW1iZXInO1xuXG5pbXBvcnQgeyBzdGFydCwgY3ljbGUsIGdldFJhbmRvbU51bSB9IGZyb20gJy4uLy4uJztcblxuY29uc3QgcHJpbWUgPSAobnVtKSA9PiAoaXNQcmltZShudW0pID8gJ3llcycgOiAnbm8nKTtcbmNvbnN0IG5hbWUgPSBzdGFydCgnQW5zd2VyIFwieWVzXCIgaWYgZ2l2ZW4gbnVtYmVyIGlzIHByaW1lLiBPdGhlcndpc2UgYW5zd2VyIFwibm9cIi4nKTtcbmN5Y2xlKG5hbWUsIGdldFJhbmRvbU51bSgyLCAxMDAwKSwgcHJpbWUpO1xuIl19