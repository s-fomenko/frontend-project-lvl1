import getRandomInt from '../common';
import game from '..';

const termsEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = getRandomInt(1, 99);
  const data = {};
  data.question = num;
  data.result = isEven(num) ? 'yes' : 'no';

  return data;
};

export default () => game(brainEven, termsEven);
