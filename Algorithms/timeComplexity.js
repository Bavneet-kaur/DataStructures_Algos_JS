
nums = [];
/* this loop generates the numbers from 1 to 100, with 50 excluded. */
for (var i = 1; i <= 100; i++) {
  if (i != 50) {
    nums[i - 1] = i;
  } else {
    nums[i - 1] = 0;
  }
}

/*sums the values and finds the missing number */
var total = 0;
for (var i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log("Missing number is: ",5050 - total);