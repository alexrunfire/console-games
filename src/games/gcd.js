import gcd from 'greatest-common-divisor';

import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const getGcd = () => {
  const firstNum = getRandomNum(2, 100);
  const secondNum = getRandomNum(2, 100);
  const gcdOfNumbers = String(gcd(firstNum, secondNum));
  const givenNumbers = `${firstNum} ${secondNum}`;
  return cons(givenNumbers, gcdOfNumbers);
};

export default () => {
  startGameEngine('Find the greatest common divisor of given numbers.', getGcd);
};
