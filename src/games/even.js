import {cons, getRandomInt,} from '../common';

const brainEven = () => {
  return {
    num: getRandomInt(1, 99),
  };
};

export default cons(brainEven, 'brainEven');
