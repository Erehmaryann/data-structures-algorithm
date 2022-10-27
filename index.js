// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// soln 1 time complexity is O(n2) quadratic
// const Ref = "abcdefghijklmnopqrstuvwxyz";

// const missingLetters = (str) => {
//   let start = str[0];
//   let end = str[str.length - 1];
//   let range = Ref.slice(Ref.indexOf(start), Ref.indexOf(end) + 1);

//   let f;
//   for (let i = 0; i < range.length; i++) {
//     if (str.includes(range.charAt(i))) {
//       continue;
//       f = undefined;
//     } else {
//       f = range.charAt(i);
//     }
//   }
//   return f;
// };
