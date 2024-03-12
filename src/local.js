import { compare, calculateAverage } from './test.js';
const arr = [];
setInterval(() => {
  const stat = compare();
  // console.log(stat);
  arr.push(stat);
  if (arr.length > 1000) arr.shift();
  console.clear();
  calculateAverage(arr);
}, 10);
