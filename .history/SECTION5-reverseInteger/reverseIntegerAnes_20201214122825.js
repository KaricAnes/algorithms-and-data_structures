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
  let str = n.toString().split("").reverse().join("");
  let reversedNum  = parseInt(str);
  if (n > 0) {
    reversedNum = parseInt(str);
  } else {
      reversedNum = parseInt(str) * (-1);
  }

  //console.log(typeof reversedNum);
  else return reversedNum;
};
console.log(reverseInt(-123));
