// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//str.split(" ") => svaka rijec ce biti zaseban element u arrayu, to je zbog " " razmaka
//str.split("") => svako slovo ce biti zaseban element u arrayu, to je zbog "" nema razmaka
//arrOfStrings.join("") => sva slova cemo spojiti u jednu rijec, izmedju slave dakle nece biti razmaka
//capitalizedSentence.join(" ") => svi array elemeti ce se spojiti ali ce izmedju njih biti razmak

const capitalize = (str) => {
  let capitalizedSentence = [];
  const arrOfWords = str.split(" ");
  for (let i = 0; i < arrOfWords.length; i++) {
    let word = arrOfWords[i];
    let arrOfStrings = word.toLowerCase().split("");
    //debugger;
    let firstLetter = arrOfStrings[0].toUpperCase();
    arrOfStrings[0] = firstLetter;
    let capitalizedWord = arrOfStrings.join("");
    //debugger;
    capitalizedSentence.push(capitalizedWord);
    //debugger;
  }
  return capitalizedSentence.join(" ");
};

console.log(capitalize("aki short sentence"));
