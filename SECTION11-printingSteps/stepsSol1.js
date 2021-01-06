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

//ako malo bolje pogledamo uvijek cemo imati tabelu, koja je square tabela
//u maloj plavoj svesci imam nacrtanu tabelu koja ima rowowe i kolone
//na osnovu njih stair-u dodajemo novu vrijednost
//najbitnije je da uvidimo da je tabela kvadratna i da u njoj pronadjemo pattern

const steps2 = (n) => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
};

steps2(5);
