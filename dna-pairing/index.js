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
