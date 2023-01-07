'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// function diagonalDifference(arr) {
//   let right = [];
//   let left = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let n = 0; n < arr[i].length; n++) {
//       if (i == n) {
//         right.push(arr[i][n]);
//         let m = arr[i].length - 1 - n;
//         left.push(arr[i][m]);
//       }
//     }
//   }
//   const a = right.reduce((sum, ele) => sum + ele);
//   const b = left.reduce((sum, ele) => sum + ele);

//   if (a < b) {
//     return b - a;
//   } else return a - b;
// }
function diagonalDifference(arr) {
  let LtoRdiagonal = 0;
  let RtoLdiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr.length; n++) {
      if (i == n) {
        LtoRdiagonal += arr[i][n];
      }
      if (i + n == arr.length - 1) {
        RtoLdiagonal += arr[i][n];
      }
    }
  }
  return Math.abs(LtoRdiagonal - RtoLdiagonal);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
