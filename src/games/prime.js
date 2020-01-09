import isPrime from 'prime-number';

import { start, cycle } from '..';

import { getRandomNum } from '../utils';

const prime = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => {
  const name = start('Answer "yes" if given number is prime. Otherwise answer "no".');
  cycle(name, getRandomNum(2, 1000), prime);
};
