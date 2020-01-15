import isPrime from 'prime-number';

import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const getNumber = () => {
  const randomNumber = getRandomNum(2, 1000);
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, trueAnswer);
};

export default () => {
  startGameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', getNumber);
};
