// Given a list of numbers, return wheter two numbers in the list sum an amount K
var input = [2,4,6,8,10,2,6,10];
var expectedResult = ['4','8'];

var actual = findUniqueElements(input);
if(arraysEqual(actual, expectedResult)){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

//Ignore, utility code to test array equality
function arraysEqual(arr1, arr2) {
    if(arr1 == null || arr2 == null
      || Object.prototype.toString.call( arr1 ) !== '[object Array]'
      || Object.prototype.toString.call( arr2 ) !== '[object Array]'
      || arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function findUniqueElements(arr) {
  //TODO: Implement here
}
