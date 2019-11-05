// For any given array of integers
// return a similar array which values consist
// of the product of the rest of the elements of the array
/// except the corresponding element's index

var input = [1,2,3,4,5];
var expectedResult = [120, 60, 40, 30, 24];

var actual = calculateProducsExceptCurrent_NoDivision(input);
if(arraysEqual(actual, expectedResult)){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

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

function calculateProducsExceptCurrent(input){
  //TODO: Implement here
}
