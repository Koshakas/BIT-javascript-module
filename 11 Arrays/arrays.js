function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("------------------------------------");

let a1 = ["atsuktuvas", "pjūklas", "plaktukas", "replės"];

for (let i = 0; i < a1.length; i++) console.log(a1[i]);

console.log("------------------------------------");

let mas1 = [];

for (let i = 0; i < 22; i++) {
  mas1.push(rand(5, 15));
}

console.log(mas1);

console.log("------------------------------------");

let mas2 = [];

while (mas2.length < 22) {
  let randNumb = rand(5, 15);
  if (randNumb % 2) {
    mas2.push(randNumb);
  }
}

console.log(mas2);

console.log("---------------Uzd 1----------------");

let mas3 = [];
let ilgis = rand(10, 30);

for (let i = 0; i < ilgis; i++) {
  mas3.push(rand(0, 10));
}
console.log("Pinigine: ", mas3.slice());

console.log("---------------Uzd 2----------------");

let suma = 0;
for (let i = 0; i < mas3.length; i++) {
  suma += mas3[i];
}
console.log("Viso pinigų:", suma);

console.log("---------------Uzd 3----------------");

let popieriniai = 0;
for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] > 2) popieriniai += mas3[i];
}
console.log("Popierinių pinigų:", popieriniai);

console.log("---------------Uzd 4----------------");

for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] <= 2) mas3[i] = 0;
}
console.log("Išlaidome metalinius, liko:", mas3.slice());

console.log("---------------Uzd 5----------------");

let max = 0;
let count = 0;
for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] > max) max = mas3[i];
}
for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] == max) count++;
}
console.log("Didžiausia reikšmė:", max, "Pasikartoja:", count);

console.log("---------------Uzd 6----------------");

for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] == 0) mas3[i] = i;
}
console.log("Pakeičiam nulius į eilės nr.:", mas3.slice());

console.log("---------------Uzd 7----------------");

while (mas3.length < 30) {
  mas3.push(rand(0, 10));
}
console.log("Papildom iki 30 ekementų", mas3.slice());

console.log("---------------Uzd 8----------------");

let popieriai = [];
let monetos = [];

for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] <= 2) monetos.push(mas3[i]);
  else popieriai.push(mas3[i]);
}
console.log("Monetos:", monetos.slice(), "Popieriai:", popieriai.slice());

console.log("---------------Uzd 9----------------");

let pinigine = [popieriai.slice(), monetos.slice()];
console.log("Sukurem dvieju skyriu pinigine", pinigine.slice());

console.log("---------------Uzd 10----------------");

let korteles = ["KIKA", "EuroVasitine", "Drogas", "Ačiū", "Lietuvos Geležinkeliai", "Mano RIMI"];
pinigine.push(korteles.slice());
console.log("Pridėjome korteles į piniginę", pinigine.slice());

console.log("---------------Uzd 11----------------");

pinigine[2].sort();
console.log("Surikiavome korteles", pinigine.slice());

console.log("---------------Uzd 12----------------");

for (let i = pinigine[2].length; i < 20; i++) {
  if (rand(0, 1)) {
    pinigine[2].push("Visa");
  } else {
    pinigine[2].push("Mastercard");
  }
}

console.log("Prideda korteles Visa MC", pinigine.slice());

console.log("---------------Uzd 13----------------");

let visaKortu = 0;
let mcKortu = 0;
for (let i = 0; i < pinigine[2].length; i++) {
  if (pinigine[2][i] == "Visa") visaKortu++;
  if (pinigine[2][i] == "Mastercard") mcKortu++;
}
console.log("Visa kortų:", visaKortu, "Mastercard kortų:", mcKortu);
if (visaKortu > mcKortu) console.log("Visa kortų daugiau");
else if (visaKortu < mcKortu) console.log("Mastercard kortų daugiau");
else console.log("Po lygiai");

console.log("---------------Uzd 14----------------");

pinigine.push([]);

for (let i = 0; i < 10; i++) {
  pinigine[3][i] = rand(1000000000, 9999999999);
}
console.log("Pridėjome lot. bilietų", pinigine.slice());

console.log("---------------Uzd 15----------------");

pinigine[3].sort();
pinigine[3].reverse();

console.log("Atbulai išrušiuoti bilietai:", pinigine.slice());

console.log("---------------Uzd 16----------------");
let popSuma = 0;
for (i = 0; i < pinigine[0].length; i++) {
  popSuma += pinigine[0][i];
}

while (popSuma <= 500) {
  let naujasPinigas = rand(3, 10);

  pinigine[0].push(naujasPinigas);
  popSuma += naujasPinigas;
}
console.log("Papildem popieriniu skyreli, viso:", popSuma);
console.log("Papildyta piniginė:", pinigine.slice());

console.log("---------------Uzd 17----------------");

let laiminguBilietu = 0;
for (let i = 0; i < pinigine[3].length; i++) {
  console.log(pinigine[3][i]);
  if (pinigine[3][i] % 15) {
    console.log("nelaimėjau :(");
  } else {
    console.log("laimėjau! :)");
    laiminguBilietu++;
  }
}
console.log("laimingu bilietų:", laiminguBilietu);

console.log("---------------Uzd 18----------------");

let nuotraukos = ["šuo", "katė", "automobilis", "namas", "kiemas"];
pinigine.push(nuotraukos);
console.log("pridėjome nuotraukų masyvą", pinigine.slice());

let surikiuota;
do {
  for (let i = 0; i < pinigine[4].length - 1; i++) {
    surikiuota = true;
    if (pinigine[4][i].length > pinigine[4][i + 1].length) {
      var swap = pinigine[4][i];
      pinigine[4][i] = pinigine[4][i + 1];
      pinigine[4][i + 1] = swap;
      surikiuota = false;
    }
  }
} while (!surikiuota);

console.log("Surikiavome nuotraukas", pinigine.slice());

console.log("----------------sortinam----------------");

let ezerai = [
  [2, "Didelis"],

  [8, "Ilgas"],

  [11, "Trumpas"],

  [1, "Apvalus"],

  [7, "Gilus"]
];

console.log(ezerai.slice());

ezerai.sort(lygintuvas);

console.log(ezerai.slice());

function lygintuvas(a, b) {
  return a[0] - b[0];
}

ezerai.sort(lygintuvas2);

console.log(ezerai.slice());

function lygintuvas2(a, b) {
  return a[1].length - b[1].length;
}
