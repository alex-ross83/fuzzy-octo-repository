// Given the root to a binary tree, implement serialize(root),
// which serializes the tree into a string, and deserialize(s),
// which deserializes the string back into the tree.

function Node(val, left = null, right = null){
  return {
    val : val,
    left : left,
    right : right
  }
}

var node = Node('root', Node('left', Node('left.left')), Node('right'))

var expectedResult = 'left.left';
var serialized = serialize(node);
console.log('serialized= ' + serialized);
var deserialized = deserialize(serialized)
console.log('deserialized= ' + JSON.stringify(deserialized));
var actual = deserialized.left.left.val;

//Need to refactorize the array check routine to a utils module
if(actual == expectedResult){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}
actual = deserialized.right.val;
if(actual == 'right'){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log('right');
  console.log('But was:');
  console.log(actual);
}

function serialize(input){
  if(input == null){
    return '@';
  }
  return input.val + ',' + serialize(input.left) + ',' + serialize(input.right);
}

function deserialize(input){
  return deserializeInner(input.split(','), 0).result;
}

function deserializeInner(inputArr, position){
  if(position > inputArr.length){
    console.log('Halt and catch fire!!!');
    return;
  }
  if(inputArr[position] == '@'){
    return {
      result:null,
      nextPosition : position+1
    }
  }
  var result = Node(inputArr[position]);
  var nextPosition = position + 1;
  var left = deserializeInner(inputArr, nextPosition);
  result.left = left.result;
  var right = deserializeInner(inputArr, left.nextPosition);
  result.right = right.result;
  return {
    result,
    nextPosition: right.nextPosition
  }
}
