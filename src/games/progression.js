import { getRandomInt, createProgression } from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';

const brainProgression = () => {
  const data = {};
  data.start = getRandomInt(1, 99);
  data.step = getRandomInt(1, 9);
  data.randomIndex = getRandomInt(0, 9);

  const getAnswer = (str) => {
    const strToArr = str.split(' ');
    return Number(strToArr[data.randomIndex]);
  };

  const hideNumber = (str) => {
    const strToArr = str.split(' ');
    strToArr[data.randomIndex] = '..';
    return strToArr.join(' ');
  };

  data.question = hideNumber(createProgression(data.start, data.step));
  data.result = getAnswer(createProgression(data.start, data.step));

  return data;
};

export default () => game(brainProgression, termsProgression);
