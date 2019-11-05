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

//with division allowed.....
//O(2N) == O(N)
function calculateProducsExceptCurrent(input){
  var res = [];
  var totalProduct = 1;
  //calculate the total product
  for(var i = 0; i < input.length; i++){
    totalProduct = totalProduct * input[i];
  }
  //populate the result array by diving each value
  for(var i = 0; i < input.length; i++){
    res.push(totalProduct / input[i]);
  }
  return res;
}

//No division operation allowed
// keep substracting divisor from dividend, until dividend is zero or less than divisor
// most intensive would be: for each element, iterate over the rest of the elements: O(n^2)
function calculateProducsExceptCurrent_NoDivision(input){
  var res = [];
  var totalProduct = 1;
  //calculate the total product
  for(var i = 0; i < input.length; i++){
    totalProduct = totalProduct * input[i];
  }
  //populate the result array by diving each value
  for(var i = 0; i < input.length; i++){
    var timesSubstracted = 0;
    var divisor = input[i];
    var dividend = totalProduct;
    while(divisor <= dividend){
      dividend = dividend - divisor;
      timesSubstracted++;
    }
    res.push(timesSubstracted);
  }
  return res;
}
