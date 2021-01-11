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

//this code does not work
//this was just preparation

const matrix = (n) => {
  let matrix = [];
  let firstRow = [];
  for (let i = 1; i <= n; i++) {
    firstRow.push(i);
  }
  matrix.push(firstRow);
  for (let row = 0; row < n - 1; row++) {
    //n - 1  zato sto je firstRaw vec definisan gore iznad

    let arrRow = [];

    for (let col = 0; col < n; col++) {
      if (col === n - 1) {
        //ako smo u zadnjoj koloni, zelimo dodati n + row

        arrRow.push(n + row + 1);
      } else {
        arrRow.push(".");
      }
      if (col === n - 1 && arrRow.length === n && row === n - 2) {
        let lastElemetinLastRowInMatrix = arrRow[n - 1];

        console.log(lastElemetinLastRowInMatrix);
        arrRow = [];
        for (let i = n; i > 0; i--) {
          arrRow.push(lastElemetinLastRowInMatrix - 1 + i);
        }
      }
      if (col === 0 && row === n - 2 && arrRow.length === n) {
        console.log(matrix);
      }
    }

    matrix.push(arrRow); //evo zasto ne mogu da uhvatim zadnji row. U matrix jos nije gurnut
  }
  console.log(matrix);
};
matrix(7);
