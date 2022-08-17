// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// soln
const sumAllNumsInRange = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sumOfNumsInBetween = 0;
  for (let i = min; i <= max; i++) {
    sumOfNumsInBetween += i;
  }
  return sumOfNumsInBetween;
};
sumAllNumsInRange([4, 1]);
// The time complexity of the above func is linear O(n)
// The space complexity of the above func is constant O(1)

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

// soln
const diffArray = (arr1, arr2) => {
  let bothArr = arr1.concat(arr2);
  return bothArr.filter((item) => !arr1.includes(item) || !arr2.includes(item));
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// The time complexity of the above func is linear O(n)
// The space complexity of the above func is constant O(n)
