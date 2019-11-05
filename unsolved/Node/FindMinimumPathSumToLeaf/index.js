function Node(val, left = null, right = null){
  return {
    value : val,
    left : left,
    right : right
  }
}


// Given a binary tree, return the minimum path sum from root to leaf
var root = Node(10,
  Node(5,
      null,
      Node(2)),
  Node(5,
      null,
      Node(1,
        Node(-1),
        null)
      )
    );
var input = root;
var expectedResult = 15;

var actual = findMinimumPathSumtoLeaf(input);
if(actual == expectedResult){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}


function findMinimumPathSumtoLeaf(input){
  //TODO: Implement here
}
