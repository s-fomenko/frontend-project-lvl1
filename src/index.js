import readlineSync from 'readline-sync';

const askQuestion = (text) => readlineSync.question(text);
const numberOfRounds = 3;

export default (getGameData, termsText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${termsText}\n`);

  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = getGameData();

    const answer = askQuestion(`Question: ${data.question} `);

    console.log(`Your answer: ${answer}`);

    if (answer === data.result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.result}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
