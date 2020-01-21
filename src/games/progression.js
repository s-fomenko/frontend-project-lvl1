import getRandomInt from '../common';
import game from '..';

const termsProgression = 'What number is missing in the progression?';
const progressionLength = 10;
const randomIndex = getRandomInt(0, progressionLength - 1);

const createProgression = (start, step) => {
  let currentItem = start;
  let progression = '';

  for (let j = 0; j < progressionLength; j += 1) {
    currentItem += step;
    progression = `${progression + currentItem} `;
  }

  return progression.substr(0, progression.length - 1);
};

const getAnswer = (progression) => {
  const result = progression.split(' ');

  return Number(result[randomIndex]);
};

const hideNumber = (progression) => {
  const result = progression.split(' ');
  result[randomIndex] = '..';

  return result.join(' ');
};

const createProgressionGame = () => {
  const start = getRandomInt(1, 99);
  const step = getRandomInt(1, 9);
  const progression = createProgression(start, step);
  const data = {};
  data.question = hideNumber(progression);
  data.result = String(getAnswer(progression));

  return data;
};

export default () => game(createProgressionGame, termsProgression);
