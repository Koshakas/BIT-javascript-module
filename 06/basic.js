function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log("---------1-----------");

// for (let i = 0; i < 5; i++) {
//   console.log("Labas", i);
// }
console.log("---------Absurdo laikrodis-----------");

let val;
let min;
let sek;

let valCount = 0;
let minCount = 0;
let secCount = 0;

let stopSekundes = rand(0, 59);
let stopMinutes = rand(0, 59);
let stopValandos = rand(0, 23);

for (val = 0; val < 24; val++) {
  for (min = 0; min < 60; min++) {
    for (sek = 0; sek < 60; sek++) {
      secCount++;
      if (sek == stopSekundes) break;
    }
    minCount++;
    if (min == stopMinutes) break;
  }
  valCount++;
  if (val == stopValandos) break;
}

console.log("Didelių ciklų:", valCount, "Vid ciklų:", minCount, "mazuju ciklų:", secCount);
console.log("Laikrodis rodo:", stopValandos, ":", stopMinutes, ":", stopSekundes);
