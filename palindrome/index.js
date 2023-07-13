const reverseDigits = (num) => {
  let rev_num = 0;
  while (num != 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num;
};

const isPalindrome =  (x) => {
  if (x < 0) {
    return false;
  }
  return reverseDigits(x) === x ? true : false;
};
