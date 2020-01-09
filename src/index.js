import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);
const numberOfRounds = 3;

export default (getGameData, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${termsText}\n`);

  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = getGameData();
    // TODO: Удалить console.log
    console.log(data);

    const answer = question(`Question: ${data.question} `);

    console.log(`Your answer: ${answer}`);

    if (answer === data.result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.result}'. Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
