import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);

export default (gameType, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${termsText}\n`);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const data = gameType();

    // TODO: Remove console.log
    console.log(data);

    const answer = question(`Question: ${data.question} `);

    console.log(`Your answer: ${answer}`);

    if (answer === String(data.result)) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.result}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
