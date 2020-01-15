import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const isEven = (num) => num % 2 === 0;

const defineEvenNumber = () => {
  const randomNum = getRandomNum(0, 100);
  const correctResult = isEven(randomNum) ? 'yes' : 'no';
  return cons(randomNum, correctResult);
};

export default () => {
  startGameEngine('Answer "yes" if the number is even, otherwise answer "no".', defineEvenNumber);
};
