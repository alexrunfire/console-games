import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const calculateNumbers = (firstNum, secondNum, mathSign) => {
  switch (mathSign) {
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

const getRandomMathSign = () => {
  switch (getRandomNum(0, 2)) {
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

const getMathExpression = () => {
  const firstNumber = getRandomNum(0, 100);
  const secondNumber = getRandomNum(0, 100);
  const sign = getRandomMathSign();
  const mathExpression = `${firstNumber} ${sign} ${secondNumber}`;
  const resultOfExpression = calculateNumbers(firstNumber, secondNumber, sign);
  return cons(mathExpression, resultOfExpression);
};

export default () => {
  startGameEngine('What is the result of the expression?', getMathExpression);
};
