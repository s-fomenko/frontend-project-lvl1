import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);

export default (gameType, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${termsText}\n`);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameType();

    const answer = question(data.answer);

    console.log(`Your answer: ${answer}`);

    if (data.type === 'even' || data.type === 'prime') {
      if ((data.check && answer === 'yes') || (!data.check && answer === 'no')) {
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
