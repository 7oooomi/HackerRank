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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  if (s.includes('PM')) {
    if (s.substring(0, 2) == '12') {
      return s.substring(0, 8);
    } else return `${12 + Number(s.substring(0, 2))}` + s.substring(2, 8);
  }
  if (s.includes('AM')) {
    if (s.substring(0, 2) == '12') {
      return '00' + s.substring(2, 8);
    } else return s.substring(0, 8);
  }
}

// function timeConversion(s) {
//   if(s.includes('PM')) {
//       if(s.substring(0,2) == 12){
//           return s.substring(0,8)
//       }else return Number(s.substring(0,2))+ 12 + s.substring(2,8)
//   }if(s.includes('AM')) {
//       if(s.substring(0,2) == 12){
//           return '00' + s.substring(2,8)
//       }else return s.substring(0,8)
//   }
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
