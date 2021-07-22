function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = rand(1, 20);

// while (i != 5) {
//   i = rand(1, 20);
//   console.log(i);
// }

// do {
//   i = rand(1, 20);
//   console.log(i);
// } while (i != 5);

function print(x) {
  console.log(x);
}

console.log("----------1 užd-----------");

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);
console.log(a, b, c);
let suma = a + b + c;
console.log("Suma: ", suma);

//let stringas = a.toString() + b.toString() + c.toString();
let stringas = "" + a + b + c;
console.log("string: ", stringas);

stringas = a + " " + b + " " + c;
console.log(stringas);

stringas = stringas + " - " + suma;
console.log("Stringas ir skaičių suma: ", stringas);

console.log("----------2 užd-----------");

let f = rand(5, 10);
console.log(f);

console.log("----------3 užd-----------");

let labas = "Labas";
for (let i = 5; i; i--) {
  console.log(labas);
}

console.log("----------4 užd-----------");

for (let i = 7; i; i--) {
  console.log(f);
}

console.log("----------5 užd-----------");

for (let i = 0; i < f; i++) {
  console.log(f);
}

console.log("----------6 užd-----------");

if (f > 7) {
  for (let i = 0; i < f; i++) {
    console.log(f);
  }
} else console.log("Skaičius mažiau nei 7: ", f);

console.log("----------7 užd a-----------");

let a7;

for (let i = 5; i; i--) {
  a7 = rand(10, 20);
  console.log(a7);
}

console.log("----------7 užd b-----------");

a7 = 0;

for (let i = 5; i; i--) {
  let j = rand(10, 20);
  console.log(j);
  a7 += j;
}
console.log("suma: ", a7);

console.log("----------7 užd c-----------");

let stringas7c = "";

for (let i = 5; i; i--) {
  stringas7c += rand(10, 20) + " ";
}
console.log(stringas7c);

console.log("----------7 užd d-----------");

let stringas7d = "";
let suma7d = 0;

for (let i = 5; i; i--) {
  let j = rand(10, 20);
  stringas7d += j + " ";
  suma7d += j;
}
console.log(stringas7d, " Suma: ", suma7d);

console.log("----------8 užd -----------");

let a8;
let iteracijos = 0;
let suma8 = 0;
let nesuma = 0;
let lyg = 0;
let nelyg = 0;

do {
  let i = rand(10, 25);
  a8 = i;
  console.log(a8);
  iteracijos++;
  i > 18 ? (suma8 += i) : (nesuma += i);
  i % 2 ? nelyg++ : lyg++;
} while (a8 > 12);

console.log("iteracijų (b): ", iteracijos);
console.log(" Sumuota (c): ", suma8);
console.log(" Nesumuota (d): ", nesuma);
console.log("Lyginių (e): ", lyg, " Nelyginių: ", nelyg);

console.log("----------8 užd f------------");

let log = "";
do {
  iteracijos = 0;
  do {
    let i = rand(10, 25);
    a8 = i;
    iteracijos++;
  } while (a8 > 12);
  log += iteracijos + " ";
} while (iteracijos < 15);
console.log("Įteracijų seka: ", log);

console.log("----------9 užd ------------");

let a9;
let vidCiklas = 0;
let isorCiklas = 0;
stringas = "";

do {
  a9 = rand(5, 10);
  for (let i = a9; i; i--) {
    vidCiklas++;
  }
  stringas += a9 + " ";
  isorCiklas++;
} while (a9 != 5);
console.log(stringas);

console.log("Vidinių ciklų: ", vidCiklas, "Išorinių ciklų: ", isorCiklas);

console.log("----------9c užd ------------");

let a9b;
vidCiklas = 0;
isorCiklas = 0;
let fiveCount = 0;
stringas = "";

do {
  a9b = rand(5, 10);
  for (let i = a9b; i; i--) {
    vidCiklas++;
  }
  stringas += a9b + " ";

  isorCiklas++;
  a9b == 5 ? fiveCount++ : true;
} while (fiveCount < 3);
console.log(stringas);

console.log("Vidinių ciklų: ", vidCiklas, "Išorinių ciklų: ", isorCiklas);

console.log("----------10 užd ------------");

let petrasScore = 0;
let kazysScore = 0;
let count = 0;

do {
  petrasScore += rand(10, 20);
  kazysScore += rand(5, 25);
  count++;
} while (petrasScore < 222 && kazysScore < 222);
petrasScore > kazysScore ? console.log("Laimėjo Petras: ", petrasScore, " Kazys surinko: ", kazysScore) : console.log("Laimėjo Kazys: ", kazysScore, " Petras surinko: ", petrasScore);
console.log("Suzaista raundų: ", count);
