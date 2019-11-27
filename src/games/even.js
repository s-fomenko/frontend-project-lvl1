import {
  getRandomInt,
  question,
  cons,
  isEven,
} from '../common';

const brainEven = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 99);
    const answer = question(`Question: ${num} `);

    console.log(`Your answer: ${answer}`);

    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default cons(brainEven, 'brainEven');
