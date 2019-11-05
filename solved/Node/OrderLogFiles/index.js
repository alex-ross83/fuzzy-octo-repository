// You receive an array of file identifiers separated by spaces formed by:
// A Unique identifier
// A list of either:
//    -words
//    -numeric identifiers
// The task is that you will return an array of file identifiers
// based on the same input array but with the following properties:
// -The unique identifier is ignored for sorting purposes.
// -Lines with words appear first, ordered in lexicographical order
// -Lines with numeric identifiers appear last, in the order
//  the original input listed them

var input = [
  ['12345 arc boat apple'],
  ['90875 467 098 104'],
  ['09876 apple banana grape'],
  ['90237 765 341 098']
];

var expectedResult = [
  ['09876 apple banana grape'],
  ['12345 arc boat apple'],
  ['90875 467 098 104'],
  ['90237 765 341 098']
];

var actual = orderFileIdentifiers(input);

if(areEqual(actual, expectedResult)){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}

function orderFileIdentifiers(inputArray){
  var orderLines = [];
  var inputLines = [];
  var result = [];
  for(var i = 0; i < inputArray.length; i++){
    var s = inputArray[i][0].split(/\s/);
    if(s.length < 3){
      console.log('File is not well formatted. Terminating');
      return null;
    }
    if(/\d+/.test(s[1])){ //check if its a word
      inputLines.push(inputArray[i]);
    }else{
      orderLines.push(s);
    }
  }
  var orderedLines = orderLines.sort(function(a,b){
    var aLine = a.slice(1,3).join(' ');
    var bLine = b.slice(1,3).join(' ');
    return aLine.localeCompare(bLine);
  });
  for(var j = 0; j< orderedLines.length; j++){
    var lineItem = [];
    lineItem.push(orderedLines[j].join(' '));
    result.push(lineItem);
  }
  for(var k = 0; k< inputLines.length; k++){
    var lineItem = inputLines[k];
    result.push(lineItem);
  }
  return result;
}

// Helper function to evaluate whether
// two objects are equal
function areEqual(value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {

    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!areEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {

      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }

    }
  };

  // Compare properties
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
}
