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
  if(input == null){
    return 0;
  }
  //depth-first traversal, we need a stack. Arrays in JS work like that.
  var list = [input];
  //provide an arbitrary large value
  var min = 10000;
  var cur = 0;
  //while there are elements in the array, grab them
  while(list.length){
    var current = list.pop();
    console.log("Evaluating: " + current.value);
    //sum the current node value to the carrying sum
    cur += current.value;
    //depth-first part. If there are children nodes then append them to the stack.
    if(current.left){
      list.push(current.left);
    }
    if(current.right){
      list.push(current.right);
    }
    //If there are no children, we reached a leaf and can evaluate if the carrying sum
    // compares to the minimum value
    if(current.left == null && current.right == null){ //leaf, reset count
      console.log('Leaf found!');
      console.log('Current cur: ' + cur + ' and current min: ' + min);
      //if current is less than minimum, we found a new minimum.
      if(cur < min){
        console.log('Updating min to: ' + cur);
        min = cur;
        //this part was tricky, can't reset to zero because you would lose the
        //root value.
        cur = input.value;
      }
    }
  }
  return min;
}
