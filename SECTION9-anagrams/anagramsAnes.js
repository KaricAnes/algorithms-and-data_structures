// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//probao sam sa funkcijom includes ali ona provjerava da li postoji clan uopste, a ne da li se podudaraju
//rjesenje: prvo sam str prebacio u mala slova, pretvorio ga u arrayOfStrings preko splita(),
//onda sam sortirao array
//ukoliko je duzina arraya1 ista kao duzina arraya2 onda smo poredili odgovarajuceg
//clana arraya1[i] sa odgovarajucim clanom arraya2[i]
//ako nisu isti odmah vracamo false
//ako je sve isto idemo ispod i vracamo false

//alternativa funkciji za uklanjanje punctationsa: https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/

function anagrams(stringA, stringB) {
  const filterArray = (str) => {
    //napravio sam funkciju koja:
    let strToLowerCase = str.toLowerCase(); //konertuje sve u mala slova
    let arrOfStr = strToLowerCase.split("").sort(); //prima string i kokvertuje ga u array
    return arrOfStr.filter(
      //i filtriria taj array tako da izbaci iz njega spaces and punctations
      (e) => e !== " " && e !== "!" && e !== "." && e !== "?"
    );
  };
  arrOfStringsA = filterArray(stringA);
  arrOfStringsB = filterArray(stringB);

  //debugger;
  if (arrOfStringsA.length === arrOfStringsB.length) {
    //debugger;
    for (let i = 0; i < arrOfStringsA.length; i++) {
      if (arrOfStringsA[i] !== arrOfStringsB[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
console.log(anagrams("hello", "llohe"));
