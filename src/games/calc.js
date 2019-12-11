import { getRandomInt, cons } from '../common';

const brainCalc = () => {
  const data = {};
  data.num1 = getRandomInt(1, 100);
  data.num2 = getRandomInt(1, 100);
  data.type = getRandomInt(1, 4);
  // let result = 0;
  // let answer = '';

  switch (data.type) {
    case 1:
      data.answer = `Question: ${data.num1} + ${data.num2} `;
      data.result = data.num1 + data.num2;
      break;
    case 2:
      data.answer = `Question: ${data.num1} - ${data.num2} `;
      data.result = data.num1 - data.num2;
      break;
    default:
      data.answer = `Question: ${data.num1} * ${data.num2} `;
      data.result = data.num1 * data.num2;
  }
};

export default cons(brainCalc, 'brainCalc');
