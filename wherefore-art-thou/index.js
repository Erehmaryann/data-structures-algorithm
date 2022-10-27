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
