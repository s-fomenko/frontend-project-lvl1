import getRandomInt from '../common';
import game from '..';

const termsCalc = 'What is the result of the expression?';

const operations = [
  'addition',
  'subtraction',
  'multiplication',
];

const getOperation = () => operations[getRandomInt(0, operations.length - 1)];

const createCalcGame = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const data = {};

  switch (getOperation()) {
    case 'addition':
      data.question = `${num1} + ${num2}`;
      data.result = num1 + num2;
      break;
    case 'subtraction':
      data.question = `${num1} - ${num2}`;
      data.result = num1 - num2;
      break;
    case 'multiplication':
      data.question = `${num1} * ${num2}`;
      data.result = num1 * num2;
      break;
    // no default
  }

  return data;
};

export default () => game(createCalcGame, termsCalc);
