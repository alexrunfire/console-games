import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain-Games!\n');
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
};
