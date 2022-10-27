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
