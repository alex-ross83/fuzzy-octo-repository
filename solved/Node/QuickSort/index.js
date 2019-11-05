var input = [10,9,8,7,6,5,4,3,2,1];
var expectedResult = [1,2,3,4,5,6,7,8,9,10];

var actual = quickSort(input);
if(actual == expectedResult){
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

function quickSort(input){
  return innerQuickSort(input, 0, input.lenght - 1);
}

function innerQuickSort(input, left, right){
  var len = input.length;
  var pivot = 0;
  var paritionIndex = 0;

  if(left < right){
    pivot = right;
    partitionIndex = partition(input, pivot, left, right);

    //after partition we have left and right segments that need
    //to be sorted
    innerQuickSort(input, left, partitionIndex - 1);
    innerQuickSort(input, partitionIndex + 1, right);
  }
  return input;
}
//swap all characters from right to left until we find one
//pair where left is not greater than right
function partition(arr, pivot, left, right){
  var pivotValue = arr[pivot];
  var partitionIndex = left;

  for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i,j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
