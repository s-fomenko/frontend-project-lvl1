import { getRandomInt } from '../common';
import game from '..';

const termsGcd = 'Find the greatest common divisor of given numbers.\n';

const findGcd = (a, b) => {
  let n1 = a;
  let n2 = b;
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
};

const brainGcd = () => {
  const data = {};
  data.num1 = getRandomInt(1, 100);
  data.num2 = getRandomInt(1, 100);
  data.answer = `Question: ${data.num1} ${data.num2} `;
  data.result = findGcd(data.num1, data.num2);

  return data;
};

export default () => game(brainGcd, termsGcd);
