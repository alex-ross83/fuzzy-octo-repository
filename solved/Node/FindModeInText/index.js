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
  var result = [];
  var maxCount = 0;
  var words = {};
  var inputArr = input.replace(/'/g, ' ').replace(',', ' ').replace('.', ' ').split(/\s/);
  var sanitizedIgnoreWords = parseIgnoreWords(ignoreWords);
  for(var i = 0; i < inputArr.length; i++){
    var w = inputArr[i].toLowerCase();
    if(sanitizedIgnoreWords[w] == -1) continue;
    if(words[w] == null){
      words[w] = 1;
    }else{
      words[w] += 1;
    }
    if(words[w] > maxCount){
      maxCount = words[w];
    }
  }
  for(var prop in words){
    if(words[prop] == maxCount){
      result.push(prop);
    }
  }
  return result;
}

function parseIgnoreWords(ignoreWords){
  var result = {};
  for(var i = 0; i < ignoreWords.length; i++){
    var s = ignoreWords[i].toLowerCase();
    if(result[s] == null){
      result[s] = -1
    }
  }
  return result;
}
