import { getRandomInt, cons } from '../common';
import game from '..';

const brainPrime = () => {
  const data = {};
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;

  return data;
};

export default () => game(brainPrime, 'brainPrime');
