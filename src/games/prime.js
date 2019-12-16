import { getRandomInt } from '../common';
import game from '..';

const termsPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let j = num - 1; j >= 2; j -= 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};


const brainPrime = () => {
  const data = {};
  data.type = 'prime';
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;
  data.check = isPrime(data.num);

  return data;
};

export default () => game(brainPrime, termsPrime);
