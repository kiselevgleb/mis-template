// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function pars(params) {
  try {
    return parseInt(params);
  } catch (error) {
    throw new Error('oops');
  }
}
