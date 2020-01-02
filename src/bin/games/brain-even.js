#!/usr/bin/env node
/* eslint-disable no-console */

import { start, cycle, getRandomNum } from '../..';

const trueAns = (num) => (num % 2 === 0 ? 'yes' : 'no');
const name = start('Answer "yes" if the number is even, otherwise answer "no".');
cycle(name, getRandomNum(0, 100), trueAns);
