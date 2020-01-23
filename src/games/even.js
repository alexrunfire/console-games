import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = String(getRandomNum(0, 100));
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
