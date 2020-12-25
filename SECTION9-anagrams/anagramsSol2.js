// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Rijesili smo tako sto smo string pretvorili u mala slova, pa u array preko splita, pa ga sortirali i vratili nazad u string
//onda smo samo uporedili dva stringa da li su jednaka

const anagrams = (stringA, stringB) => {
  return filterStr(stringA) === filterStr(stringB);
};

const filterStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
console.log(anagrams("anes!", "anse? ;"));
