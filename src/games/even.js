import { getRandomInt } from '../common';
import game from '..';

const brainEven = () => {
  const data = {};
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;

  return data;
};

export default () => game(brainEven, 'brainEven');
