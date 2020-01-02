#!/usr/bin/env node
/* eslint-disable no-console */

import isPrime from 'prime-number';

import { start, cycle, getRandomNum } from '../..';

const prime = (num) => (isPrime(num) ? 'yes' : 'no');
const name = start('Answer "yes" if given number is prime. Otherwise answer "no".');
cycle(name, getRandomNum(2, 1000), prime);
