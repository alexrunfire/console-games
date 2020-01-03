#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _ = _interopRequireDefault(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = _.default.start('What is the result of the expression?');

_.default.cycle(name, _.default.getTwoRandomNum, _.default.getCalc);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tY2FsYy5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiZW5naW5lIiwic3RhcnQiLCJjeWNsZSIsImdldFR3b1JhbmRvbU51bSIsImdldENhbGMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7QUFFQTs7OztBQUVBLE1BQU1BLElBQUksR0FBR0MsVUFBT0MsS0FBUCxDQUFhLHVDQUFiLENBQWI7O0FBQ0FELFVBQU9FLEtBQVAsQ0FBYUgsSUFBYixFQUFtQkMsVUFBT0csZUFBMUIsRUFBMkNILFVBQU9JLE9BQWxEIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgZW5naW5lIGZyb20gJy4uLy4uJztcblxuY29uc3QgbmFtZSA9IGVuZ2luZS5zdGFydCgnV2hhdCBpcyB0aGUgcmVzdWx0IG9mIHRoZSBleHByZXNzaW9uPycpO1xuZW5naW5lLmN5Y2xlKG5hbWUsIGVuZ2luZS5nZXRUd29SYW5kb21OdW0sIGVuZ2luZS5nZXRDYWxjKTtcbiJdfQ==