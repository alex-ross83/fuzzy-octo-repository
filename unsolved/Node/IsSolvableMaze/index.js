// Given an array of strings that represent a map
// given a starting position (i,j) and only moving to the right
// or downward over positions with value 0, determine if its possible
// to reach the end of the maze, which value is E. You cannot move to
// positions that have a 1 as these represent the walls of the maze.

var input = [
  ['0', '1', '1', '1'],
  ['0', '0', '1', '1'],
  ['1', '0', '1', '1'],
  ['1', '0', '0', 'E'],
];

var expectedResult = true;

var actual = isSolvableMaze(0, 0, input);

if(actual == expectedResult){
  console.log('Success!');
} else{
  console.log('Expected: ' + expectedResult);
  console.log('But was:' + actual);
}

function isSolvableMaze(x,y,input){
  //TODO: Implement here....
  return false;
}
