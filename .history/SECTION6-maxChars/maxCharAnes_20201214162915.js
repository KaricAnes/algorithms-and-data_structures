// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const arrayOfStr = str.split(""); //[1, 5, 5, 5, 5, 1] konvertovao u array
  let counts = {}; //{1:2, 5:6, d: 8}
  //debugger;
  for (let i = 0; i < arrayOfStr.length; i++) {
    //napravio objekat counts sa ocurences //{1:2, 5:6}
    let num = arrayOfStr[i];
    //debugger;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    //debugger;
  }
  let max = Object.keys(counts).reduce(function (a, b) {
    //reduce koristimo na arrayu, kada nam treba single value
    //a = "1", b = "5"
    /*
    1: 2
    5: 1
    d: 6
    */
    debugger;
    return counts[a] > counts[b] ? a : b;
    //vrati mi a ako je njegov value counts[a] veci od value b counts[b]. U suprotnom, vrati mi b
  });

  return max;
};
console.log(maxChar("15dddddd1"));
