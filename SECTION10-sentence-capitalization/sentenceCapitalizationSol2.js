// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//slice
/*
const word = "there";
console.log(word.slice(2)); //ere
*/

const capitalize = (str) => {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      result += " " + str[i + 1].toUpperCase();
      i++; //Jja Ssam Aanes, tako je bilo bez ovog
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(capitalize("ja sam anes"));
