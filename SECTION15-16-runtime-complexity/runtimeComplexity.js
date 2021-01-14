/*
Do sada smo sami odlucivali, koji solution je najbolji za neki zadatak.
To smo odlucivali na osnovu toga:
 - koji je kod laksi za razumjeti
 - koji solution bolje izgleda

 Medjutim postoji nacin za poredjenje solution-a koji je mnogo konkretniji od onoga sto mi radimo 'od oka'

 U ovom section-u cemo istraziti taj nacin poredjenja solution-a
 Sada cemo poceti sa istrazivanjem: Runtime Complexity

 Runtime Complexity
  - describes the performance of an algorithm
  - How much more processing power/time is required to run your algorithm if we double the inputs?
  ' pretpostavljam da ce izmjeriti power/time za 5 inputa, onda npr za 10 itd...'

  Intervier nas moze pitati da rijesimo neki zadatak, i kada ga rijesimo moze nas pitati koji je 
  runtime complexity naseg solution-a?

  - Cilj mi je da imam sposobnost da identifikujem runtime complexity
*/

/*ovo mozemo identifikovati kao linear runtime
jer svaki put kada dodamo jedan element u nas stirng, to ce znaciti da ce nasa for loop morati
da odradi jedan dodatni korak

obicno ako imamo for loop (0 do array.lenght) => imamo posla sa linear runtime
*/
function reverse(str) {
  let reversedString = ""; //a  //ba //cba //dcba
  for (let character of str) {
    debugger;
    reversedString = character + reversedString;
  }
  return reversedString;
}
console.log(reverse("abcd"));

/*
ovdje ako n uvecamo za 1, imat cemo mngo vise posla
- kada je n = 2 => proizvedemo 4 elementa
- kada je n = 3 => proizvedemo 9 elemenata
- kada je n = 4 => proizvedemo 16 elemenata

ovdje ocigledno nije one-to-one relationship izmedju inputa u nas algoritam, i kolicine processing powera
koji mora biti ulozen

ovjde ocigledno imamo posla sa squared runtime complexity ili quadratic runtime N^2

handshake proble, every additional member needs to have contact with every existing member
*/
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

//U wordu u React biljekskama u sectionu 15 imam najcesce tipove runtime-a

/*
                                 Big O Notation

Intervier nas moze piatati koji je runtime complexity naseg solution-a?
Takodjer nas moze mitati koji je BIG O naseg solution-a?

O(n) => linear
O(1) => constant
O(n^2) => Quadratic

Runtime i Big O su u biti iste stvari

Identifying runtime complexity =>  jednostavno objasnje imamo u wordu u section 15 u React biljeskama

*/
