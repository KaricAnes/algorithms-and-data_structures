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
  let str;
  let reversedNum;
  if (n > 0) {
    str = n.toString().split("").reverse().join("");
    reversedNum = parseInt(str);
  }

  //console.log(typeof reversedNum);
  return reversedNum;
};
console.log(reverseInt(-123));
