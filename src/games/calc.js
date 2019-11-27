import { getRandomInt, question, cons } from '../common';

const brainCalc = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const type = getRandomInt(1, 4);
    let result = 0;
    let answer = '';

    switch (type) {
      case 1:
        answer = question(`Question: ${num1} + ${num2} `);
        result = num1 + num2;
        break;
      case 2:
        answer = question(`Question: ${num1} - ${num2} `);
        result = num1 - num2;
        break;
      default:
        answer = question(`Question: ${num1} * ${num2} `);
        result = num1 * num2;
    }

    console.log(`Your answer: ${answer}`);

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default cons(brainCalc, 'brainCalc');
