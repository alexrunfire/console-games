#!/usr/bin/env node
/* eslint-disable no-console */

import {
  start, cycle, getRandomNum, getFirstNum, getSecondNum,
} from '../..';

const outNum = (progression, partToSkip) => {
  if (partToSkip.length === 0) {
    const progr = progression.substring(3, progression.length - 1);
    const first = Number(getFirstNum(progr));
    const last = Number(getSecondNum(progr));
    return String(first - ((last - first) / 8));
  }
  const progr = progression.substring(0, partToSkip.length - 1);
  const first = Number(getFirstNum(progr));
  const last = Number(getSecondNum(progr));
  return String(last + (last - first) / 8);
};
const inNum = (progression, partToSkip) => {
  const leftPart = ` ${partToSkip.substring(0, partToSkip.length - 1)}`;
  const rightPart = `${progression.substring(partToSkip.length + 3, progression.length - 1)} `;
  const left = Number(getSecondNum(leftPart));
  const right = Number(getFirstNum(rightPart));
  return String((left + right) / 2);
};
const findSkipped = (progression) => {
  let partToSkip = '';
  for (let i = 0; progression[i] !== '.'; i += 1) {
    partToSkip += progression[i];
  }
  const outInLeft = partToSkip.length === 0;
  const outInRight = partToSkip.length + 3 === progression.length;
  return outInLeft || outInRight ? outNum(progression, partToSkip) : inNum(progression, partToSkip);
};
const randomProgr = () => {
  const first = getRandomNum(0, 100)();
  const diff = getRandomNum(1, 11)();
  const skippedEl = getRandomNum(1, 11)();
  let progression = '';
  for (let i = 1; i < 11; i += 1) {
    if (i === skippedEl) {
      progression += '.. ';
    } else {
      progression = `${progression}${first + diff * (i - 1)} `;
    }
  }
  return progression;
};
const name = start('What number is missing in the progression?');
cycle(name, randomProgr, findSkipped);
