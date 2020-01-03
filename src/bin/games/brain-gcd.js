#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

const name = engine.start('Find the greatest common divisor of given numbers.');
engine.cycle(name, engine.twoNumForGCD, engine.getGcd);
