let inc = 3;

for (let i = 4; i; i--) {
  console.log("Didelis start");

  for (let j = 0; j < inc; j++) {
    console.log("B");
  }
  inc++;
  console.log("Didelis end");
}

console.log("---------------------------");

for (let i = 4; i; i--) {
  console.log("Didelis start");

  for (let j = 3; j; j--) {
    console.log("B");
  }

  console.log("Didelis mid");

  for (let k = 3; k; k--) {
    console.log("C");
  }
  console.log("Didelis end");
}

console.log("---------------------------");

for (let i = 4; i; i--) {
  console.log("Didelis start");

  for (let j = 7; j; j--) {
    if (j <= 3) console.log("C");
    else if (j == 4) console.log("Didelis MID");
    else console.log("B");
  }

  console.log("Didelis end");
}

console.log("---------------------------");

let A = "A";

for (let i = 0; i < 5; i++) {
  let eilute = "";
  for (let j = 0; j < 5; j++) {
    eilute += A;
  }
}

console.log("---------------------------");

A = "A";

for (let i = 1; i < 6; i++) {
  let eilute = "";
  for (let j = 0; j < i; j++) {
    eilute += A;
  }
  console.log(eilute);
}

console.log("---------------------------");

let kiekis = 1;
A = "A";
let eilute = "";

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < kiekis; j++) {
    eilute += A;
  }
  if (i > 3) kiekis--;
  else kiekis++;
  eilute += " ";
}
console.log(eilute);

console.log("--------------------------------------");
console.log("SKaičiai nuo 5 iki 100 kurie be liekanos dalijasi iš 3?");

count = 0;
for (let i = 5; i <= 100; i++) {
  i % 3 ? true : (count++, console.log(i, count));
}
console.log("Besidalinančių iš 3 skaičių kiekis: ", count);

console.log("--------------------------------------");
console.log("Skaičiai nuo 5 iki 100 kurie be liekanos dalijasi iš 3 arba iš 5?");

count = 0;
for (let i = 5; i <= 100; i++) {
  !(i % 3) || !(i % 5) ? (count++, console.log(i, count)) : false;
}
console.log("Besidalinančių iš 3 arba 5 skaičių kiekis: ", count);

console.log("--------------------------------------");
console.log("Skaičiai nuo 5 iki 100 kurie be liekanos dalijasi iš 3 ir iš 5?");

count = 0;
for (let i = 5; i <= 100; i++) {
  !(i % 3) && !(i % 5) ? (count++, console.log(i, count)) : false;
}
console.log("Besidalinančių iš 3 ir iš 5 skaičių kiekis: ", count);
