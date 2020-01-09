import gcd from 'greatest-common-divisor';

import { start, cycle } from '..';

import { getRandomNum, getFirstNum, getSecondNum } from '../utils';

const twoNumForGCD = () => `${getRandomNum(2, 101)()} ${getRandomNum(2, 101)()}`;

const getGcd = (expression) => {
  const f = Number(getFirstNum(expression));
  const s = Number(getSecondNum(expression));
  return String(gcd(f, s));
};
export default () => {
  const name = start('Find the greatest common divisor of given numbers.');
  cycle(name, twoNumForGCD, getGcd);
};
