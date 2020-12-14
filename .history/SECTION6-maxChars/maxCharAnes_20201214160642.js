// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const arrayOfStr = str.split("");
  let counts = {};
  debugger;
  for (let i = 0; i < arrayOfStr.length; i++) {
    let num = arrayOfStr[i];
    debugger;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    debugger;
  }
let arrayOf = 
  
};
console.log(maxChar("1555555551"));
