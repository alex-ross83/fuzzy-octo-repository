// Implement 3 stacks using a single list

function runTests(){

  class Stack{
  constructor(){
    this.list = [];
    this.headerlist = [];
  }
  pop(stack_number){
    if(this.list.length == 0){
      return null;
    }
    console.log("Looking for element in stack: " + stack_number);
    for(var i = this.headerlist.length - 1 ; i > -1; i--){
      console.log("Reviewing element:");
      console.log(this.headerlist[i]);
      if(this.headerlist[i].stack == "removed"){
        console.log("Element previously popped. Continue....");
        //don't even try that
        continue;
      }
      if(this.headerlist[i].stack == stack_number){
        var result = this.list[this.headerlist[i].ix];
        //todo:move rest of elements to accomodate the missing space
        //otherwise, signal that the element was removed
        if(result == "removed"){
          continue; //element was popped, need to continue looking
        }
        else{
          console.log("Element found! Returning it:" + result);
          this.list[this.headerlist[i].ix] = "removed";
          this.headerlist[i].stack = "removed";
          console.log("Status after pop:");
          console.log(stack.list);
          console.log(stack.headerlist);
          this.afterpop(this.headerlist[i].ix, i);
          return result;
        }
      }
    }
    return null;
  }
  push(stack_number, item){
    //when pushing we get the new index
    //use this information to store a headerlist
    var newix = this.list.push(item);
    //store new index
    this.headerlist.push({
      stack:stack_number,
      ix:newix - 1});
    console.log("Status after push:");
    console.log(stack.list);
    console.log(stack.headerlist);
    return;
  }
  afterpop(indexPopped, headerIndexPopped){
      //implement reordering of elements
      //this.list can just be spliced
      //the trick is moving headerlist index one position to the left for all
      //other subsequent elements
      for(var nextIx = headerIndexPopped + 1; nextIx < this.headerlist.length; nextIx++){
        this.headerlist[nextIx].ix += -1;
      }
      this.list.splice(indexPopped,1);
      this.headerlist.splice(headerIndexPopped,1);
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
