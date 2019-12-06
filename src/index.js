import terms from './config';
import { question, isEven, isPrime } from './common';

export default (gameType, termsText) => {
  const checkType = termsText === 'brainEven' ? isEven : isPrime;

  console.log('Welcome to the Brain Games!');
  console.log(terms[termsText]);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameType();

    const answer = question(data.answer);

    console.log(`Your answer: ${answer}`);

    if ((checkType(data.num) && answer === 'yes') || (!checkType(data.num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
