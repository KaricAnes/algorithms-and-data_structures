// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n) => {
  debugger;
  if (n < 2) {
    //fib(0) je 0; fib(1) je 1
    //ako posaljemo u nasu funkciju ova 2 broja, odmah cemo ih dobiti nazad
    //u suprotnom upadamo u rekurziju
    debugger;
    return n;
  }
  debugger;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
