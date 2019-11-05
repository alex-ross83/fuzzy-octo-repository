// Without taking into account the words in ignoreWords,
// find the word with the highest frequency
// if multiple words have the same frequency, return all the words
// with the max frequency
// Treat punctuation as spaces
var input = "The cat pursues the cat's kitten's tails";
var ignoreWords = ['the'];
var expectedResult = ['cat', 's'];

var actual = findModeInText(input, ignoreWords);
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

function findModeInText(input, ignoreWords){
  //TODO: Implement here  
}
