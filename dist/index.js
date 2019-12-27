"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = exports.welcome = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const welcome = () => console.log('Welcome to the Brain-Games!');

exports.welcome = welcome;

const getName = () => _readlineSync.default.question('May I have your name? ');

exports.getName = getName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0FBRkE7QUFJTyxNQUFNQSxPQUFPLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosQ0FBdEI7Ozs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3Qgd2VsY29tZSA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbi1HYW1lcyEnKTtcbmV4cG9ydCBjb25zdCBnZXROYW1lID0gKCkgPT4gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4iXX0=