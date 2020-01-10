import getRandomInt from '../common';
import game from '..';

const termsCalc = 'What is the result of the expression?';

const operations = [
  '+',
  '-',
  '*',
];

const getOperation = () => operations[getRandomInt(0, operations.length - 1)];

const createCalcGame = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const operation = getOperation();
  const data = {};
  data.question = `${num1} ${operation} ${num2}`;

  switch (operation) {
    case '+':
      data.result = String(num1 + num2);
      break;
    case '-':
      data.result = String(num1 - num2);
      break;
    case '*':
      data.result = String(num1 * num2);
      break;
    // no default
  }

  return data;
};

export default () => game(createCalcGame, termsCalc);
