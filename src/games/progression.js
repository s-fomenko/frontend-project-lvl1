import { getRandomInt, createProgression } from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';

const brainProgression = () => {
  const start = getRandomInt(1, 99);
  const step = getRandomInt(1, 9);
  const randomIndex = getRandomInt(0, 9);
  const data = {};

  const getAnswer = (str) => {
    const strToArr = str.split(' ');
    return Number(strToArr[randomIndex]);
  };

  const hideNumber = (str) => {
    const strToArr = str.split(' ');
    strToArr[randomIndex] = '..';
    return strToArr.join(' ');
  };

  data.question = hideNumber(createProgression(start, step));
  data.result = getAnswer(createProgression(start, step));

  return data;
};

export default () => game(brainProgression, termsProgression);
