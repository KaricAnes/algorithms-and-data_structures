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
//word[0] je slovo "a" od rijeci anes npt

const capitalize = (str) => {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};

console.log(capitalize("aki short sentence ddffd"));
console.log(capitalize("ja sam anes"));
