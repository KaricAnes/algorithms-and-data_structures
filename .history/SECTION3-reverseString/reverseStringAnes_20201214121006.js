function reverse(str) {
  let reversedString = "";
  let strLength = str.length; //4
  for (let i = strLength - 1; i >= 0; i--) {
    //str[4] je undefined; str [3] je d. zato sam stavio strLength - 1
    //debugger;
    reversedString = reversedString + str[i]; //sto je nekad bio, plus novo. Dok nije bilo ovo, samo mi je zadnje slovo vracao. Tj. a
  }
  //reversedString = str[3] + str[2] + str[1] + str[0]; //manuelno rijesen zadatak
  return reversedString;
}
console.log(reverse("abcd");
