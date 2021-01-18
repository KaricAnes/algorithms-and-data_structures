const datum = new Date(2010, 11, 24);

let year = datum.getFullYear();
console.log(year); //2010

let month = datum.getMonth();
console.log(month); //11

let day = datum.getDay();
console.log(day); //5 ==> petak

let date = datum.getDate();
console.log(date); //24

let currentDate = new Date();
console.log(currentDate); //Thu Jan 14 2021 15:52:16 GMT+0100 (srednjoeuropsko standardno vrijeme)
