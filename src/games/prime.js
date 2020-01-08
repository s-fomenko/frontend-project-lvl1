import getRandomInt from '../common';
import game from '..';

const termsPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let j = 2; j <= num - 1; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};


const createPrimeGame = () => {
  const question = getRandomInt(1, 99);
  const data = {};
  data.question = question;
  data.result = isPrime(question) ? 'yes' : 'no';

  return data;
};

export default () => game(createPrimeGame, termsPrime);
