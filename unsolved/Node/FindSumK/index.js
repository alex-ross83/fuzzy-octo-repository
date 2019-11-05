// Given a list of numbers, return wheter two numbers in the list sum an amount K
var input = [10, 15, 3, 7];
var k = 17;
var expectedResult = true;

var actual = findSumK(input, k);
if(actual == expectedResult){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

var input2 = [1, 4, 20, 3, 10, 5];
var k2 = 6;
var actual2 = findSumK(input2, k2);
if(actual2 == expectedResult){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

function findSumK(input, k){
    //TODO: Implement here
}
