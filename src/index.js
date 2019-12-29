/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain-Games!');
export const getName = () => readlineSync.question('May I have your name? ');
export const start = (phrase) => {
  console.log();
  welcome();
  console.log(`${phrase}\n`);
  const name = getName();
  console.log(`Hello, ${name}!\n`);
  return name;
};
export const reply = (answer, expression, correctRes) => {
  if (answer === correctRes(expression)) {
    console.log('Correct!');
    return true;
  }
  return false;
};
export const cycle = (name, funcForRandom, correctRes, counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const expression = funcForRandom;
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  return reply(answer, expression, correctRes) ? cycle(counter + 1) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctRes(expression)}'.\nLet's try again, ${name}!`);
};
