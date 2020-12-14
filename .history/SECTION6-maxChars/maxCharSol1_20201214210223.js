//Tehniku iz ovog zadatka mozemo koristiti i za:
//What is the most common character in the string?
//Does string A have the same characters as string B (is it an anagram)?
//Does the given string have any repeated characters in it? trazimo duplikate --> nece moci reduce ovdje

//Dakle ovu tehniki mozemo da koristimo za bilo koji zadatak koji zahtjeva:
//counting the number of characters
//ili comparing the number of characetrs btw two strings

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//let char of string 

const maxChar = (str) => {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  return chars;
};
console.log(maxChar("Hello There!"));
