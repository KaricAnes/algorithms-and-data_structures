// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//reduce is array helper like every

const palindrome = (str) => {
  let reversedString = str.split("").reduce((reversed, character) => {
    // debugger;
    return character + reversed;
  }, ""); //prvi karakter i prije nego udjemo u string kapak ce biti d, rez: kapakd
  //const reversedString = str.split('').reverse().join('');
  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("abbca"));
