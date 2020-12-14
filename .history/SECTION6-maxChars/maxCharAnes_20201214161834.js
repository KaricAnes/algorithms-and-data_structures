// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const arrayOfStr = str.split(""); //[1, 5, 5, 5, 5, 1]
  let counts = {}; //{1:2, 5:6}
  //debugger;
  for (let i = 0; i < arrayOfStr.length; i++) {
    let num = arrayOfStr[i];
    //debugger;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    //debugger;
  }
  let max = Object.keys(obj).reduce(function (a, b) {
    return counts[a] > obj[b] ? a : b;
  });

  return max;
};
console.log(maxChar("15555555555551"));
