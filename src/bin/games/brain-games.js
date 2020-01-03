#!/usr/bin/env node
/* eslint-disable no-console */

import engine from '../..';

engine.welcome();
console.log();
console.log(`Hello, ${engine.getName()}!`);
