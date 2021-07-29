let daiktas = {
  pavadinimas: "Pjuklas",
  tipas: "Medzio pjuklas",
  dantuSkaicius: 45,
  pjauti: function () {
    console.log("Dziru dziru");
  }
};

console.log(daiktas.pavadinimas);
console.log(daiktas.tipas);
console.log(daiktas.dantuSkaicius);
daiktas.pjauti();
console.log(typeof daiktas);

let vardas = "Bobikai";
let str = `Labas, ${vardas}`;
console.log(str);
console.log(str.length);

let vp = "Jonas\nJonaitas";
console.log(vp);

console.log("--------------------Uzd 1----------------");

let zuikis = "Zuikis puikis Ilgaausis eina namo miegot";

console.log('"');
for (let i = 0; i < zuikis.length; i++) {
  if (zuikis[i] == " ") {
    continue;
  }
  console.log(zuikis[i]);
}
console.log('"');

console.log("--------------------Uzd 2----------------");

let aRaidziu = 0;
for (let i = 0; i < zuikis.length; i++) {
  if (zuikis[i] == "a" || zuikis[i] == "A") {
    aRaidziu++;
  }
}
console.log("A raidžių: ", aRaidziu);

console.log("-------------------Slice 1----------------");

let zod = "Zirafa";

for (let i = 0; i < zod.length; i++) {
  console.log(zod.slice(i));
}

console.log("-------------------Slice 2----------------");

for (let i = 0; i < zod.length; i++) {
  console.log(zod.slice(-i - 1));
}

let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(5));
console.log(num.toString(8));
