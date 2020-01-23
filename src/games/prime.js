import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor = 2) => {
    if (divisor > (number / 2)) {
      return true;
    }
    const remainderOfDivision = number % divisor;
    return remainderOfDivision === 0 ? false : iter(divisor + 1);
  };
  return iter();
};

const getQuestionAndAnswer = () => {
  const question = String(getRandomNum(2, 1000));
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
