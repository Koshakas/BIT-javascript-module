//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
console.log("\n -----------1 uzd----------------- \n ");
const mas1 = [12, 5, 9, 7, 5, 4];
console.log("masyvo ilgis: ", mas1.length);

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
console.log("\n -----------2 uzd----------------- \n ");
const mas2 = [13, "785", 92, "labas", 522, 6984];
for (let i = 0; i < mas2.length; i++) console.log(i + ": " + mas2[i]);

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
console.log("\n -----------3 uzd----------------- \n ");
const mas3 = [889, 52, 698, 752, 9333, 7];
for (let i = 0; i < mas3.length; i++) {
  if (!(mas3[i] % 2)) console.log(i + 1 + ": " + mas3[i]);
}

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
console.log("\n -----------4 uzd----------------- \n ");
const mas4 = ["Agurkas", "Bananas", "arbūzas", "Bebras", "Voverė", "Ąžuolas", "Mažas triušis"];
mas4.forEach((e, i) => {
  if (e[0].toLowerCase() == "a") console.log(i, ": ", e);
});

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
console.log("\n -----------5 uzd----------------- \n ");
const str1 = "Storas zebras, bėga nuo zuulu genties medžiotojų.";
let raidziuZ = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i].toLowerCase() == "z") raidziuZ++;
}
console.log("Z raidžių:", raidziuZ);

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
console.log("\n -----------6 uzd----------------- \n ");
const set1 = new Set(["Labas", "Vakaras", "Rytas", "Valio"]);
set1.add("Labas");
set1.add("Ate");
console.log("Setas:", set1);
console.log("Seto ilgis:", set1.size);

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(),
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
console.log("\n -----------7 uzd----------------- \n ");
const str2 = "Ku ku";

// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
String.prototype.lastCharIs = function () {
  return this[this.length - 1];
};
console.log(str2.lastCharIs());

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
console.log("\n -----------8 uzd----------------- \n ");
const obj1 = { labas: "vakaras", laba: "diena", labs: "ryts" };
for (const item in obj1) {
  console.log(item, obj1[item]);
}

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

console.log("\n -----------8 uzd----------------- \n ");

class Grybas {
  constructor(grybas) {
    this.tipas = grybas;
  }
}
const grybas1 = new Grybas("Baravykas");
const grybas2 = new Grybas("Ūmedė");
const grybas3 = new Grybas("Lepšis");

console.log(grybas1, grybas1.tipas);
console.log(grybas2, grybas2.tipas);
console.log(grybas3, grybas3.tipas);
