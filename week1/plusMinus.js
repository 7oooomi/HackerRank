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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let posi = 0;
  let nega = 0;
  let zero = 0;
  arr.map((num) => {
    if (num < 0) {
      nega += 1;
    }
    if (num > 0) {
      posi += 1;
    }
    if (num == 0) {
      zero += 1;
    }
  });

  console.log(`${Number.parseFloat(posi / arr.length).toFixed(6)}
${Number.parseFloat(nega / arr.length).toFixed(6)}
${Number.parseFloat(zero / arr.length).toFixed(6)}`);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
