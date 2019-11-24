import { answerCheck, getRandomInt, question } from '../common';

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const type = getRandomInt(1, 4);
    let result = 0;
    let answer = '';

    if (type === 1) {
      answer = question(`Question: ${num1} + ${num2} `);
      result = num1 + num2;
    } else if (type === 2) {
      answer = question(`Question: ${num1} - ${num2} `);
      result = num1 - num2;
    } else {
      answer = question(`Question: ${num1} * ${num2} `);
      result = num1 * num2;
    }

    console.log(`Your answer: ${answer}`);

    answerCheck(answer, result, name);
  }
  return console.log(`Congratulations, ${name}!`);
};
