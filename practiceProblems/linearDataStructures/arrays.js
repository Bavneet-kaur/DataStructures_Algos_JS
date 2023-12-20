"use strict";
//Q1---- find the missing number in eachinteger array containing the numbers from 1 to 100----
const num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61,
  62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100,
];
const totalNum = 5050; //sum of 1 to 100 is 5050
console.log("Sum of array(1 to 100): ", totalNum);

const sumNum = num.reduce(sumAll);
function sumAll(total, value, index, array) {
  return total + value;
}
const missVal = totalNum - sumNum;

console.log("sum of array: ", sumNum);

console.log("Missing value from the array of 1 to 100: ", missVal);

//Q2----finding maximum and minimum values----
const numbers = [56, 12, 89, 123, 1, 70];
console.log("Array: ", numbers);

// can also be done without sorting and create the function
//  sorting the array in ascending order
numbers.sort(function (a, b) {
  return a - b;
});
console.log("Sorted array: ", numbers);
console.log("Minimum value in the array: ", Math.min(...numbers)); // 1
console.log("Maximum value in the array: ", Math.max(...numbers)); // 123

//Q3----Removing duplicates from sorted arrays: const arr = [0,0,1,1,1,2,2,3,3,4]----
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const removeDup = [];

for (let i = 0; i < arr.length; i++) {
  if (i < arr.length - 1) {
    if (arr[i] != arr[i + 1]) {
      removeDup.push(arr[i]);
    }
  } else {
    removeDup.push(arr[i]);
  }
}
console.log("Array: ", arr);
console.log("Array after removing duplicates", removeDup);

//Q4----to prevent issue blank spaces from array while deleting element from an array----

// Q5----to count values that are odd and even in an array----
const arrNum = [12, 67, 21, 76, 89];
var evenCount = 0;
var oddCount = 0;

for (let vals of arrNum) {
  if (vals % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}
console.log("Odd count: ", oddCount);
console.log("Even count: ", evenCount);

//Q6----write a program that given a matrix [[1,2],[3,4,]], produces its transpose.----
const matrix = [
  [1, 2],
  [3, 4],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < i; j++) {
    const temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}
console.log("After transpose: ",matrix);