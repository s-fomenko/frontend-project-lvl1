import { getRandomInt, question } from '../common';
import game from '..';

const brainProgression = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const start = getRandomInt(1, 100);
    const step = getRandomInt(1, 10);
    const randomIndex = getRandomInt(0, 10);
    let result = 0;
    let answer = '';

    const createProgression = (a, b) => {
      let progressionStep = a;
      let progression = `${a} `;

      for (let j = 1; j < 10; j += 1) {
        progressionStep += b;
        progression += `${progressionStep} `;
      }
      return progression.substr(0, progression.length - 1);
    };

    const getAnswer = (str) => {
      const strToArr = str.split(' ');
      return Number(strToArr[randomIndex]);
    };

    const hideNumber = (str) => {
      const strToArr = str.split(' ');
      strToArr[randomIndex] = '..';
      return strToArr.join(' ');
    };

    answer = question(`Question: ${hideNumber(createProgression(start, step))} `);
    result = getAnswer(createProgression(start, step));

    console.log(`Your answer: ${answer}`);

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game(brainProgression, 'brainProgression');
