#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { welcome, getName } from '..';

const trueAns = (num) => (num % 2 === 0 ? 'yes' : 'no');
console.log();
welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = getName();
console.log(`Hello, ${name}!\n`);
const block = (counter) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const getRandomNum = (maxNumber) => Math.floor(Math.random() * maxNumber);
  const number = getRandomNum(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const result = (boolean, count = 0) => {
    if (boolean === true) {
      console.log('Correct!');
      return block(count);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAns(number)}'.\nLet's try again, ${name}!`);
    return block(count);
  };
  const check = (ans) => {
    if ((ans === 'no') && (number % 2 !== 0)) {
      return result(true, counter + 1);
    }
    if ((ans === 'yes') && (number % 2 === 0)) {
      return result(true, counter + 1);
    }
    return result(false);
  };
  return check(answer);
};
block(0);
