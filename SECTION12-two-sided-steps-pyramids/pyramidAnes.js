// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//evo kako sam dolazio do nekih patterna, ako uporedimo sa pyramid(1/2/3/4/5) vidjet cemo da je pattern tacan

/*         slice(n - 1 + i)
          substring(0, n - i)                         hash += "##";
     '  #  '   //2 tacke                                 1 hash
     ' ### '   //1 tacka                                 3 hasha
     '#####'   //0 tacki                                 5 hashova

*/

/*
koristio sam obrnutu logiku, prvo sam napunio cijeli pyramidRow

dakle shvatio sam da svaka piramida ima rowowa koliki je n

shvatio sam da je firstPartOfPyramidRow ima n - 1 tacki u svakom rowu
shvatio sam da se u svakom rowu broj hashova uvecava za 2 osim u prvom rowu koji ima fixno samo 1
shvatio sam da je i secondPartOfPyramidRow ima n - 1 tacki u svakom rowu

onda sam spojio firstPartOfPyramidRow + hash + secondPartOfPyramidRow

mogao sam ovo sve spojti da bude jedan row ali bi bilo tesko shvatiti sta se dogadja
*/

const pyramid = (n) => {
  let pyramidRow = "";
  let lenhthOfRow = n + n - 1; //na osnovu tabele sam otkrio ovaj pattern
  let firstPartOfPyramidRow = "";
  let hash = "#";
  let secondPartOfPyramidRow = "";
  let newWord = "";

  while (pyramidRow.length < lenhthOfRow) {
    pyramidRow += ".";
  }
  for (let i = 1; i <= n; i++) {
    //n oznacava broj redova
    //hocu da formiram rows u piramidama, koliki je n => toliko rowova trebam
    firstPartOfPyramidRow = pyramidRow.substring(0, n - i); //nasao sam pattern da je n-i broj spaeova u svako pyramid rowu
    secondPartOfPyramidRow = pyramidRow.slice(n - 1 + i); //bez - 1 ide previse ka kraju i fali mu 1 onda
    if (i !== 1) {
      //hash je prvi put jedan, a onda dodajemo + ## dva hasha
      hash += "##";
    }
    newWord = firstPartOfPyramidRow + hash + secondPartOfPyramidRow;
    console.log(newWord);
  }
};

pyramid(3);
