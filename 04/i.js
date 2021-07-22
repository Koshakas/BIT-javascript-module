function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let salyga = rand(1, 5);

let kazkasPriskirta = salyga == 1 ? "krokodilas" : salyga == 2 ? "dramblys" : "zebras";

console.log(kazkasPriskirta);

let k = "krokodilas";
let z = "zebras";
let d = "dramblys";
let r = "raganosis";
let b = "babuinas";

let kazkasPriskirtas = salyga == 1 ? k : salyga == 2 ? z : salyga == 3 ? d : salyga == 4 ? r : b;

console.log("---------------------------");

console.log(1 === true);
