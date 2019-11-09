import readlineSync from 'readline-sync';

// brain-games
export const brainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// brain-even
const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

const quiz = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(1, 99);
    const answer = readlineSync.question(`Question: ${question} `);
    const isEven = question % 2 === 0;

    console.log(`Your answer: ${answer}`);

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  quiz(name);
};
