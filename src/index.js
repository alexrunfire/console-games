import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const numbersOfCycles = 3;

export default (gameDescription, getQuestionAndAnswer) => {
  console.log();
  console.log('Welcome to the Brain-Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const showQuestionAndCheckAnswer = (counter = 0) => {
    if (counter === numbersOfCycles) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(questionAndAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      showQuestionAndCheckAnswer(counter + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  };

  showQuestionAndCheckAnswer();
};
