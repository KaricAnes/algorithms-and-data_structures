// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//kad kazem fixni, mislim na result[startRow][i] = counter; --> ovdje je startRow fixni, a kolona je i
//prov imamo fixni startRow, a kolona se pomjera za + 1                        //startRow++;
//onda imamo fixnu endColumn, a row se pomjera + 1                           //endColumn--;
//onda imamo fixni endRow, a kolona se pomjera - 1, zato sto idemo unazad    //endRow--;
//onda imamo fixnu startColumn, a row se pomera za - 1, zato sto idemo unazad  //startColumn++;

//sta god je bilo fixno, odmah ispod je uvecano ++, ili smanjeno. npr.     startRow++; endRow--;

const matrix = (n) => {
  let result = new Array(n).fill().map(() => new Array(n).fill("")); // create empty n x n array
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  console.log(result);
  while (startRow <= endRow && startColumn <= endColumn) {
    //debugger;
    //punjenje reda sa lijeva na desno
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
      //debugger;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      //punjenje posljednje kolone od vrha ka dnu
      result[i][endColumn] = counter;
      counter++;
      //debugger;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      //punjenje zadnjeg rowa sa desna na lijevo
      result[endRow][i] = counter;
      counter++;
      //debugger;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      //punjenje prve kolone od vrha ka dnu
      result[i][startColumn] = counter;
      counter++;
      //debugger;
    }
    startColumn++;
  }
  return result;
};
matrix(5);
