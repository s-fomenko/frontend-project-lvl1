import terms from './config';
import { isEven, question } from './common';

export default (gameType, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(terms[termsText]);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameType();

    const answer = question(`Question: ${data.num} `);

    console.log(`Your answer: ${answer}`);

    if ((isEven(data.num) && answer === 'yes') || (!isEven(data.num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
