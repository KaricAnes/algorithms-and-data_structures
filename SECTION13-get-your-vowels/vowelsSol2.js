// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//rjesenje sa regexom

const vowels = (str) => {
  const matches = str.match(/[aeiou]/gi); //[] obavjesti nas ako ima ijedan karakter iz [aeoiu]
  //g oznacava da ne stane kada nadje prvi match
  //i oznacava insensitive, tako da ne moramo prebacivati sve u mala slova
  console.log(matches); //["i", "e", "e"]
  return matches ? matches.length : 0;
  //match vraca null ako ne nadje nista, zato smo mi stavili nulu 0
};
vowels("Hi There!");

//match() se koristi da vidimo da li se nesto nalazi u odredjenom stringu
