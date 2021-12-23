/* https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true */


function staircase(n) {
  let container = '';
  let space = ' ';
  let hash = '#';
  for( let i = 1; i <= n; i++ ) {
      container = space.repeat(n-i);
      container += hash.repeat(i);
      console.log(container);
  }
}
