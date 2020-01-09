import { start, cycle } from '..';

import { getRandomNum } from '../utils';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const name = start('Answer "yes" if the number is even, otherwise answer "no".');
  cycle(name, getRandomNum(0, 100), isEven);
};
