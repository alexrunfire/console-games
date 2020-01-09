export const getRandomNum = (min, max) => () => Math.floor(Math.random() * (max - min) + min);

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
