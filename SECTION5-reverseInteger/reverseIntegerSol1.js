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
  return parseInt(reversedStr) * Math.sign(n);
};
console.log(reverseInt(-500));
