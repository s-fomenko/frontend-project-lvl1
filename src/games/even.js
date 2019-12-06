import { getRandomInt, cons, isEven } from '../common';

const brainEven = (name) => ({
  num: getRandomInt(1, 99),
  answer: `Question: ${this.num} `,
  result: (isEven(this.num) && this.answer === 'yes') || (!isEven(this.num) && this.answer === 'no') ? 'Correct!' : `'${this.answer}' is wrong answer ;(. Correct answer was '${this.answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`,
});


export default cons(brainEven, 'brainEven');
