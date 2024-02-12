//Q1 ----to solve the next greater element problem
/*Element      NGE
   4      -->   5
   5      -->   25
   2      -->   25
   25     -->   -1 */
/*there are two ways to solve this problem */
// method-1 by using for loops
function printNGE(arr, n) {
  var next, i, j;
  for (i = 0; i < n; i++) {
    //picks all the elements one by one
    next = -1;
    for (j = i + 1; j < n; j++) {
      //looks for the first greater element for the element picked by the outer loop
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    console.log(arr[i] + " -- " + next);
  }
}

// Driver Code
var arr = [21, 33, 2, 3];
var n = arr.length;
printNGE(arr, n);

// method -2 by suing stack(efficient and effective)
class Stack {
  constructor() {
    this.stack = []; //empty array
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      throw "Stack Underflow";
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      throw "Stack Underflow";
    }
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}
function printNextGreatest(arr, n) {
  var s = new Stack();
  s.push(arr[0]);
  for (var i = 1; i < n; i++) {
    if (s.length == 0) {
      s.push(arr[i]);
    } else {
      while (!s.isEmpty() && s.peek() < arr[i]) {
        console.log(s.pop() + "-->" + arr[i]);
      }
      s.push(arr[i]);
    }
  }
  while (!s.isEmpty()) {
    console.log(s.pop() + "-->" + -1);
  }
}
var arr = [11, 13, 21, 3];
var n = arr.length;
printNextGreatest(arr, n);

// Q2----searching values in the stack
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack_2 {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    var inNode = new Node(value, this.top);
    this.top = inNode;
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow";
    }
  }

  pop() {
    if (this.size > 0) {
      var retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      throw "Stack Underflow";
    }
  }

  isEmpty() {
    return this.size == 0;
  }
  search(val) {
    var index = -1;
    var found = false;
    var holder = this.top;

    while (!found && holder != null) {
      if (holder.value === val) {
        found = true;
      }
      holder = holder.next;
      index++;
    }
    if (!found) {
      return -1;
    } else {
      return index;
    }
  }
  print() {
    var holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

var s = new Stack_2();
s.push(1);
s.push(2);
s.push(3);
console.log(s.search(2)); //1
console.log(s.search(5)); //-1

// Q3 ----reversing a stack
console.log("reversing stacks");
function reverseStack(s) {
  var vals = [];

  while (!s.isEmpty()) {
    vals.push(s.pop());
  }

  for (var i = 0; i < vals.length; i++) {
    s.push(vals[i]);
  }
  return s;
}
var ss = new Stack_2();
ss.push(11);
ss.push(12);
ss.push(13);
ss.print();
ss = reverseStack(ss);
ss.print();

// Q4----sorting stack
console.log("sorting stacks");
function sortStack(s) {
  var tmpStack = new Stack();

  while (!s.isEmpty()) {
    var val = s.pop();
    while (!tmpStack.isEmpty() && tmpStack.peek() > val) {
      s.push(tmpStack.pop());
    }
    tmpStack.push(val);
  }
  return tmpStack;
}
var s = new Stack();
s.push(34);
s.push(3);
s.push(31);
s.push(98);
s.push(92);
s.push(23);
var out = sortStack(s);
out.print();
//Q5----The Balanced Bracket Problem
var bracketStack = new Stack();
var testString = "(1+2)";
var valid = true;
var i = 0;
while (i < testString.length && valid) {
  var charVal = testString.charAt(i);
  if (charVal == "(") {
    bracketStack.push(charVal);
  } else if (charVal == ")") {
    if (!bracketStack.isEmpty()) {
      bracketStack.pop();
    } else {
      valid = false;
    }
  }
  i++;
}
if (!bracketStack.isEmpty()) {
  valid = false;
}
console.log(valid);

// Q6----Palindromes
var reverseString = newStack();
var testString = "racecarr";
for (var i = 0; i < testString.length; i++) {
  reverseString.push(testString.charAt(i));
}
var valid = true;
var i = 0;
while (reverseString.size > 0 && valid) {
  var charVal = reverseString.pop();
  if (charVal != testString.charAt(i)) {
    valid = false;
  }
  i++;
}
console.log(valid);
