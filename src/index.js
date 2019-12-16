import readlineSync from 'readline-sync';
import terms from './config';
import { isEven, isPrime } from './common';

const question = (text) => readlineSync.question(text);

export default (gameType, termsText) => {
  const checkType = termsText === 'brainEven' ? isEven : isPrime;

  console.log('Welcome to the Brain Games!');
  console.log(terms[termsText]);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameType();

    // TODO: Remove console
    console.log(data);

    const answer = question(data.answer);

    console.log(`Your answer: ${answer}`);

    if (termsText === 'brainEven' || termsText === 'brainPrime') {
      if ((checkType(data.num) && answer === 'yes') || (!checkType(data.num) && answer === 'no')) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
      }
    } else if (Number(answer) === data.result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
