// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  let reversedString = str.split("").reduce((reversed, character) => {
    debugger;
    return character + reversed;
  }, "");
};

palindrome("kapak"); //[k,a,p,a,k]
