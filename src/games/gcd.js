import getRandomInt from '../common';
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

const createGcdGame = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const data = {};
  data.question = `${num1} ${num2}`;
  data.result = findGcd(num1, num2);

  return data;
};

export default () => game(createGcdGame, termsGcd);
