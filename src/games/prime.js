import { getRandomInt, cons } from '../common';

const brainPrime = () => ({ num: getRandomInt(1, 99) });

export default cons(brainPrime, 'brainPrime');
