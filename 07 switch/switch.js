for (let i = 77; i <= 777; i++) {
  if (i % 23 === 0) {
    console.log(i);
    break;
  }
}

console.log("FOR/BREAK: Rasti trečią skaičių pradedant 5 iki 100 ", "kuris be liekanos dalijasi iš 3?");

let threeCount = 0;
for (let i = 5; i <= 100; i++) {
  if (i % 3 === 0) {
    threeCount++;
    console.log(threeCount, i);
  }
  if (threeCount == 3) break;
}

console.log("WHILE: Rasti trečią skaičių pradedant 5 iki 100 ", "kuris be liekanos dalijasi iš 3?");

threeCount = 0;
let i = 5;
do {
  if (i % 3 === 0) {
    threeCount++;
    console.log(threeCount, i);
  }
  i++;
} while (threeCount < 3 && i <= 100);

console.log("WHILE: Awesome pavyzdys");

let sk = 4;
let c = -3;

do {} while (++sk % 3 || ++c);
console.log(sk);

console.log("Continue a :-----------------------");

for (let i = 1; i <= 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log("ciklo nr:", i);
  // continue
}

console.log("Continue b :-----------------------");

// Kad console.log spausdintų visus skaičius, kurie nesidalina
//iš 3 (su continue)

// Kad spausdinimas nutrūktų kai i yra daugiau nei 40 (su break)

for (let i = 1; i <= 111; i++) {
  if (!(i % 3)) {
    continue;
  }
  console.log(i);
  if (i == 40) break;
}
