#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

const name = engine.start('What number is missing in the progression?');
engine.cycle(name, engine.randomProgr, engine.findSkipped);
