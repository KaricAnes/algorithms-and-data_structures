// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//rjesenje koje najvise slici mom rjesenju

function reverse(str) {
    let reversedString = ""; //a  //ba //cba //dcba
    for (let character of str) {
      debugger;
      reversedString = character + reversedString;
    }
    return reversedString;
  }
  console.log(reverse("abcd"));
  