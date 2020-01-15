import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const showQuestion = (name, getQuestionOrAnswer, counter = 0) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const questionAndAnswer = getQuestionOrAnswer();
  const question = car(questionAndAnswer);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionAndAnswer);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return showQuestion(name, getQuestionOrAnswer, counter + 1);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
};
export default (gameDescription, getRandom) => {
  console.log();
  console.log('Welcome to the Brain-Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return showQuestion(userName, getRandom);
};
