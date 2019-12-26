import getRandomInt from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';
const createProgression = (a, b) => {
  const progressionLength = 10;
  let progressionStep = a;
  let progression = `${a} `;

  for (let j = 1; j < progressionLength; j += 1) {
    progressionStep += b;
    progression = `${progression + progressionStep} `;
  }
  return progression.substr(0, progression.length - 1);
};

const brainProgression = () => {
  const start = getRandomInt(1, 99);
  const step = getRandomInt(1, 9);
  const randomIndex = getRandomInt(0, 9);
  const data = {};

  const getAnswer = (str) => {
    const arr = str.split(' ');
    return Number(arr[randomIndex]);
  };

  const hideNumber = (str) => {
    const arr = str.split(' ');
    arr[randomIndex] = '..';
    return arr.join(' ');
  };

  data.question = hideNumber(createProgression(start, step));
  data.result = getAnswer(createProgression(start, step));

  return data;
};

export default () => game(brainProgression, termsProgression);
