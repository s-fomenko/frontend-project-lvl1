import { getRandomInt } from '../common';
import game from '..';

const termsCalc = 'What is the result of the expression?';
const numberOfOperations = 3;

const brainCalc = () => {
  const data = {};
  data.num1 = getRandomInt(1, 99);
  data.num2 = getRandomInt(1, 99);
  data.type = getRandomInt(1, numberOfOperations);

  switch (data.type) {
    case 1:
      data.question = `${data.num1} + ${data.num2}`;
      data.result = data.num1 + data.num2;
      break;
    case 2:
      data.question = `${data.num1} - ${data.num2}`;
      data.result = data.num1 - data.num2;
      break;
    default:
      data.question = `${data.num1} * ${data.num2}`;
      data.result = data.num1 * data.num2;
  }

  return data;
};

export default () => game(brainCalc, termsCalc);
