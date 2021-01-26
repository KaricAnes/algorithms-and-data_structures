//regex koji ostavlja samo brojeve i slova

let str = "a.l)[<>x54=+*-/,.1!%^&*@#$";
let filteredStr = str.replace(/[^\w]/g, "");

console.log(str); //a.l)[<>x54=+*-/,.1!%^&*@#$
console.log(filteredStr); //alx541   => ostali su samo brojevi i slova

let fileredAndSortedStr = str
  .replace(/[^\w]/g, "")
  .toLowerCase()
  .split("")
  .sort()
  .join("");

console.log(fileredAndSortedStr); //145alx   u sortiranju brojevi imaju prednost nad slovima
