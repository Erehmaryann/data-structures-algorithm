// soln
const diffArray = (arr1, arr2) => {
  let bothArr = arr1.concat(arr2);
  return bothArr.filter((item) => !arr1.includes(item) || !arr2.includes(item));
};
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// The time complexity of the above func is linear O(n)
// The space complexity of the above func is constant O(n)
