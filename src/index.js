import readlineSync from 'readline-sync';

export const start = (phrase) => {
  console.log();
  console.log('Welcome to the Brain-Games!');
  console.log(`${phrase}\n`);
  const name = readlineSync.question('May I have your name? ');
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
