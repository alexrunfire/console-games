#!/usr/bin/env node

import { welcome, getName } from '..';

welcome();
console.log();
console.log(`Hello, ${getName()}!`);
