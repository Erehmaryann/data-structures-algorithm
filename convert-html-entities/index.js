// soln
// Obj of chars and their corresponding entities
const ReqEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertHTMLEntities = (str) => {
  // Convert the str into an array of letters
  let words = Array.from(str);
  // Go through the arr
  for (let i = 0; i < words.length; i++) {
    // if the string is not in the ReqEntities obj skip
    if (!ReqEntities[words[i]]) continue;
    // replacing the characters with their corresponding entities
    words = ReqEntities[words[i]];
  }
  //convert the arr of letters into a string
  let convertedStr = words.join("");
  // return the string
  return convertedStr;
};

convertHTMLEntities("Schindler's List"); //"Schindler&apos;s List"
//Time complexity-O(n)-linear.
