// Q1 --> bubble sort - merge together two sorted arrays in order to create one array in sorted order.

function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while (current < arr1.length + arr2.length) {
    let arr1Done = index1 >= arr1.length;
    let arr2Done = index2 >= arr2.length;
    if (!arr1Done && (arr2Done || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }
    current++;
  }
  return merged;
}

var arr1 = [3, 5, 6, 10, 11, 20];
var arr2 = [1, 2, 7, 8, 15, 19];
console.log(mergeTwo(arr1, arr2));

/** selection sort
 * we can sort an array that contains only 0, 1 and 2 as values.
 * This process involves splitting our array into 3 parts.
 * The first part contains all the 0s, the second part contains all the 1s, and the last
 * part contains all the 2s. We then iterate from the middle, placing 0s and 2s where
 * they belong. The result will be that all values are where they should be.
 */

var arr = [0, 2, 1, 2, 1, 0, 0, 0, 2, 1, 0, 2, 1];

let low = 0;
let high = arr.length - 1;
let mid = 0;
let temp = 0;

while (mid <= high) {
  if (arr[mid] == 0) {
    temp = arr[low];
    arr[low] = arr[mid];
    arr[mid] = temp;
    low++;
    mid++;
  } else if (arr[mid] == 1) {
    mid++;
  } else {
    temp = arr[mid];
    arr[mid] = arr[high];
    arr[high] = temp;
    high--;
  }
}
console.log(arr);

/**insertion sort ---> quicksort can be implemented using Lumuto partitions.
 * The Lumuto partition is a method of splitting an array such that we start by picking the
 * last element in the array. We then sort that element in its rightful place, and remove it
 * from subsequent recursive calls. The goal of the Lumuto partition is to reduce the number
 * of sorts required by sorting the partition element.
 */
function partition(arr, start, end) {
  var pivot = arr[end];
  var pIndex = start;
  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      var temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;
      pIndex++;
    }
  }
  var temp = arr[end];
  arr[end] = arr[pIndex];
  arr[pIndex] = temp;
  return pIndex;
}

function quicksort(arr, start, end) {
  if (start >= end) {
    return;
  }
  var pivot = partition(arr, start, end);
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot + 1, end);
}

var arr = [9, -3, 5, 2, 6, 8, -6, 1, 3];
quicksort(arr, 0, arr.length - 1);
console.log(arr);