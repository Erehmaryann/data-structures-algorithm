// soln
const uniteUniqueVals = (...arr) => {
  let newArr = [];
  for (let i in arr) {
    newArr.push(...arr[i]);
  }
  // Collection of unique vals
  let uniqueObject = new Set(newArr);
  // Array.from() turns the unique object into a unique array
  return Array.from(uniqueObject);
};

uniteUniqueVals([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1, 3, 2, 5, 4]
// Time complexity-O(n)-linear.
