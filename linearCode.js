// /*===== An array is a collection of items of the same variable type stored that are stored
// at contiguous memory locations.Each item in an array is indexed starting with 0.
// There are 3 ways of decalaring arrays =====*/
console.log(
  "-------------------------------ARRAYS-------------------------------"
);

const nums = [12, 34, 9, 90, 43];
const products = ["chocolate", "sugar", "coco powder"];
console.log(products[0]);
console.log("The length of 'products' array: ", products.length);

const products_1 = []; // empty array
products_1[0] = "flour";
products_1[1] = "cream";
products_1[2] = "ganash";
console.log(products_1);
/**it is easy to sort alphabetically but for numerical values we need a compare function*/
console.log("Sorting 'products_1' array: ", products_1.sort());

const products_2 = new Array("yeast"); //array constructor with one element;notice the round brackets
products_2.push("mapple syrup"); // effective way of adding elements to an array
products_2.push("baking powder", "milk");
console.log(products_2);

const products_3 = new Array(5); //array with 5 elements
products_3[0] = "eggs";
products_3[1] = "fondant";
products_3[2] = "coffee powder";
products_3[4] = "baking soda";
console.log(products_3);

// --enumerating(catalogue)arrays --> nums and products--
/*forEach() method of Array instances executes a provided function once for each array element. */
products.forEach(printProducts);
function printProducts(value, index, array) {
  console.log(value); //print the values in the form of list
}
/*map(), reduce() and filter() are array functions that transform the array according to the
applied function and return the updated array.They are used to write simple, short and clean codes
for modifying an array instead of using the loops. */

/*map allows you to perform an operation on an array of numbers,returning a new array
with the operation applied to it. */

const newNums = nums.map(addOne);
function addOne(value, index, array) {
  return value + 1; //[ 13, 35, 10, 91, 44 ]
}
console.log("The new num array will look like: ", newNums);

/*an  operation applied to  each element  in  an array  andreturn  a  single  value
as  a  result.  This  is  commonly  used  for operations that sum values in an array. */

const sumNums = nums.reduce(sumAll);
function sumAll(total, value, index, array) {
  return total + value;
}
console.log("The sum of 'num' array: ", sumNums);

const filterNums = nums.filter(greaterTen);
function greaterTen(value, index, array) {
  return value > 10; //[ 12, 34, 90, 43 ]
}
console.log("Filter 'num' array; ", filterNums);

// --cloning and resizing arrays--
/*this is shallow copying, if you want to copy array of objects then shallow copying is not effective
 the we have to use deep copy method */

const electron = ["Speaker", "buds", "charger", "cables"];
const elec_1 = [...electron];
console.log(elec_1);

const elec_2 = electron.slice(); //empty parenthesis will copy whole
// want to copy some elements then we give index value
console.log(elec_2);

const elec_3 = [].concat(electron);
console.log(elec_3);

const elec_4 = Array.from(elec_3);
//reducing/cutting an array to length 1;
// this is used to remove the view of other elemnts instead of deleting
elec_4.length = 1;
console.log(elec_4);

//-- turning an array to string (using products array)--
console.log("'products' array is turned into string: ", products.toString());
// turning an array to string by specifying specific delimiter we use join
console.log("'products' array is turned into string: ", products.join("|"));

// --deleting values from an array--
const productsDel = products.pop(); //pop() methods deletes from the end of the array
console.log("Deleted element from 'products' array: ", productsDel);
console.log("New 'products' array: ", products);
console.log("The length of new 'products' array: ", products.length);

delete products[1]; //for deleting specific element from an array
console.log(products); //[ 'chocolate', <1 empty item> ]
console.log(
  "length of 'products' array after deleting 'products[1]':",
  products.length
); //not effective method

// --multidimensional arrays--
// /*In some situations,youmay have an array that contains another array.
// This is known as a multidimensional array, and it is used in situations where data is ordered in groups*/
const fruits = [
  ["apple", "grape", "orange", "kiwi"],
  ["guava", "lichi"],
];
console.log("Multi-dimensional array: ", fruits);
console.log(" 'First array' of multi-dimensional array: ", fruits[0]);
console.log(fruits[0][2]); //orange
console.log(fruits[1][1]); //lichi
//Using concat function in multi-dimensional array 'fruits'
console.log(
  "concating multi-dimensional array 'fruits': ",
  fruits[0].concat(fruits[1])
);
// to see the 'fruits' multi-dimensional array in tabular fromat
fruits.push(["cherry", "peach", "pear"]);
console.table(fruits);

/*===== An object hastwo  main  things  associated  with  iti.e.,a  set  of  properties,  
and  a  set  of methods. A property is something that describes the object. Objects can 
be declared/initialized ===== */
console.log(
  "-------------------------------OBJECTS-------------------------------"
);
const comp = new Object(); //declares "comp" as object
comp.productName = "Computer";
comp.price = 599.99;
console.log("Object 'comp': ", comp);

const comp_1 = {
  productName: "Computer", //key:value pair
  price: 899.99,
};
console.log("Object 'comp_1': ", comp_1);
comp_1.productName = "Laptop";
console.log("comp_1.productName: ", comp_1.productName); //accessing & changing properties of the object
console.log("Object 'comp_1' after modifications: ", comp_1);

for (i in comp) {
  console.log(comp[i]); //will print property values
}

// --Object Methods, Getters, and Setters(object accessors)--
/*The getter Method enables you to control the formatting of a property before giving it to
 the user who requested the property and verify security permissions related to this property*/
const person = {
  firstName: "Amar",
  lastName: "Singh",
  fullName: function () {
    return this.firstName + " " + this.lastName; //accessed as a function
  },
  addRoad: "Filani Road",
  addHouse: "House no. - 24",
  get address() {
    //use  the keyword get, combined with a function name.
    return this.addRoad + " " + this.addHouse; //accessed as a property
  },
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};
person.lang = "punjabi";

/*Thiskeyword indicates  that youare  referring  to  a  property  or  method  in  the  object  itself,
rather  than something external to it.*/
console.log("Getting Values(function method): ", person.fullName());
//using person.address() makes it a function-->it will throw an error
console.log("Getting Values(getter method): ", person.address);
console.log("Setting Values(setter method): ", person.language);

/* Object.defineProperty() method can also be used to add (multiple) Getters and Setters
static method defines a new property directly on an object, or modifies an existing 
property on an object, and returns the object.*/

// creating counters

const count = {
  //defining object
  counter: 0,
};

Object.defineProperty(count, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(count, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(count, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(count, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(count, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});
count.reset;
count.add = 5;
count.subtract = 2;
count.increment;
count.decrement;
console.log(count.counter);

// --classes and objects--
/* In JS classes are not object they are templates for objects;the keyword class to create a class;*/
class Car {
  //always add a method named constructor() and it will be called automatically when a new object is created
  constructor(name, year) {
    console.log("--Constructor is working--");
    this.name = name;
    this.year = Number.parseInt(year);
    this.speed;
  }
  carColor() {
    const color = "black";
    return color;
  }
  carOld() {
    const date = new Date();
    return date.getFullYear - this.year;
  }
}
let car_1 = new Car("Alto", 2014);
let car_2 = new Car("Breeza", 2022);
car_1.speed = "40 km/hr"; //referencing
console.log(`The speed of ${car_1.name} is ${car_1.speed}`);
console.log(`My ${car_1.carColor()} ${car_2.name} looks beautiful `);
console.log(
  `My ${car_1.carColor()} ${car_1.name} is ${car_1.carOld()} years old `
);

// --Inheritance--
/*enables implementation of properties without any repetition of the actual implementation code */
class Transport {
  constructor() {
    console.log("Parent class constructor -- transport class");
    this.transType = "";
    this.wheels = 0;
  }
}
class Bike extends Transport {
  constructor() {
    super(); //super keyword calls the constructor of the class you are extending
    this.fuel = 0;
    console.log("Child class constructor - bike class");
  }
}
var bike_1 = new Bike();
bike_1.wheels = 2; //using parent class properties
bike_1.typeName = "Bike";
bike_1.fuel = 40;
console.log(`The transport type is ${bike_1.typeName}`);

// we can also use getters and setters method in classes

console.log(
  "-------------------------------STACKS-------------------------------"
);
/*A stack is a data structure that stores data in a last infirst out format.This means that
the last thingthat was added to the stack will be the first thing removed from it when the remove
operation occurs -LIFO(Last-In First-Out). */

/** There are two popular approaches of creating stacks in programing
 * array-based approach -- array of dynamic size; property is the array of values
 * node-based approach -- array of static size; property is top of the stack
 */

/**Different methods of stacks:
 * push() - add values to the top of the stack/pushes data on stack
 * pop() - removes the values from the top of the stack
 * peek() - looks at the top value of stack
 * isEmpty() - returns true if stack is empty
 * printStack() - returns a string in which all the element of an stack is concatenated
 */

// implementing stack --array based approach
class Stack {
  constructor() {
    this.stack = [];
  }
  push(values) {
    this.stack.push(values);
  }
  pop() {
    if (this.stack.length === 0) {
      return "Underflow";
    }
    this.stack.pop();
  }
  print() {
    console.log(this.stack);
  }
}
class Stack_2 extends Stack {
  constructor() {
    super();
    console.log("'Stack_2' is extended class of 'Stack' class");
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
}
var ss = new Stack_2();
ss.push(89);
ss.push(23);
ss.push(1);
ss.push(11);
ss.print(); //[ 89, 23, 1, 11 ] --right most element is the top of stack(11)
console.log("Stack size: ", ss.size());
ss.pop();
ss.print(); //[ 89, 23, 1 ] --top value(1)
console.log("Stack size: ", ss.size());
ss.pop();
ss.print(); //[ 89, 23 ]
console.log("Stack size: ", ss.size());
console.log("Is stack empty or not: ", ss.isEmpty());
console.log("Top value in the stack: ", ss.peek());

// implementing stack --node based approach

/*In the node-based approach, it isassumedthat thearray object does not exist. In this case,
 you need to create a data structure that mimics how an array works. This type of data structure
 is typically used for languages without arrays or languages where arrays are not dynamically sized */

//  node based object
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
third = new Node(3, null);
second = new Node(2, third);
first = new Node(1, second);

holder = 1;
while (holder != null) {
  console.log(holder.value);
  holder = holder.next;
}
console.log(first);

// --node based stack--
class Stack_3 {
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
  print() {
    var holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}
var s = new Stack_3();
s.push(11);
s.push(12);
s.push(13);
s.print();
console.log(`Stack is empty ?: ${s.isEmpty()} ; Size of Stack: ${s.size} `);
console.log("Top value: ", s.peek());
console.log("First pop: ", s.pop());
s.print();
console.log("Second pop: ", s.pop());
s.print();
console.log(`Stack is empty ?: ${s.isEmpty()} ; Size of Stack: ${s.size} `);
console.log("Third pop: ", s.pop());
s.print();
console.log(`Stack is empty ?: ${s.isEmpty()} ; Size of Stack: ${s.size} `);

// --undo/redo operations--
var undoStack = new Stack_3();
var redoStack = new Stack_3();
var counter = 0;
function incrementCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById("val").value = counter;
}
function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById("val").value = counter;
}

console.log(
  "-------------------------------QUEUES-------------------------------"
);
/*A queue can be seen as a complementary data structure to our stack data structure. It stores data 
 in first in first outformat rather than last in first-out format. This mimics a lineup or queue 
 you may experience at a shop or event. A queue will have a front as well as a rear. */

/*A queue will need to keep track of both the front and the rear of the queue. 
This is because you will add data to the rear of the queue and remove it from the front of the queue. */

/**To implement a queue data structure we need the following methods:
 * enqueue(): To add elements at the end of the queue.
 * dequeue(): To remove an element from the front of the queue.
 * peek(): To get the front element without removing it.
 * isEmpty(): To check whether an element is present in the queue or not.
 * printQueue(): To print the elements present in the queue. */

/** There are two popular approaches of implementing queues in programing:
 * array-based approach -- array of dynamic size; property is the array of values
 * node-based approach -- array of static size; property is top of the stack
 */

/*In the array-basedapproach, the queue will be an array, and it is going to store that data.
In addition, it has two properties: the front and the rear locations. These are indexes in the array 
that indicates where the front of the queue currently is and where the rear of the queue currently is.
For example,consider the idea of removing from an array.Youwillfind that when you delete from the front of
the array,it willleave an empty slot at the front. So,youmustadjust the front to point to a different 
location. */

/*Because of these empty slot issues, it is often much better to use a node-based approach. In the 
node-based approach, there aretwo nodes, one that indicates the front and one that indicates the rear.  */

// array-based approach
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(values) {
    this.queue[this.rear] = values;
    this.rear++; //pushing values to the array
  }
  dequeue() {
    if (this.queue.length > 0) {
      var values = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return values;
    } else {
      throw "Stack underflow";
    }
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    if (this.queue.length === 0) {
      console.log("Yes, the queue is empty");
    } else {
      console.log("No, the queue is not empty");
    }
  }
  printQueue() {
    return this.queue;
  }
}
let q = new Queue();
q.enqueue(45);
q.enqueue(95);
q.enqueue(15);
q.enqueue(42);
q.enqueue(30);
console.log("Queue: ", q.printQueue()); //---front-->[ 45, 95, 15, 42, 30 ]<--rear--
q.isEmpty();
console.log("Front element of the queue: ", q.peek()); //45
console.log("Removing first element: ", q.dequeue()); //removing from left - 45
console.log("Queue: ", q.printQueue()); //[ <1 empty item>, 95, 15, 42, 30 ] --that's y we use node based approach
q.enqueue(13);
console.log("Queue: ", q.printQueue()); //[ <1 empty item>, 95, 15, 42, 30, 13 ]
/*The empty slots in the arraycan cause some issues with the reliability of the code and the format 
of the output of the queue. */

// --node based approach
// using the same class node from stacks(node based approach)
class Queue_2 {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }
  enqueue(val) {
    var inNode = new Node(val, null);
    if (this.size == 0) {
      //case1 : when queue is empty
      this.front = this.rear = inNode; //when queue is empty rear and front will be same node
      this.size++;
    } else {
      // case2: when queue is not empty
      this.rear.next = inNode; //pointing to inserted value
      this.rear = inNode; //inserted value
    }
    this.size++;
  }
  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      this.size--;
      return val;
    }
  }
  peek() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      return this.front.value;
    }
  }
  isEmpty() {
    return this.size == 0;
  }
  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}
var qq = new Queue_2();
qq.enqueue(1);
qq.enqueue(2);
qq.enqueue(3);
qq.enqueue(4);
qq.print(); // 1 2 3 4
qq.dequeue(); // 1 is removed o/p --- 2 3 4
qq.print();
console.log("size of the queue: ", qq.size);

console.log(
  "-------------------------------LINKED LISTS-------------------------------"
);

console.log(
  "-------------------------------HASH TABLES-------------------------------"
);
