// soln
const removeElemsOfSameVal = (arr, ...args) => {
  let allElemsArr = arr.concat(args);
  return allElemsArr.filter(
    (elem) => !arr.includes(elem) || !args.includes(elem)
  );
};
removeElemsOfSameVal([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
// The time complexity of the above func is linear O(n)
// The space complexity of the above func is constant O(n)
