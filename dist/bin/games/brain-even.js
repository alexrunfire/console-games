#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _ = _interopRequireDefault(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = _.default.start('Answer "yes" if the number is even, otherwise answer "no".');

_.default.cycle(name, _.default.getRandomNum(0, 100), _.default.isEven);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiZW5naW5lIiwic3RhcnQiLCJjeWNsZSIsImdldFJhbmRvbU51bSIsImlzRXZlbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7OztBQUVBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxVQUFPQyxLQUFQLENBQWEsNERBQWIsQ0FBYjs7QUFDQUQsVUFBT0UsS0FBUCxDQUFhSCxJQUFiLEVBQW1CQyxVQUFPRyxZQUFQLENBQW9CLENBQXBCLEVBQXVCLEdBQXZCLENBQW5CLEVBQWdESCxVQUFPSSxNQUF2RCIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGVuZ2luZSBmcm9tICcuLi8uLic7XG5cbmNvbnN0IG5hbWUgPSBlbmdpbmUuc3RhcnQoJ0Fuc3dlciBcInllc1wiIGlmIHRoZSBudW1iZXIgaXMgZXZlbiwgb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJyk7XG5lbmdpbmUuY3ljbGUobmFtZSwgZW5naW5lLmdldFJhbmRvbU51bSgwLCAxMDApLCBlbmdpbmUuaXNFdmVuKTtcbiJdfQ==