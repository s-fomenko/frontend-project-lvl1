import readlineSync from 'readline-sync';

export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const question = (text) => readlineSync.question(text);

export const cons = (type, terms) => (func) => func(type, terms);

export const isEven = (num) => num % 2 === 0;
