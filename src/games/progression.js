import getRandomInt from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';
const progressionLength = 10;
const randomIndex = getRandomInt(0, progressionLength - 1);

const createProgression = (start, step) => {
  let progressionStep = start;
  let progression = '';

  for (let j = 0; j < progressionLength; j += 1) {
    progressionStep += step;
    progression = `${progression + progressionStep} `;
  }
  return progression.substr(0, progression.length - 1);
};

const getAnswer = (string) => {
  const array = string.split(' ');
  return Number(array[randomIndex]);
};

const hideNumber = (string) => {
  const array = string.split(' ');
  array[randomIndex] = '..';
  return array.join(' ');
};

const createProgressionGame = () => {
  const start = getRandomInt(1, 99);
  const step = getRandomInt(1, 9);
  const data = {};

  data.question = hideNumber(createProgression(start, step));
  data.result = String(getAnswer(createProgression(start, step)));

  return data;
};

export default () => game(createProgressionGame, termsProgression);
