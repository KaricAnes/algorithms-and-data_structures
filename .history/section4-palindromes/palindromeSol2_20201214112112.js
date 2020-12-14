// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//every: turn string into array and then use this every helper on it
//every je array helper kao sto je i reduce
//every vraca true ili false
//every se zove tako, zato sto da bi vratilo true svaki element mora zadovoljiti uslov
//npr. zadatak za every: is 'every' value in array greater than 5
//array.every((val)=> val > 5)
const palindrome = (str) => {
  str.split("").every((char, i) => {
    //char je svaki karakter u nasem stringu. Ide se redom bukvalno.
    //a preko i -> indexa zelimo da dodjemo do mirror chara na drugoj strani i da vidimo jesu li isto
    //dolaak do mirror chara na drugoj strani je malo kompleksno
    //i krece od nule
    return char === str[strl];
  });
};

console.log(palindrome("abbca"));
