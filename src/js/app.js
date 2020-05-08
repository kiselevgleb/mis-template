// TODO: write your code here
import sum from './basic';

export default function pars(params) {
  // if(isNaN(params)){
  if (!params.match(/^\d+$/)) {
    return "Error";
  } else {
    return parseInt(params);
  }
}
