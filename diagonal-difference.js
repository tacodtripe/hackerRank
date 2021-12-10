/*https://www.hackerrank.com/challenges/diagonal-difference/problem */

function diagonalDifference(arr) {
  // Write your code here
  let diagonalOne = 0;
  let diagonalTwo = 0;
  for(let i = 0; i < arr.length ; i++) {
      diagonalOne += arr[i][i];
      diagonalTwo += arr[i][arr.length - i -1]
  } 
  return Math.abs(diagonalOne - diagonalTwo);
}