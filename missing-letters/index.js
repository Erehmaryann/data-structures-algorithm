//soln
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
