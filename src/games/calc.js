import { start, cycle } from '..';

import { getRandomNum, getFirstNum, getSecondNum } from '../utils';

const getCalc = (expression) => {
  const firstNum = Number(getFirstNum(expression));
  const secondNum = Number(getSecondNum(expression));
  const sign = expression[String(firstNum).length + 1];
  switch (sign) {
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
  switch (getRandomNum(0, 3)()) {
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

const getTwoRandomNum = () => `${getRandomNum(0, 100)()} ${getRandomSign()} ${getRandomNum(0, 100)()}`;

export default () => {
  const name = start('What is the result of the expression?');
  cycle(name, getTwoRandomNum, getCalc);
};
