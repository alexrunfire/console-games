#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

const name = engine.start('Answer "yes" if the number is even, otherwise answer "no".');
engine.cycle(name, engine.getRandomNum(0, 100), engine.isEven);
