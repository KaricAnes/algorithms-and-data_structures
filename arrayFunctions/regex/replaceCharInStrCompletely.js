//kada zelimo da u jednom stringu zamjenimo jedan element sa drugim gdje god da se pojavljuje:

let string = "ja sam anes";
string = string.replace(/ /g, "."); //ovdje mijanjamo space sa tackom: ja.sam.anes
console.log(string);

let string2 = "ja sam anes";
string2 = string2.replace(/ /g, ""); //ovdje smo izbacili spaceove: jasamanes
console.log(string2);
