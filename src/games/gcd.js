import { getRandomInt, question, cons } from '../common';
import game from '..';

const brainGcd = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    let result = 0;
    let answer = '';

    const findGcd = (a, b) => {
      let n1 = a;
      let n2 = b;
      while (n1 !== n2) {
        if (n1 > n2) {
          n1 -= n2;
        } else {
          n2 -= n1;
        }
      }
      return n1;
    };

    answer = question(`Question: ${num1} ${num2} `);
    result = findGcd(num1, num2);

    console.log(`Your answer: ${answer}`);

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default cons(brainGcd, 'brainGcd');
