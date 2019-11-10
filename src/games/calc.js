import { getRandomInt, question } from '../common';

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const type = getRandomInt(1, 3);
    let result = 0;
    let answer = '';

    if (type === 1) {
      answer = question(`${num1} + ${num2} `);
      result = num1 + num2;
    } else if (type === 2) {
      answer = question(`${num1} - ${num2} `);
      result = num1 - num2;
    } else {
      answer = question(`${num1} * ${num2} `);
      result = num1 * num2;
    }
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
