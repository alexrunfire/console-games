#!/usr/bin/env node
/* eslint-disable no-console */

import gcd from 'greatest-common-divisor';

import {
  start, cycle, getRandomNum, getFirstNum, getSecondNum,
} from '../..';

const getGcd = (expression) => {
  const f = Number(getFirstNum(expression));
  const s = Number(getSecondNum(expression));
  return String(gcd(f, s));
};
const twoRandomNum = () => `${getRandomNum(2, 101)()} ${getRandomNum(2, 101)()}`;
const name = start('Find the greatest common divisor of given numbers.');
cycle(name, twoRandomNum, getGcd);
