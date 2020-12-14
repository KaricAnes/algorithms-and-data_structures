// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const arrayOfStr = str.split("");
  let counts = {};
  for (let i = 0; i < arrayOfStr.length; i++) {
    let ch = arrayOfStr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(counts[5], counts[2], counts[9], counts[4]);
  return arrayOfStr;
};
console.log(maxChar("abbbbbbbc"));
