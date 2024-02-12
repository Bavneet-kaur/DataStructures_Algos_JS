/*----BUBBLE SORT---- */
//* algorithm that will swap elements in a list, bubbling the smaller elements to the top, & sinking the larger elements to the bottom.
//* requires two passes

//* nesting in bubble sort can be performed with combination of while & for or with two for loops
let arr = [4, 2, 6, 3, 9];
let sorted = false;
console.log("The unsorted array of numbers: ", arr);

while (!sorted) {
  sorted = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      // swapping -- with help of temp variable
      let temp = arr[i]; //*first created a temp variable that stores the vallue of 'arr[i]'
      arr[i] = arr[i - 1]; //*then copy the value of 'arr[i-1]' to 'arr[i]' ('arr[i]' would be overwritten).
      arr[i - 1] = temp; //*then copy the value of temp to 'arr[i-1]' (earlier value of arr[i]).
      sorted = false;
    }
  }
}
console.log("The sorted array of numbers: ", arr);
// ---------------------------OR----------------------------------
/**
 *TODO To analyze the efficiency, consider the worst case. There are two nested for loops in function, and each of these loops iterates the length of the array. 
 *? The first loop runs n times, the second loop runs n times, and since they are nested, 
 *? you multiply them to get a total of n*n, or 𝑛^2 iterations.
 *? In each of these iterations, you compare an element in array,in the worst case,you take 𝑂(𝑛^2)time. 
 *?In implementation, it turns out that the best and average cases are the exact same 
 *?since you will iterate 𝑛^2times regardless of the array. 

 **This means that your efficiencies are:
 ** Best case: Ω(𝑛^2)
 ** Average case: 𝜃(𝑛^2)
 ** Worst case: 𝑂(𝑛^2)
 
 *!Bubble sort is an easy-to-understand algorithm, however,in efficiency terms,it is quite bad.
*/

function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a;
}
console.log("Sorting array with bubble sort: ", bubbleSort([12, 90, 11]));

/*----SELECTION SORT---- */
/**
 * *an algorithm that sorts data by dividing the array into a sorted and unsorted portion. 
 * *It then iterates the unsorted portion to find the smallest possible value. 
 * *It places that value at the end of the sorted portion. 
 * *This leads to eventually obtaining a fully sorted array of values.  
 
 * TODO  analyzing the efficiency: 
 * ?have two loops much like bubble sort. 
 * ?In the first loop, it initializes a minimum value and 
 * ?uses the second loop to compare if the value is the minimum or not. 
 * ?Then swap the minimums and move to the next element.
 
 * you still run into the same efficiency as before:
 ** Best case: Ω(𝑛^2)
 ** Average case: 𝜃(𝑛^2)
 ** Worst case: 𝑂(𝑛^2)
 */

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}
console.log("Sorting array with selection sort: ",selectionSort([12, 90, 11, 87, 23]));

/*----INSERTION SORT---- */
/**
 ** Insertion sort works by swapping elements as youiterate through the list, 
 * *moving smaller values closer to the front until the list is sorted. 
 
 * ?have two loops once again, the first loop sets the value to compare to, and 
 * ?the second loop iterates all previous values, swapping as needed.
 * ?Although you have two nested loops,it has some improvements in the runtime. 
 * ? The worst and average casesare still 𝑛^2, requiring two sets of iterations. 
 * ?The best case however will avoid the second iteration altogether giving you an efficiency of 𝑛. 
 
 * TODO This gives you the following efficiencies: 
 **Best case: Ω(𝑛) --> if the array is already sorted as it saves the time
 **Average case: 𝜃(𝑛^2)
 **Worst case: 𝑂(𝑛^2)

 *If you know your array might be close to sorted, this sorting algorithm can be a good choice.
 */

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log("Sorting array with insertion sort: ",insertionSort([10, 90, 11, 87, 22]));

/*----MERGE SORT---- */
/*----QUICK SORT---- */
/*----HEAP SORT---- */
