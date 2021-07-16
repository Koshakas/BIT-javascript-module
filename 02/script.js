function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("-----------Užduotis 1----------------");

let numb1 = rand(0, 4);
let numb2 = rand(0, 4);

console.log("Numb1: " + numb1 + "  Numb2: " + numb2);

if (numb1 * numb2 == 0) {
  console.log("Dalyba iš nulio");
} else if (numb1 > numb2) {
  console.log("Dalinam " + numb1 + " iš " + numb2 + " = " + numb1 / numb2);
} else {
  console.log("Dalinam " + numb2 + " iš " + numb1 + " = " + numb2 / numb1);
}

console.log("-----------Užduotis 2----------------");

let sk1 = rand(0, 25);
let sk2 = rand(0, 25);
let sk3 = rand(0, 25);
let vid = (sk1 + sk2 + sk3) / 3;

console.log("vidurkis iš: " + sk1 + ", " + sk2 + ", " + sk3 + " = " + vid);

console.log("-----------Užduotis 3----------------");

let a = rand(0, 10);
let b = rand(0, 10);
let c = rand(0, 10);

console.log("Kraštinės: " + a + " " + b + " " + c);

if (a >= b && a >= c) {
  if (a < b + c) {
    console.log("Trikampis galimas");
  } else {
    console.log("Trikampis negalimas");
  }
} else if (b > c) {
  if (b < a + c) {
    console.log("Trikampis galimas");
  } else {
    console.log("Trikampis negalimas");
  }
} else if (c < a + b) {
  console.log("Trikampis galimas");
} else {
  console.log("Trikampis negalimas");
}
