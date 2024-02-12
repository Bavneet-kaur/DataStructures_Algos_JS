/**In this exercise, we will take a look at a searching algorithm known as jump search. This algorithm works on sorted arrays similar to binary search. The main idea is that we jump around the array by a predetermined amount, trying to find a block of elements where the target may be. To do this, we use the following steps:

Set a step size as the square root of n
Increment by step comparing values until the search value is found */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var target = 7;

var n = nums.length;

var step = Math.floor(Math.sqrt(n));

var blockStart = 0;

var currentStep = step;

while (nums[Math.min(currentStep, n) - 1] < target) {
  blockStart = currentStep;

  currentStep += step;

  if (blockStart >= n) {
    console.log("Not found");
  }
}

while (nums[blockStart] < target) {
  blockStart++;

  if (blockStart == Math.min(currentStep, n)) {
    console.log("Not found");
  }
}

if (nums[blockStart] == target) {
  console.log("Found");
} else {
  console.log("Not found");
}

/**In this exercise, we will take a look at a searching algorithm known interpolation search. This algorithm searches for a key in an ordered array using the following logic:

It calculates a possible position using the formula: low + ((x-arr[low]) * (high-low) / (arr[high]-arr[low])
It then searches around the calculated value to attempt to find the value
The idea is that the index calculation should place us closer to the value, as it provides us more context towards the values around our array. The implementation is shown below.
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var target = 7;

let left = 0;

let right = arr.length - 1;

while (left <= right) {
  var rangeDelta = arr[right] - arr[left];

  var indexDelta = right - left;

  var valueDelta = target - arr[left];

  if (valueDelta < 0) {
    console.log("Not found");

    break;
  }

  if (!rangeDelta) {
    if (arr[left] === target) {
      console.log("Found at: " + left);

      break;
    } else {
      console.log("Not found");

      break;
    }
  }

  var middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);

  if (arr[middleIndex] === target) {
    console.log("Found at: " + middleIndex);

    break;
  }

  if (arr[middleIndex] < target) {
    left = middleIndex + 1;
  } else {
    right = middleIndex - 1;
  }
}
/**In this exercise, we will take a look at a searching algorithm known ternary search. This algorithm is a modification of binary search that uses two middles instead of 1. The idea is that we can compare each midpoint, and recursively work with the one closest to the value we are searching for. The implementation is shown below.
 */
function ternarySearch(l, r, key, arr) {
  if (r >= l) {
    let mid1 = l + parseInt((r - l) / 3, 10);

    let mid2 = r - parseInt((r - l) / 3, 10);

    if (arr[mid1] == key) {
      return mid1;
    }

    if (arr[mid2] == key) {
      return mid2;
    }

    if (key < arr[mid1]) {
      return ternarySearch(l, mid1 - 1, key, arr);
    } else if (key > arr[mid2]) {
      return ternarySearch(mid2 + 1, r, key, arr);
    } else {
      return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
    }
  }

  return -1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var target = 7;

console.log(ternarySearch(0, arr.length, target, arr));
/**In this exercise, we will take a look at a searching algorithm known fibonacci search. The fibonacci search works similar to a binary search, with a few key differences:

Fibonacci search divides the array into uneven parts
Fibonacci does not use division, but instead + and -. This can reduce required CPU cycles leading to slight performance increases
Fibonacci search looks at elements that are closer together, meaning it can be optimized through CPU cache or RAM.
The idea is that we use fibonacci sequence numbers to guide our iteration through the array. A full implementation is shown below.
 */
function fibonaccianSearch(arr, x, n) {
  let fib1 = 0;

  let fib2 = 1;

  let fibM = fib2 + fib1;

  while (fibM < n) {
    fib2 = fib1;

    fib1 = fibM;

    fibM = fib2 + fib1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fib2, n - 1);

    if (arr[i] < x) {
      fibM = fib1;

      fib1 = fib2;

      fib2 = fibM - fib1;

      offset = i;
    } else if (arr[i] > x) {
      fibM = fib2;

      fib1 = fib1 - fib2;

      fib2 = fibM - fib1;
    } else return i;
  }

  if (fib1 && arr[n - 1] == x) {
    return n - 1;
  }

  return -1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 7;
console.log(fibonaccianSearch(0, arr.length, target, arr));
