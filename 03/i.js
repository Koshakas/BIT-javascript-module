function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);

console.log("a: " + a + " b: " + b + " c: " + c);

if (a > b && a > c) {
  console.log("Suma b + c: ", b + c);
} else if (b > c) {
  console.log("Suma a + c: ", a + c);
} else {
  console.log("Suma a + b: ", a + b);
}

let d = rand(2, 10);
let e = rand(2, 10);

console.log("--------Egzameno rezultatas-----------");

let result = rand(1, 10);
console.log(result);
if (result < 4) console.log("Egzamenas neišlaikytas");
else console.log("Egzamenas išlaikytas");

console.log("--------Eksperimentas-----------");
//2.

let eksperimentoRezultatas = rand(1, 4);

// I6vesti eksperimento rezultatą ir sprendimą ar pavyko.
//Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

console.log(eksperimentoRezultatas);
if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4) console.log("Eksperimentas pavyko");
else console.log("Eksperimentas nepavyko");

console.log("--------Bauda-----------");
//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį,
//jeigu greiti didesnis nei 60. Bauda yra
//viršytas greitis X 5

console.log(automobilioGreitis);
if (automobilioGreitis > 60) {
  console.log("bauda už viršytą greitį: ", (automobilioGreitis - 60) * 5);
} else console.log("Greitis neviršytas");

//4.
console.log("--------Porinis neporinis-----------");
let eilesNumeris = rand(1, 30);

//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar
//neporinė

console.log(eilesNumeris);
if (eilesNumeris % 2 == 0) console.log("Lygine eilė");
else console.log("Nelygine eilė");

console.log("--------raide ABC-----------");
//5.

let raideABC = String.fromCharCode(rand(65, 67));

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę
//raidę A, B ar C ir priskirti ją kintamajam raideABC.
//Kintamąjį išvesti į konsolę

console.log(raideABC);

console.log("--------sandauga ar suma-----------");
//6.

let pirmas = rand(0, 3);

let antras = rand(0, 3);

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių
//sandauga ar suma

console.log(pirmas, antras);
if (pirmas * antras > pirmas + antras) console.log("didesnė sandauga", pirmas * antras);
else if (pirmas * antras < pirmas + antras) console.log("didesnė suma", pirmas + antras);
else console.log("sandauga ir suma lygūs");

console.log("--------asilai ir karvės-----------");
//7.

let asilai = rand(0, 2);

let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti
//rezultatą "gyvulių yra" kai yra nors viena
// karvė ar asilas arba "gyvulių nėra" jeigu //
//nėra nei karvių nei asilų

console.log("asilų:", asilai, "karvių: ", karves);
if (asilai || karves) console.log("gyvulių yra");
else console.log("gyvulių nėra");

console.log("--------Dalyviai-----------");

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo",
//jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra
//vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

console.log(dalyvis1, dalyvis2);
if (dalyvis1 + dalyvis2 > 6 || dalyvis2 == dalyvis1) console.log("Laimėjo");
else console.log("Pralaimėjo");

console.log("--------Daug-----------");
//9.

let daug = rand(1000000, 9999999);
console.log(daug);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų
//skaičių: 5, 10, 33 jis dalijasi be liekanos.
//Rezultatą išvesti.

let count = 0;
if (daug % 5 == 0) {
  console.log("dalinasi iš 5: ", daug / 5);
  count++;
}
if (daug % 10 == 0) {
  console.log("dalinasi iš 10: ", daug / 10);
  count++;
}
if (daug % 3 == 0) {
  console.log("dalinasi iš 3: ", daug / 3);
  count++;
}
console.log("atsakymas:", count);

console.log("--------Žirklės akmuo popierius-----------");
//10.

let as = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";

let tu = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";

// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log(as, tu);

if (as == tu) console.log("lygios");
else {
  if ((as == "popierius" && tu == "akmuo") || (as == "akmuo" && tu == "zirklės") || (as == "zirklės" && tu == "popierius")) {
    console.log("AS laimėjau");
  } else console.log("tu laimėjai");
}
