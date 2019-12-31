#!/usr/bin/env node
/* eslint-disable no-console */

import { start, cycle, getRandomNum } from '../..';

const getSign = (firstNum, expression) => expression[String(firstNum).length + 1];
const getSecondNum = (expression) => {
  let secondNum = '';
  for (let i = expression.length - 1; expression[i] !== ' '; i -= 1) {
    secondNum = expression[i] + secondNum;
  }
  return secondNum;
};
const getFirstNum = (expression) => {
  let firstNum = '';
  for (let i = 0; expression[i] !== ' '; i += 1) {
    firstNum += expression[i];
  }
  return firstNum;
};
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
