//let oldH1 = document.querySelector(".old");

let body = document.querySelector("body");
let container = document.querySelector(".container");

for (let i = 1; i <= 10; i++) {
  let newDiv = document.createElement("div");
  let labasVakaras = document.createTextNode("Hello");
  if (i % 3 == 0) {
    newDiv.style.color = "green";
    newDiv.style.backgroundColor = "silver";
  }
  newDiv.appendChild(labasVakaras);
  container.appendChild(newDiv);
}

let lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  if (i % 3 == 0) {
    lis[i].style.color = "red";
  }
}
