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
