/*The match() method searches a string for a match against a regular expression,
 and returns the matches, as an Array object.

 ako ne nadje nista, match vraca null
 zato moramo koristiit ovo: return matches ? matches.length : 0;
*/
let str = "The rain in SPAIN stays mainly in the plain";

//brojanje koliko puta se rijec ain pojavila u stringu
var res = str.match(/ain/g);
console.log(res); //(3) ["ain", "ain", "ain"] AIN nije prepoznao je uppercase

//brojanje koliko puta se pojavio samoglasnik u stringu
const matches = str.match(/[aeiou]/gi);
//[] obavjesti nas ako ima ijedan karakter iz [aeoiu], a ne samo cijela rijec kao u primjeru iznad
//g oznacava da ne stane kada nadje prvi match
//i oznacava insensitive, tako da ne moramo prebacivati sve u mala slova
console.log(matches); //["e", "a", "i", "i", "A", "I", "a", "a", "i", "i", "e", "a", "i"]
//ako zelimo da znamo koliko ih ima, samo spucamo matches.lenth
console.log(matches.length); //13

//brojanje l koliko puta se pojavilo u sentence
let sentence = "Hello world from Sarajevo";
const matches2 = sentence.match(/[l]/gi);
const counts = matches2 ? matches2.length : 0;
console.log(counts); // na ovaj nacin smo prebrojali koliko puta se slovo l pojavilo u sentence stringu
