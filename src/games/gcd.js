import { getRandomInt } from '../common';
import game from '..';

const termsGcd = 'Find the greatest common divisor of given numbers.';

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
  data.num1 = getRandomInt(1, 99);
  data.num2 = getRandomInt(1, 99);
  data.answer = `${data.num1} ${data.num2}`;
  data.result = findGcd(data.num1, data.num2);

  return data;
};

export default () => game(brainGcd, termsGcd);
