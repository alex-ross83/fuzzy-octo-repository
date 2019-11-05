// Given Amazon org chart, find 2 employees' first common mgr.
//
//                   CEO
//            Vp1           Vp2
//     Mgr1       Mgr2          Mgr3
//
//     Mgr1, Mgr2 -> Vp1
//     Mgr1, Mgr3 -> CEO
//     Mgr2, Vp2 - > CEO
//     Mgr1, Vp1 - > CEO

function Node(title){
  return {
    title:title,
    reportees:[]
  };
}

var root = Node('CEO');
var vp1 = Node('VP1');
var vp2 = Node('VP2');
var vp3 = Node('VP3');
var mngr1 = Node('Mgr1');
var mngr2 = Node('Mgr2');
var mngr3 = Node('Mgr3');

vp1.reportees = [mngr1, mngr2];
vp2.reportees = [mngr3];
root.reportees = [vp1, vp2, vp3];

runFirstTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
runSecondTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
runThirdTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
//currently breaking. Employee 2 is reportee of 1 so
//the result should be the manager of Employee 1
runFourthTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3);

function runFirstTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3){
  var expected = 'CEO';
  var t1 = vp1;
  var t2 = vp2;
  runTest(expected, t1, t2, root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
}

function runSecondTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3){
  var expected = 'CEO';
  var t1 = mngr1;
  var t2 = mngr3;
  runTest(expected, t1, t2, root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
}

function runThirdTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3){
  var expected = 'CEO';
  var t1 = mngr2;
  var t2 = vp2;
  runTest(expected, t1, t2, root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
}

function runFourthTest(root, vp1, vp2, vp3, mngr1, mngr2, mngr3){
  var expected = 'CEO';
  var t1 = mngr1;
  var t2 = vp1;
  runTest(expected, t1, t2, root, vp1, vp2, vp3, mngr1, mngr2, mngr3);
}

function runTest(expected, t1, t2, root, vp1, vp2, vp3, mngr1, mngr2, mngr3){
  var actual = findFirstCommonManager(root, t1.title, t2.title, 0);
  if(actual != null && actual.title == expected){
    console.log("Success!");
  } else {
    console.log("Failsauce!");
    console.log("Expected: " + expected + " but was: " + ((actual == null)? "null" : actual.title));
  }
}

function findFirstCommonManager(root, p1, p2, count){
  if(root == null){
    return null;
  }
  //console.log('Received ' + root.title);
  //if we found a node that contains one of the 2 employees
  // we return that node
  if(root.title == p1 || root.title == p2){
    return root
  }
  if(root.reportees == null){
    //not a manager, discard
    return null;
  }
  var children = {};
  //iterate over all the first children of the root
  //and add them to a hash
  for(var i = 0; i < root.reportees.length; i++){
    if(children[root.reportees[i].title] != null){
      //ignore, we already visited this node
      //this should not happen
    } else{
      //console.log("Adding " + root.reportees[i].title);
      children[root.reportees[i].title] = root.reportees[i];
    }
  }
  //if found, it means the root was the actual manager
  if(children[p1] != null && children[p2] != null){
    return root;
  }
  //else we need to iterate over the subtrees
  //we will count how many employees we find;
  var lastFound = null;
  for(var r in children){
    //console.log("Evaluating children of: " + r);
    var inner = findFirstCommonManager(children[r], p1, p2, count);
    if(inner != null){
      count += 1;
      //console.log("found something when checking " + r + " - " + inner.title + " Count is: " + count);
      lastFound = inner;
    }
    //if count >= 2 then root was the parent
    if(count >= 2){
      return root;
    }
  }
  return lastFound;
}
