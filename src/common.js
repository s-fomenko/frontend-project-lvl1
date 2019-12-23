export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createProgression = (a, b) => {
  const progressionLength = 10;
  let progressionStep = a;
  let progression = `${a} `;

  for (let j = 1; j < progressionLength; j += 1) {
    progressionStep += b;
    progression = `${progression + progressionStep} `;
  }
  return progression.substr(0, progression.length - 1);
};
