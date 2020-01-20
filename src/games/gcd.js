import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  const leastNumber = Math.min(firstNum, secondNum);
  const largestNumber = Math.max(firstNum, secondNum);
  const iter = (i = 1) => {
    const probableCommonDivisor = leastNumber / i;
    const checkProbableDivForLargNum = largestNumber % probableCommonDivisor === 0;
    return checkProbableDivForLargNum ? probableCommonDivisor : iter(i + 1);
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
