// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//linear runtime => as n increases by 1, we have to do one more calculation
//O(n)

const fib = (n) => {
  let fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    //let i = 1; i < n; i++
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]); // -1 moramo staviti da ne bismo imali nan
  }
  return fibSeries[n];
};
console.log(fib(7));
