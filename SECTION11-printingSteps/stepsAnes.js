// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//isao sam obrnutom logikom
//prvo sam string napunio sa " " onoliko koliko je definisan n
//onda sam iscupao firstPartOfWord i sve spacove iz njega zamjenio sam # preko regexa
//onda sam iscupao secondPartOfWord preko slice-a koji uzima sve lementa od i pa do kraja stringa
//onda sam spojio first i second parts i ispisao newWord

const steps2 = (n) => {
  let string = ""; //.....
  let emptySpace = " ";
  let newWord = "";
  while (string.length < n) {
    //.....
    string += emptySpace;
  }
  for (let i = 1; i <= n; i++) {
    let firstPartOfWord = string.substring(0, i);
    firstPartOfWord = firstPartOfWord.replace(/ /g, "#"); //ovo zamjeni sve spaceove sa '#'
    // debugger;
    let secondPartOfWord = string.slice(i); // uzima od 1 do kraja sve clanove
    debugger;
    newWord = firstPartOfWord + secondPartOfWord;
    console.log(newWord);
  }
};

steps2(5);
