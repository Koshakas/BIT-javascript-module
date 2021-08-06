const array1 = [3, 6, 10];
let suma = 0;
let count = 0;
let suma2 = 0;

array1.forEach((v, i, self) => {
  suma += v;
  count++;
  suma2 += v * i;
});

console.log("Suma:", suma);
console.log("Iteracijų:", count);
console.log("Sandaugų suma:", suma2);

let suma55 = 0;

[3, 6, 10].forEach((bi, i, trecias) => {
  if (i < trecias.length - 1) {
    suma55 += bi + trecias[i + 1];
  }
});

console.log("Sumuojam poras kol yra", suma55);
