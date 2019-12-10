import { getRandomInt, cons, isEven } from '../common';

const brainEven = (name) => {
  const data = {};
  data.num = getRandomInt(1, 99);
  data.answer = `Question: ${data.num} `;
  // data.check = (isEven(this.num) && this.answer === 'yes') || (!isEven(this.num) && this.answer === 'no');
  data.correct = 'Correct!';
  data.wrong = `'${data.answer}' is wrong answer ;(. Correct answer was '${data.answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`;

  return data;
};


export default cons(brainEven, 'brainEven');
