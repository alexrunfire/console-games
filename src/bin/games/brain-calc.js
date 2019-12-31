#!/usr/bin/env node
/* eslint-disable no-console */

import {
  start, cycle, getRandomNum, getFirstNum, getSecondNum,
} from '../..';

const getSign = (firstNum, expression) => expression[String(firstNum).length + 1];
const getCalc = (expression) => {
  const firstNum = Number(getFirstNum(expression));
  const secondNum = Number(getSecondNum(expression));
  switch (getSign(firstNum, expression)) {
    case '+':
      return String(firstNum + secondNum);
    case '-':
      return String(firstNum - secondNum);
    case '*':
      return String(firstNum * secondNum);
    default:
  }
  return false;
};
const getRandomSign = () => {
  switch (getRandomNum(3)()) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
  }
  return false;
};
const getRandomExpr = () => `${getRandomNum(100)()} ${getRandomSign()} ${getRandomNum(100)()}`;
const name = start('What is the result of the expression?');
cycle(name, getRandomExpr, getCalc);
