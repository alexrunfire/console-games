/* eslint-disable no-console */

import readlineSync from 'readline-sync';

import gcd from 'greatest-common-divisor';

import isPrime from 'prime-number';

// Common used functions

export const getRandomNum = (min, max) => () => Math.floor(Math.random() * (max - min) + min);

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

const reply = (answer, expression, correctRes) => {
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
  const expression = funcForRandom();
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  return reply(answer, expression, correctRes) ? cycle(name, funcForRandom, correctRes, counter + 1) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctRes(expression)}'.\nLet's try again, ${name}!`);
};

// The function is used in brain-even

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// Functions is used in brain-calc

export const getSecondNum = (expression) => {
  let secondNum = '';
  for (let i = expression.length - 1; expression[i] !== ' '; i -= 1) {
    secondNum = expression[i] + secondNum;
  }
  return secondNum;
};

export const getFirstNum = (expression) => {
  let firstNum = '';
  for (let i = 0; expression[i] !== ' '; i += 1) {
    firstNum += expression[i];
  }
  return firstNum;
};

export const getCalc = (expression) => {
  const firstNum = Number(getFirstNum(expression));
  const secondNum = Number(getSecondNum(expression));
  const sign = expression[String(firstNum).length + 1];
  switch (sign) {
    case '+':
      return String(firstNum + secondNum);
    case '-':
      return String(firstNum - secondNum);
    case '*':
      return String(firstNum * secondNum);
    default:
  }
  return false;
};

const getRandomSign = () => {
  switch (getRandomNum(0, 3)()) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
  }
  return false;
};

export const getTwoRandomNum = () => `${getRandomNum(0, 100)()} ${getRandomSign()} ${getRandomNum(0, 100)()}`;

// Functions is used in brain-gcd

export const twoNumForGCD = () => `${getRandomNum(2, 101)()} ${getRandomNum(2, 101)()}`;

export const getGcd = (expression) => {
  const f = Number(getFirstNum(expression));
  const s = Number(getSecondNum(expression));
  return String(gcd(f, s));
};

// Functions is used in brain-progression

const outNum = (progression, partToSkip) => {
  if (partToSkip.length === 0) {
    const progr = progression.substring(3, progression.length - 1);
    const first = Number(getFirstNum(progr));
    const last = Number(getSecondNum(progr));
    return String(first - ((last - first) / 8));
  }
  const progr = progression.substring(0, partToSkip.length - 1);
  const first = Number(getFirstNum(progr));
  const last = Number(getSecondNum(progr));
  return String(last + (last - first) / 8);
};
const inNum = (progression, partToSkip) => {
  const leftPart = ` ${partToSkip.substring(0, partToSkip.length - 1)}`;
  const rightPart = `${progression.substring(partToSkip.length + 3, progression.length - 1)} `;
  const left = Number(getSecondNum(leftPart));
  const right = Number(getFirstNum(rightPart));
  return String((left + right) / 2);
};
export const findSkipped = (progression) => {
  let partToSkip = '';
  for (let i = 0; progression[i] !== '.'; i += 1) {
    partToSkip += progression[i];
  }
  const outInLeft = partToSkip.length === 0;
  const outInRight = partToSkip.length + 3 === progression.length;
  return outInLeft || outInRight ? outNum(progression, partToSkip) : inNum(progression, partToSkip);
};
export const randomProgr = () => {
  const first = getRandomNum(0, 100)();
  const diff = getRandomNum(1, 11)();
  const skippedEl = getRandomNum(1, 11)();
  let progression = '';
  for (let i = 1; i < 11; i += 1) {
    if (i === skippedEl) {
      progression += '.. ';
    } else {
      progression = `${progression}${first + diff * (i - 1)} `;
    }
  }
  return progression;
};

// Function is used in brain-prime

export const prime = (num) => (isPrime(num) ? 'yes' : 'no');
