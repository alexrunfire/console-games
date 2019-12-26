#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { welcome, getName } from '..';

const trueAns = (num) => (num % 2 === 0 ? 'yes' : 'no');
console.log();
welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = getName();
console.log(`Hello, ${name}!\n`);
const cycle = (counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const getRandomNum = (maxNumber) => Math.floor(Math.random() * maxNumber);
  const number = getRandomNum(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (((answer === 'yes') && (number % 2 === 0)) || ((answer === 'no') && (number % 2 !== 0))) {
    console.log('Correct!');
    return cycle(counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
  return cycle();
};
cycle();
