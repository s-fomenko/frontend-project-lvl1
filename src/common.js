export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const cons = (type, terms) => (func) => func(type, terms);

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let j = num - 1; j >= 2; j -= 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};
