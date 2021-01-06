//osnove rekurzije
//u rekurziji uvijek startamo sa nekim tipom funkcije
//zelimo da napravimo recursive function printNumber()
//proslijedit cemo funkciji neki broj, on ce printati od tog broja ka nuli nazad

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

const printNumber = (n) => {
  //10  //9  //8  //7  //6 //0
  if (n === 0) {
    return; //ovo je base case (zamka), i najbolje ga je na pocetku uvijek definisati
  } //ako nam neko posalje nulu, nemamo sta dalje raditi; kad nas argument bude 0, funkcija se prekida

  console.log(n); //10 9 8 7 ... 3 2 1
  printNumber(n - 1); //rekurzivna funkcija je funkcija koja poziva samu sebe
  //jako je bitno da promjenimo argumente koje saljemo nazad funkciji (n - 1)
};
printNumber(10);
