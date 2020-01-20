import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const gameDescription = 'What number is missing in the progression?';

const findSkippedElement = (firstNum, diff, numberOfSkippedEl) => {
  const elementDiff = diff * (numberOfSkippedEl - 1);
  return firstNum + elementDiff;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNum(0, 100);
  const difference = getRandomNum(1, 10);
  const numberOfSkippedElement = getRandomNum(1, 10);
  let question = '';
  for (let i = 1; i < 11; i += 1) {
    if (i === numberOfSkippedElement) {
      question += '.. ';
    } else {
      question = `${question}${firstNumber + difference * (i - 1)} `;
    }
  }
  const answer = String(findSkippedElement(firstNumber, difference, numberOfSkippedElement));
  return cons(question, answer);
};

export default () => startGameEngine(gameDescription, getQuestionAndAnswer);
