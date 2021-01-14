// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
memoization 

Store the arguments of each function call along with the result.
If the function is called again with same arguments, return the precomputed result, rather than
running the function again.

Pomocu memoizacije, sprecavamo da se nasa funkcija ran-a vise puta sa istim argumentima. 
Umjesto toga, mi spasimo u memoriji argumente koji su proslijedjeni nasoj funkciji, spasimo i rezultat.
Ako poslije ponovo nasa funkcija primi iste argumente, mi cemo samo vratiti rezultat umjesto da cijelu 
funkciju ponovo runamo. 
*/

/*

  √ Fib function is defined (3 ms)
  √ calculates correct fib value for 1
  √ calculates correct fib value for 2 (1 ms)                              ==> 1 ms
  √ calculates correct fib value for 3
  √ calculates correct fib value for 4
  √ calculates correct fib value for 15 (922 ms)                           ==> 922 ms -- velika razlika

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.411 s
Ran all test suites matching /fib\\test.js|–watch/i.
*/

/*
  √ Fib function is defined (4 ms)
  √ calculates correct fib value for 1 (1 ms)
  √ calculates correct fib value for 2 (1 ms)
  √ calculates correct fib value for 3
  √ calculates correct fib value for 4 (1 ms)
  √ calculates correct fib value for 15 (1 ms)              ==> sa memoization smo popravili performance

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.082 s, estimated 3 s
Ran all test suites matching /fib\\test.js|–watch/i.
*/

function memoize(fn) {
  const cache = {};
  return function (...args) {
    //ne znamo koliko ce args biti, zelimo sve uzeti ...args
    //ova funkcija ce primiti argumente koji su namijenjeni slowFib-u
    if (cache[args]) {
      //ako u cachu vec postoje ovi argumenti, vrati rezultat
      return cache[args];
    }

    //ako ne postoje ovi argumenti, dodaj ih u cache objekat
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const slowfib = (n) => {
  debugger;
  if (n < 2) {
    //fib(0) je 0; fib(1) je 1
    //ako posaljemo u nasu funkciju ova 2 broja, odmah cemo ih dobiti nazad
    //u suprotnom upadamo u rekurziju
    debugger;
    return n;
  }
  debugger;
  return fib(n - 1) + fib(n - 2); //kada radimo rekurzivno, trebamo pozivati memoized version a ne original slowFib
};
const fib = memoize(slowfib);
console.log(fib(5));
