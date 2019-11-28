import { getRandomInt, cons } from '../common';

const brainEven = () => ({ num: getRandomInt(1, 99) });

export default cons(brainEven, 'brainEven');
