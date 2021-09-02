function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mas = [];
for (let i = 0; i < 11; i++) {
  mas.push(rand(3, 7));
}
console.log("1 uzd.", mas.slice());

mas.sort(function (a, b) {
  return b - a;
});
console.log("2 uzd", mas.slice());

const setas = new Set();
while (setas.size < 11) {
  setas.add(rand(3, 17));
}

console.log("3 uzd.", setas);

while (setas.size < 15) {
  setas.add(rand(3, 17));
}

console.log("4 uzd.", setas);

for (let item of setas) {
  if (!(item % 3)) setas.delete(item);
}

console.log("5 uzd. ištrinam dalybas iš 3", setas);

const sorted = [...setas];
sorted.sort(function (a, b) {
  return a - b;
});
setas.clear();
sorted.map(item => setas.add(item));

console.log("Uzd 6: rušiuotas setas", setas);

mas.sort(function (a) {
  if (!(a % 2)) return -1;
  else return 1;
});
console.log("Uzd 7: lyginiai-nelyginiai", mas.slice());

const gyv = new Map();
gyv.set("Lapė", rand(5, 30));
gyv.set("Vilkas", rand(5, 30));
gyv.set("Briedis", rand(5, 30));
gyv.set("Fazanas", rand(5, 30));
gyv.set("Kojotas", rand(5, 30));
gyv.set("Žirafa", rand(5, 30));
gyv.set("Behemotas", rand(5, 30));

console.log("8 uzd: gyvuliai:", gyv);

const gyvMas = [...gyv];
gyvMas.sort((a, b) => {
  return a[1] - b[1];
});
gyv.clear();
gyvMas.map(item => gyv.set(item[0], item[1]));

console.log("9 Užd, surikiuotas Mapas:", gyv);

const gyvMas2 = [...gyv];
gyvMas2.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else return -1;
});
console.log(gyvMas2);
gyv.clear();
gyvMas2.map(item => gyv.set(item[0], item[1]));

console.log("10 Užd, surikiuotas pagal vardus:", gyv);

//-----------------------Naujos------------------------
