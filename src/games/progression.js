import { cons } from '@hexlet/pairs';

import startGameEngine from '..';

import getRandomNum from '../utils';

const findSkippedElement = (firstNum, diff, numberOfSkippedEl) => {
  const elementDiff = diff * (numberOfSkippedEl - 1);
  return String(firstNum + elementDiff);
};

const getProgression = () => {
  const firstNumber = getRandomNum(0, 100);
  const difference = getRandomNum(1, 10);
  const numberOfSkippedElement = getRandomNum(1, 10);
  let progression = '';
  for (let i = 1; i < 11; i += 1) {
    if (i === numberOfSkippedElement) {
      progression += '.. ';
    } else {
      progression = `${progression}${firstNumber + difference * (i - 1)} `;
    }
  }
  const skippedElement = findSkippedElement(firstNumber, difference, numberOfSkippedElement);
  return cons(progression, skippedElement);
};

export default () => {
  startGameEngine('What number is missing in the progression?', getProgression);
};
