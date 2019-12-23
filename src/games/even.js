import { getRandomInt } from '../common';
import game from '..';

const termsEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const data = {};
  data.num = getRandomInt(1, 99);
  data.answer = data.num;
  data.result = isEven(data.num) ? 'yes' : 'no';

  return data;
};

export default () => game(brainEven, termsEven);
