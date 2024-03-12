import { compare, calculateAverage } from './test.js';
const arr = [];
setInterval(() => {
  const stat = compare();
  // console.log(stat);
  arr.push(stat);
  if (arr.length > 1000) arr.shift();
  calculateAverage(arr);
}, 10);
