// Given an array of strings that represent a map
// given a starting position (i,j) and only moving to the right
// or downward over positions with value 0, determine if its possible
// to reach the end of the maze, which value is E. You cannot move to
// positions that have a 1 as these represent the walls of the maze.

var input = [
  ['0', '1', '1', '1'],
  ['0', '0', '1', '1'],
  ['1', '0', '1', '1'],
  ['1', '0', 'E', '1'],
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
  console.log('Now in x: ' + x + ' , y: ' + y + ": " + initialPoint)
  if(initialPoint == 'E'){
    console.log('Solved!');
    return true;
  }
  //Can move down?
  if((x + 1) < input.length){
    console.log('checking moving down')
    //we can move down
    if(isSolvableMaze(x + 1, y, input)){
      return true;
    }
  }
  //can we move right?
  if((y + 1) < input[x].length){
    console.log('moving right')
    //we can move right
    if(isSolvableMaze(x, y + 1, input)){
      return true;
    }
  }
  return false;
}
