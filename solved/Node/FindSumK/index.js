// Given a list of numbers, return wheter two numbers in the list sum an amount K
var input = [1,2,3,4,5,6];
var k = 10;
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




//var input2 = [1, 4, 20, 3, 10, 5];
//var k2 = 6;
//var actual2 = findSumK(input2, k2);
//if(actual2 == expectedResult){
  //console.log('Success!');
//} else{
  //console.log('FailSauce!');
  //console.log('Expected:');
  //console.log(expectedResult);
  //console.log('But was:');
  //console.log(actual);
//}

//for every element, calculate how much is left to reach the sum k and store that original value
//[10,15,3,7]
function findSumK(input, k){
  var mapping = {};  //declare map to store remainder
  var remaining = -1; //initialize variable
  for(var i = 0; i < input.length; i ++){ //iterate over each element
    //if the current value was already calculated as the remainder of a previous element
    //we are done
    console.log('mapping[' + input[i] + '] is :' + mapping[input[i]]);
    if(mapping[input[i]] != null ){
      return true;
    } else{
      remaining = k - input[i]; //get the remainder we need to find
      console.log('Remaining is: ' + remaining);
      //else store the remainder of this element's operation
      mapping[remaining] = true;
    }
  }
  return false;
}
