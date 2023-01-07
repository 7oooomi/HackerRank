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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  return a.filter((num) => a.indexOf(num) == a.lastIndexOf(num));
}

// function lonelyinteger(a) {
//   const itemCount = {}
//   for(let i = 0; i < a.length;i++) {
//       if(itemCount[a[i]]){
//          itemCount[a[i]] = itemCount[a[i]] + 1
//       } else {
//           itemCount[a[i]] = 1
//       }
//   }
//   for(const key in itemCount) {
//       if(itemCount[key] == 1) {
//           return key
//       }
//   }
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + '\n');

  ws.end();
}
