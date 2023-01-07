'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  let maxarr = arr.shift();
  arr.map((num) => (max += num));

  console.log(min, max);
}
// function miniMaxSum(arr) {
//   let mini = 0
//   let max = 0
//   const smallOrder = arr.sort(function(a,b) {
//       return a-b
//   })
//   for(let i = 0; i < 4; i++) {
//       mini += smallOrder[i]
//   }
//   for(let i =1; i < arr.length; i++){
//       max += smallOrder[i]
//   }
//   console.log(mini ,max)

// }

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
