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
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

function isSolvableMaze(x,y,input){
  var initialPoint = input[x][y];
  console.log('Now in x: ' + x + ' , y: ' + y )
  if(initialPoint != '0'){
    console.log('Invalid position');
    return false;
  }
  if(initialPoint == 'E'){
    console.log('Invalid position');
    return true;
  }
  if((input.length - 1) >= (x + 1)){
    console.log('moving down')
    //we can move down
    return isSolvableMaze(x + 1, y, input);
  }
  if(input[x].length -1 >= y + 1){
    console.log('moving right')
    //we can move right
    return isSolvableMaze(x, y + 1, input);
  }
  return false;
}
