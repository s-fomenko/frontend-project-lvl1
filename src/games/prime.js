import { getRandomInt, question } from '../common';

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 99);
    const answer = question(`Question: ${num} `);

    const isprime = (n) => {
      if (n < 2) {
        return false;
      }

      for (let j = n - 1; j >= 2; j -= 1) {
        if (n % j === 0) {
          return false;
        }
      }
      return true;
    };

    console.log(`Your answer: ${answer}`);

    if ((isprime(num) && answer === 'yes') || (!isprime(num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
