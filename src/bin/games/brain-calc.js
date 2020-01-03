#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

const name = engine.start('What is the result of the expression?');
engine.cycle(name, engine.getTwoRandomNum, engine.getCalc);
