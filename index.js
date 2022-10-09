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

// Seek and Destroy.
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.
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

// Wherefore art thou.
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
// soln
const CheckForMatchedNameAndVal = (collection, source) => {
  let sourceKeys = Object.keys(source);
  const arrOfMatchedName = collection.filter((item) =>
    sourceKeys.every(
      (key) => item.hasOwnProperty(key) && item[key] === source[key]
    )
  );
  return arrOfMatchedName;
};
CheckForMatchedNameAndVal(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
); // [{ first: "Tybalt", last: "Capulet" }]

// Spinal Tap Case.
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// soln
const spinalCase = (string) => {
  string = string
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return string;
};

// Pig Latin.
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// soln
const translatePigLatin = (str) => {
  const consonants = str.match(/[^aeiou]/gi);
  if (consonants.includes(str[0])) {
    str = [...str];
    let wordsToBeRemoved = "";
    let arr = [];
    for (let i = 0; i <= str.length - 1; i++) {
      let cluster = consonants.includes(str[i]);
      if (cluster) {
        wordsToBeRemoved += str[i];
        arr = [...wordsToBeRemoved];
      } else if (wordsToBeRemoved.length === 1) {
        let p = str.shift();
        str.push(p);
        return str.join("") + "ay";
      } else if (!cluster) {
        break;
      }
    }
    if (wordsToBeRemoved.length > 1) {
      let bothArr = str.concat(arr);
      let remArr = bothArr.filter(
        (elem) => !arr.includes(elem) || !str.includes(elem)
      );
      return remArr.join("") + arr.join("") + "ay";
    }
  } else {
    return str + "way";
  }
  return str;
};

translatePigLatin("algorithm"); // algorithmway
translatePigLatin("paragraphs"); // aragraphspay

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
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

// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
// soln
const DNA = {
  A: ["A", "T"],
  T: ["T", "A"],
  C: ["C", "G"],
  G: ["G", "C"],
}; //space unit 1
const pairElements = (str) => {
  const arr = []; //space unit 1

  for (let i = 0; i < str.length; i++) {
    arr.push(DNA[str[i]]);
  } //space unit 1

  return arr;
};
pairElements("GCG"); //[["G", "C"], ["C","G"], ["G", "C"]]
// Time complexity is linear-O(n)

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

//soln2
const missingLetters = (str) => {
  let previousCharASCII = str.charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    // charCodeAt() converts strings to unicode values.
    let currentCharASCII = str.charCodeAt(i);

    if (currentCharASCII !== previousCharASCII + 1) {
      // String.fromCharCode() converts Unicode values to strings.
      return String.fromCharCode(previousCharASCII + 1);
    }

    previousCharASCII = currentCharASCII;
  }
};

missingLetters("abce"); //"d"
//time complexity-O(n)- linear.
