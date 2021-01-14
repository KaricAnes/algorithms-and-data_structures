// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n, fibSeries = [0, 1], i = 2) => {
  //debugger
  if (n === fibSeries.length - 1) {
    //debugger
    console.log(fibSeries[n]);
    return fibSeries[n];
  }

  el = fibSeries[i - 2] + fibSeries[i - 1];
  //debugger
  fibSeries.push(el);
  //debugger
  i++;
  fib(n, fibSeries, i);
  //debugger
};
fib(8);
