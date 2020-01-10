import getRandomInt from '../common';
import game from '..';

const termsEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const createEvenGame = () => {
  const question = getRandomInt(1, 99);
  const data = {};
  data.question = question;
  data.result = isEven(question) ? 'yes' : 'no';

  return data;
};

export default () => game(createEvenGame, termsEven);
