#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _ = _interopRequireDefault(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = _.default.start('What number is missing in the progression?');

_.default.cycle(name, _.default.randomProgr, _.default.findSkipped);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tcHJvZ3Jlc3Npb24uanMiXSwibmFtZXMiOlsibmFtZSIsImVuZ2luZSIsInN0YXJ0IiwiY3ljbGUiLCJyYW5kb21Qcm9nciIsImZpbmRTa2lwcGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7O0FBRUE7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLFVBQU9DLEtBQVAsQ0FBYSw0Q0FBYixDQUFiOztBQUNBRCxVQUFPRSxLQUFQLENBQWFILElBQWIsRUFBbUJDLFVBQU9HLFdBQTFCLEVBQXVDSCxVQUFPSSxXQUE5QyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGVuZ2luZSBmcm9tICcuLi8uLic7XG5cbmNvbnN0IG5hbWUgPSBlbmdpbmUuc3RhcnQoJ1doYXQgbnVtYmVyIGlzIG1pc3NpbmcgaW4gdGhlIHByb2dyZXNzaW9uPycpO1xuZW5naW5lLmN5Y2xlKG5hbWUsIGVuZ2luZS5yYW5kb21Qcm9nciwgZW5naW5lLmZpbmRTa2lwcGVkKTtcbiJdfQ==