#!/usr/bin/env node
/* eslint-disable no-console */

import { welcome, getName } from '../..';

welcome();
console.log();
console.log(`Hello, ${getName()}!`);
