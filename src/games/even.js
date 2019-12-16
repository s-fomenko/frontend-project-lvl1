import getRandomInt from '../common';
import game from '..';

const termsEven = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const data = {};
  data.type = 'even';
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;
  data.check = isEven(data.num);

  return data;
};

export default () => game(brainEven, termsEven);
