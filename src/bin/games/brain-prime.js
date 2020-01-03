#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

const name = engine.start('Answer "yes" if given number is prime. Otherwise answer "no".');
engine.cycle(name, engine.getRandomNum(2, 1000), engine.prime);
