// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//reduce se koristi da uzme sve razlicite vrijednosti iz jedno arraya i da ih pretvori u jedan single value
//Mi upravo to i zelimo da uradimo, da uzmemo sve vrijednosti iz arraya i pretvorimo ih u jednu
//ovo je najkompleksniji nacin pomocuu kojeg cemo pokazati da smo prekucali reverseString

//reduce is array helper like every()
//because of taht we converted string to array and then applied reduce
//we use reduce when we have array and we want to calculate sth based on array memmebrs and get
//single result
//[a,b,c,d] --> dcba
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    debugger;
    return character + reversed;
  }, "");
}
//drugi argument je starting initial value
//Sada svaki put kada se reduce rana, it's going to take this starting argument, proslijedit ce ga arrow funkciji,
//i sta god da bude vraceno iz funkcije, bit ce koristeno asljedeci put kao initial argument i bit ce proslijedjeno
//gore u arrow function
console.log(reverse("abcd")); //[a,b,c,d]
