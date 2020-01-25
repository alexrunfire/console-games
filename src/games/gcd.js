import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  const leastNumber = Math.min(firstNum, secondNum);
  const largestNumber = Math.max(firstNum, secondNum);
  const iter = (divisor = 1) => {
    const commonDiv = leastNumber / divisor;
    const isCommonDiv = largestNumber % commonDiv === 0;
    return isCommonDiv ? commonDiv : iter(divisor + 1);
  };
  return iter();
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(2, 100);
  const secondNum = getRandomNum(2, 100);
  const answer = String(findGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
