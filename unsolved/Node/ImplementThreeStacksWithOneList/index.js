// Implement 3 stacks using a single list

function runTests(){

  class Stack{
    constructor(){
      this.list = [];
      this.headerlist = [];
    }
    pop(stack_number){
    }
    push(stack_number, item){
    }
  }

  var stack = new Stack();
  stack.push(1,100);
  stack.push(2,200);
  stack.push(3,300);
  stack.push(3,400);
  console.log("current status:");
  console.log(stack.list);
  console.log(stack.headerlist);

  var pop1 = stack.pop(1); //should be 100
  var pop2 = stack.pop(2); //should be 200
  var pop3 = stack.pop(3); //should be 400 as it was the last
  var pop4 = stack.pop(3); //should be 300

  if(!areEqualValues(100, pop1)){
    console.log('First test failed!');
    return;
  }else {
    console.log("Success! First test passed!")
  }

  if(!areEqualValues(200, pop2)){
    console.log('Second test failed!');
    return;
  }else {
    console.log("Success! Second test passed!")
  }

  if(!areEqualValues(400, pop3)){
    console.log('Third test failed!');
    return;
  }else {
    console.log("Success! Third test passed!")
  }

  if(!areEqualValues(300, pop4)){
    console.log('Fourth test failed!');
    return;
  }else {
    console.log("Success! Fourth test passed!")
  }

}

function areEqualValues(expected, actual){
  if(actual != expected){
    console.log('FailSauce!');
    console.log('Expected: ' + expected + ' but was: ' + actual);
    return false;
  }
  return true;
}

runTests();
