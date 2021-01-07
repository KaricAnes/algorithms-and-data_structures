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

//pukusati naci rjesenje sa duplim for loopom

const pyramid = (n, row = 0, col = 0, level = "") => {
  //debugger
  if (n === row) {
    //base case/zamka
    //debugger
    return;
  }

  if (col === n * 2 - 1) {
    //if (level.length === 2 * n - 1) mogli smo staviti i ovaj uslov
    //debugger
    console.log(level);
    //kad god dodjemo do kraja rowa, row uvecamo. dakle kad predjemo sve kolone u jednom rowu
    //ovo nam ustvari ispisuje  rezultat
    //debugger
    pyramid(n, row + 1);
    return;
  }
  const midpoint = Math.floor((n + n - 1) / 2); // 4.5 je 4; krecemo od nule pa nam odgovara i to

  if (midpoint - row <= col && midpoint + row >= col) {
    //debugger
    level += "#";
    //debugger
    pyramid(n, row, col + 1, level); //bitno je da uvecam kolonu kad dodam nesto u nju
  } else {
    //debugger
    level += ".";
    pyramid(n, row, col + 1, level); //bitno je da uvecam kolonu kad dodam nesto u nju
  }
};

pyramid(5);
