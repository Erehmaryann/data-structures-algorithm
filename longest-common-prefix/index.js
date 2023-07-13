const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  // Iterate through the remaining strings in the array starting from the second string (index 1)
  for (let i = 1; i < strs.length; i++) {
    // For each string, compare it with the "prefix" by checking if it starts with the "prefix".
    const currentStr = strs[i];
    //If the current string does not start with the "prefix", remove the last character from the "prefix" and repeat the comparison until the current string starts with the "prefix"
    // If the "prefix" becomes an empty string during the iteration, it means there is no common prefix among the strings. return an empty string ("") in this case.
    // After iterating through all the strings, the "prefix" will contain the longest common prefix among the strings. return "prefix" as the output of the function.
    while (!currentStr.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
