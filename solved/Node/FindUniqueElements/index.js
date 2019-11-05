// Given a list of numbers, return only the unique elements
// in the list
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

function findUniqueElements(arr) {
  //declare map
  var mp = {};
  //declare result object
  var res = [];
  //iterate over the elements of the array
  for(var i = 0; i < arr.length; i++){
    //if no property with the same name as the value has been assigned
    //then it is the first time we are seeing this value
    if(mp[arr[i]] == undefined){
      mp[arr[i]] = 1;
    } else{ //else we increment how many times we have seen it
      mp[arr[i]] += 1;
    }
  }
  //filter from map and pick only the uniques (count == 1)
  for(var prop in mp){
    if(mp[prop] == 1){
      res.push(prop);
    }
  }
  return res;
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
