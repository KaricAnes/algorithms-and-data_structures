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

//najtezi solution
//koristit cemo recursion
//stair je ustvari row u nasoj square tabeli

/*
- if(row === n) then we have hit the end of our problem
- if the stair string has a length === n then we are at the end of a row
- If the lenght of the stair string is less then or equal to the row number we are working on, we add # 
else, we add a space

u stepSol1.js smo imali inner for loop za columns i na osnovu njega smo dodjeljivali # ili " "
sada cemo gledati duzinu stair-a, jer duzina staira nam govori na kojoj smo kolomi trenutno
dakle slican princip onom maloprije

ovaj drugi argument mora imati dodijeljenu vrijednost da ne bismo upali u neocekivane probleme

ako trebamo raditi nesto u rekurziji, najbolje je prvo pronaci iterative solution
pa onda pokusati sa rekurzijom
*/

/*
suma sumarum o rekurziji

rekurzivna funkcija je funkcija koja prima neki argument ili vise njih

ima base case/ zamku koja prekida funkciju da ne bismo imali infinite loop

ispisujemo sta name treba console/log(n)

pozivamo ponovo tu nasu funkciju, funkcija dakle poziva samu sebe

jako je bitno da toj nasij funkciji kada je ponovo pozivamo proslijedimo izmjenjene argumente ili
 bar jedan da izmjenimo, ne moramo sve. 2 ssu mijenjana u  stepSol2.js
da ne bismo upali u inifinite loop i da bismo se priblizili base case koji ce prekinuti funkciju
argumenti se moraju mijenjati svaki put kada pozivamo funkciju
*/

const steps2 = (n, row = 0, stair = "") => {
  debugger;
  if (n === row) {
    //base case/zamka
    //5 === 5 => prekida se funkcija
    debugger;
    return;
  }
  if (n === stair.length) {
    debugger;
    console.log(stair);
    //kad god dodjemo do kraja rowa, row uvecamo
    steps2(n, row + 1);
    return;
  }
  if (stair.length <= row) {
    debugger;
    stair += "#";
  } else {
    debugger;
    stair += " ";
  }
  debugger;
  steps2(n, row, stair);
};

steps2(2);
