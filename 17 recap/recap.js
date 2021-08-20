// const masyvas = ["vienas", "žalias", "ir", "trys", "raudoni"];

// // console.log("---------for-----------");

// for (let i = 0; i < masyvas.length; i++) {
//   // console.log(masyvas[i]);
// }

// // console.log("---------while-----------");

// let i = 0;
// while (i < masyvas.length) {
//   // console.log(masyvas[i++]);
// }
// // console.log("--------forEach------------");

// masyvas.forEach(e => {
//   // console.log(e);
// });
// // console.log("----------ForIn----------");

// for (const i in masyvas) {
//   // console.log(masyvas[i]);
// }

// // console.log("-------Shift-------------");

// let mas2 = masyvas.slice();
// while (mas2.length) {
//   // console.log(mas2.shift());
// }

// // console.log("-------For.. of-------------");

// for (const i of masyvas) {
//   // console.log(i);
// }

function pirma() {
  function antra() {
    console.log("labas");
  }
  return antra;
}

pirma()();

function suma(a, b) {
  return a + b;
}

function skirtumas(a, b) {
  return a - b;
}

const bla = suma(3, 8);
console.log(bla);

console.log(skirtumas(7, 2));

function skaiciuoti(v, a, b) {
  if (v == "+") return suma(a, b);
  if (v == "-") return skirtumas(a, b);
}

console.log(skaiciuoti("-", 10, 5));
console.log(skaiciuoti("+", 10, 5));

function skaiciuoti2(v) {
  if (v == "+") return suma;
  if (v == "-") return skirtumas;
}

console.log(skaiciuoti2("+")(10, 10));
console.log(skaiciuoti2("-")(30, 7));

const m = ["V", "U", "A", "A", "R", "A", "B"];

function replaseAZ(array) {
  const newArr = [];
  array.forEach(e => {
    if (e == "A") {
      newArr.push("Z");
    } else newArr.push(e);
  });
  return newArr;
}

console.log(replaseAZ(m));
