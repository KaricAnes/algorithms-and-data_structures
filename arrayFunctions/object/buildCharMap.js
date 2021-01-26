//a)
const arrayOfStr = str.split("");
let counts = {};
for (let i = 0; i < arrayOfStr.length; i++) {
  let num = arrayOfStr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

//b)
const chars = {};
for (let char of str) {
  chars[char] = chars[char] ? chars[char] + 1 : 1;
}
