import { getRandomInt } from '../common';
import game from '..';

const termsCalc = 'What is the result of the expression?';
const numberOfOperations = 3;

const getOperation = () => {
  const type = getRandomInt(1, numberOfOperations);
  let operation = '';

  switch (type) {
    case 1:
      operation = 'addition';
      break;
    case 2:
      operation = 'subtraction';
      break;
    case 3:
      operation = 'multiplication';
      break;
    // no default
  }

  return operation;
};

const brainCalc = () => {
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

export default () => game(brainCalc, termsCalc);
