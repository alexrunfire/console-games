#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _ = _interopRequireDefault(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = _.default.start('Answer "yes" if given number is prime. Otherwise answer "no".');

_.default.cycle(name, _.default.getRandomNum(2, 1000), _.default.prime);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tcHJpbWUuanMiXSwibmFtZXMiOlsibmFtZSIsImVuZ2luZSIsInN0YXJ0IiwiY3ljbGUiLCJnZXRSYW5kb21OdW0iLCJwcmltZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7OztBQUVBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxVQUFPQyxLQUFQLENBQWEsK0RBQWIsQ0FBYjs7QUFDQUQsVUFBT0UsS0FBUCxDQUFhSCxJQUFiLEVBQW1CQyxVQUFPRyxZQUFQLENBQW9CLENBQXBCLEVBQXVCLElBQXZCLENBQW5CLEVBQWlESCxVQUFPSSxLQUF4RCIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGVuZ2luZSBmcm9tICcuLi8uLic7XG5cbmNvbnN0IG5hbWUgPSBlbmdpbmUuc3RhcnQoJ0Fuc3dlciBcInllc1wiIGlmIGdpdmVuIG51bWJlciBpcyBwcmltZS4gT3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJyk7XG5lbmdpbmUuY3ljbGUobmFtZSwgZW5naW5lLmdldFJhbmRvbU51bSgyLCAxMDAwKSwgZW5naW5lLnByaW1lKTtcbiJdfQ==