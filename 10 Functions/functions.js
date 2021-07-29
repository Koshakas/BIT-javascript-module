function labas() {
  console.log("Labas");
}

for (let i = 0; i < 20; i++) {
  labas();
}

console.log("------------------------");

function skaicius(x) {
  console.log(x);
}

for (i = 0; i < 20; i++) {
  skaicius(i);
}

console.log("------------------------");

function arPorinis(x) {
  return x % 2;
}

for (let i = 1; i <= 20; i++) {
  if (!arPorinis(i)) console.log(i);
}

console.log("-----------Uzd 1-------------");

let gyv1 = "Papuga";
let gyv2 = "Vilkas";
let gyv3 = "Hipapatamas";

function kiekARaidziu(string) {
  let aRaidziu = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "a" || string[i] == "A") {
      aRaidziu++;
    }
  }
  return aRaidziu;
}

console.log(`${gyv1} turi A raidžių:`, kiekARaidziu(gyv1));
console.log(`${gyv2} turi A raidžių:`, kiekARaidziu(gyv2));
console.log(`${gyv3} turi A raidžių:`, kiekARaidziu(gyv3));

console.log("-----------Uzd 2-------------");

function kiekRaidziu(string, raide) {
  let raidziu = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == raide) raidziu++;
  }
  return raidziu;
}

console.log(`${gyv1} turi P raidžių:`, kiekRaidziu(gyv1, "p"));
console.log(`${gyv2} turi K raidžių:`, kiekRaidziu(gyv2, "k"));
console.log(`${gyv3} turi O raidžių:`, kiekRaidziu(gyv3, "o"));

console.log("-----------Uzd 3-------------");

function reverseWord(word) {
  let reverse = "";
  for (i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
console.log(reverseWord("abrakadabra"));

console.log("-----------Uzd 3a-------------");

function zvaigzdutes1(string) {
  let stars = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == "a" || string[i].toLowerCase() == "e" || string[i].toLowerCase() == "i" || string[i].toLowerCase() == "o" || string[i].toLowerCase() == "u") {
      stars += "*";
    } else stars += string[i];
  }
  return stars;
}

console.log(zvaigzdutes1("Papuga"));

console.log("-----------Uzd 3b-------------");

let vowels = "aeiou";
function zvaigzdutes2(string) {
  let stars = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) >= 0) {
      stars += "*";
    } else stars += string[i];
  }
  return stars;
}

console.log(zvaigzdutes2("Hipopotamas nerealusis apuokinis"));
