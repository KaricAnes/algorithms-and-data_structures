// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//alternativa funkciji za uklanjanje punctationsa: https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/
//vrlo cesto nam treba char mapa a to je ustvari: {a: 1, b: 3}
//str.replace(/[^\w]/g, "").toLowerCase()) ako nadjes bilo sta da nije broj ili slovo replace it with ""

//If we are iterating throught array we use for (let char of arr)
//If we are iterating throught object/map we use for (let char in obj)

const anagrams = (stringA, stringB) => {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);
  console.log(charMapA, charMapB);
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    //prva zamka
    return false;
  }
  for (let char in charMapA) {
    //charMapA =  {3: 1, h: 2, e: 3}

    debugger;
    if (charMapA[char] !== charMapB[char]) {
      //druga zamka
      //charMapA[char] je value od 'a' keya npr 2
      //charMapB[char] je value od 'a' keya npr 1
      //ako nisu isti vracamo false
      //dakle poredimo 'value od a' iz charMapA sa 'value od a' iz charMapB
      debugger;
      return false;
    }
  }
  return true;
};

const buildCharMap = (str) => {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    //iznad objasnjeno
    //debugger;
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    //debugger;
  }
  return charMap;
};
console.log(anagrams("haha2", "haha3"));
