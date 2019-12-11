import { getRandomInt, cons } from '../common';

const brainEven = () => {
  const data = {};
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;

  return data;
};

export default cons(brainEven, 'brainEven');
