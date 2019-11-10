import terms from './config';
import { question } from './common';

export default (gameType, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(terms[termsText]);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  gameType(name);
};
