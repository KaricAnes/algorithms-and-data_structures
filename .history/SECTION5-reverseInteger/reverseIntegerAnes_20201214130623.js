// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
  let reversedStr = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversedStr) * -1;
  }
//  return parseInt(reversedStr);
};
console.log(reverseInt(-500));
