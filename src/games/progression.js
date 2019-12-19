import getRandomInt from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';
const progressionLength = 10;

const brainProgression = () => {
  const data = {};
  data.start = getRandomInt(1, 100);
  data.step = getRandomInt(1, 10);
  data.randomIndex = getRandomInt(0, 10);

  const createProgression = (a, b) => {
    let progressionStep = a;
    let progression = `${a} `;

    for (let j = 1; j < progressionLength; j += 1) {
      progressionStep += b;
      progression += `${progressionStep} `;
    }
    return progression.substr(0, progression.length - 1);
  };

  const getAnswer = (str) => {
    const strToArr = str.split(' ');
    return Number(strToArr[data.randomIndex]);
  };

  const hideNumber = (str) => {
    const strToArr = str.split(' ');
    strToArr[data.randomIndex] = '..';
    return strToArr.join(' ');
  };

  data.answer = hideNumber(createProgression(data.start, data.step));
  data.result = getAnswer(createProgression(data.start, data.step));

  return data;
};

export default () => game(brainProgression, termsProgression);
