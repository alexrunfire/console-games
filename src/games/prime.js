import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (i = 2) => {
    if (i > (number / 2)) {
      return true;
    }
    const remainderOfDivision = number % i;
    return remainderOfDivision === 0 ? false : iter(i + 1);
  };
  return iter();
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum(2, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
