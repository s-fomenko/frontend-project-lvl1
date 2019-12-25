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
  const data = {};
  data.num1 = getRandomInt(1, 99);
  data.num2 = getRandomInt(1, 99);

  switch (getOperation()) {
    case 'addition':
      data.question = `${data.num1} + ${data.num2}`;
      data.result = data.num1 + data.num2;
      break;
    case 'subtraction':
      data.question = `${data.num1} - ${data.num2}`;
      data.result = data.num1 - data.num2;
      break;
    case 'multiplication':
      data.question = `${data.num1} * ${data.num2}`;
      data.result = data.num1 * data.num2;
      break;
    // no default
  }

  return data;
};

export default () => game(brainCalc, termsCalc);
