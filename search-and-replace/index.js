// soln
const searchAndReplace = (string, before, after) => {
  let afterFirstChar = after.charAt(0);
  let beforeStartIndex = string.indexOf(before);
  let beforeFirstChar = string.charAt(beforeStartIndex);
  if (beforeFirstChar == beforeFirstChar.toLowerCase()) {
    return string.replace(
      before,
      afterFirstChar.toLowerCase() + after.slice(1)
    );
  } else if (beforeFirstChar == beforeFirstChar.toUpperCase()) {
    return string.replace(
      before,
      afterFirstChar.toUpperCase() + after.slice(1)
    );
  }
  return string;
};
// Time complexity is linear-O(n)
searchAndReplace("Let us go to the store", "store", "mall"); //Let us go to the mall
searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //He is Sitting on the couch.
