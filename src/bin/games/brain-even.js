#!/usr/bin/env node
/* eslint-disable no-console */

import { start, cycle } from '../..';

const trueAns = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandomNum = (maxNumber) => Math.floor(Math.random() * maxNumber);
const name = start('Answer "yes" if the number is even, otherwise answer "no".');
cycle(name, getRandomNum(100), trueAns);
