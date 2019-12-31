#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _greatestCommonDivisor = _interopRequireDefault(require("greatest-common-divisor"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getGcd = expression => {
  const f = Number((0, _.getFirstNum)(expression));
  const s = Number((0, _.getSecondNum)(expression));
  return String((0, _greatestCommonDivisor.default)(f, s));
};

const twoRandomNum = () => `${(0, _.getRandomNum)(101)()} ${(0, _.getRandomNum)(101)()}`;

const name = (0, _.start)('Find the greatest common divisor of given numbers.');
(0, _.cycle)(name, twoRandomNum, getGcd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tZ2NkLmpzIl0sIm5hbWVzIjpbImdldEdjZCIsImV4cHJlc3Npb24iLCJmIiwiTnVtYmVyIiwicyIsIlN0cmluZyIsInR3b1JhbmRvbU51bSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7QUFFQTs7QUFFQTs7OztBQUlBLE1BQU1BLE1BQU0sR0FBSUMsVUFBRCxJQUFnQjtBQUM3QixRQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQyxtQkFBWUYsVUFBWixDQUFELENBQWhCO0FBQ0EsUUFBTUcsQ0FBQyxHQUFHRCxNQUFNLENBQUMsb0JBQWFGLFVBQWIsQ0FBRCxDQUFoQjtBQUNBLFNBQU9JLE1BQU0sQ0FBQyxvQ0FBSUgsQ0FBSixFQUFPRSxDQUFQLENBQUQsQ0FBYjtBQUNELENBSkQ7O0FBS0EsTUFBTUUsWUFBWSxHQUFHLE1BQU8sR0FBRSxvQkFBYSxHQUFiLEdBQW9CLElBQUcsb0JBQWEsR0FBYixHQUFvQixFQUF6RTs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsYUFBTSxvREFBTixDQUFiO0FBQ0EsYUFBTUEsSUFBTixFQUFZRCxZQUFaLEVBQTBCTixNQUExQiIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGdjZCBmcm9tICdncmVhdGVzdC1jb21tb24tZGl2aXNvcic7XG5cbmltcG9ydCB7XG4gIHN0YXJ0LCBjeWNsZSwgZ2V0UmFuZG9tTnVtLCBnZXRGaXJzdE51bSwgZ2V0U2Vjb25kTnVtLFxufSBmcm9tICcuLi8uLic7XG5cbmNvbnN0IGdldEdjZCA9IChleHByZXNzaW9uKSA9PiB7XG4gIGNvbnN0IGYgPSBOdW1iZXIoZ2V0Rmlyc3ROdW0oZXhwcmVzc2lvbikpO1xuICBjb25zdCBzID0gTnVtYmVyKGdldFNlY29uZE51bShleHByZXNzaW9uKSk7XG4gIHJldHVybiBTdHJpbmcoZ2NkKGYsIHMpKTtcbn07XG5jb25zdCB0d29SYW5kb21OdW0gPSAoKSA9PiBgJHtnZXRSYW5kb21OdW0oMTAxKSgpfSAke2dldFJhbmRvbU51bSgxMDEpKCl9YDtcbmNvbnN0IG5hbWUgPSBzdGFydCgnRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgZ2l2ZW4gbnVtYmVycy4nKTtcbmN5Y2xlKG5hbWUsIHR3b1JhbmRvbU51bSwgZ2V0R2NkKTtcbiJdfQ==