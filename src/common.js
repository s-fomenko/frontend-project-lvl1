import readlineSync from 'readline-sync';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const question = (text) => readlineSync.question(text);

export const answerCheck = (answer, result, name) => {
  // console.log(`Your answer: ${answer}`);

  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
  }
};
