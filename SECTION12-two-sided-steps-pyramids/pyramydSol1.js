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

const pyramid = (n) => {
  const midpoint = Math.floor((n + n - 1) / 2); // 4.5 je 4; krecemo od nule pa nam odgovara i to
  debugger;
  for (let row = 0; row < n; row++) {
    debugger;
    let level = "";
    for (let col = 0; col < n * 2 - 1; col++) {
      debugger;
      if (midpoint - row <= col && midpoint + row >= col) {
        debugger;
        level += "#";
      } else {
        debugger;
        level += ".";
      }
    }
    debugger;
    console.log(level);
    debugger;
    //zasto bas ovdje console.log() =>  zato sto ce se okinuti prvi for loop() jednom
    //pa onda ovaj nested vise puta dok izbilda jedan level i onda silazimo u konzolu
    //onda se okida ponovi prvi for loop i silazimo u nested koji se okida vise puta dok izbilda novi levev
    //onda opet silazimo u konzolu
    //onda opet prvi loop se okida
    //pa nested vise puta i sidjemo u console.log i tjt
  }
};

pyramid(4);
