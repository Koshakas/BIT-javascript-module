// 1a -1c

let heading1 = document.querySelector("h1");
heading1.style.color = "rgb(0, 94, 0)";
heading1.classList.add("small");
heading1.classList.remove("main");

// 1d

let heading2 = document.querySelector("h1 + h2");
heading2.classList.add("first");
heading2.classList.remove("main");

// 1e

let span = document.querySelector(" h2 > span");
span.style.fontSize = "10px";
span.style.color = "gray";

//2a

let allH2 = document.querySelectorAll("h2");
console.log("H2 tagų puslapyje:", allH2.length);

//2b

let allH2NoFirst = document.querySelectorAll("h2:not(.first)");
console.log("H2 tagų be first klasės", allH2NoFirst.length);

//2c

allH2.forEach(changeColor);
function changeColor(item) {
  item.style.color = "skyblue";
}

//2d

let tags2d = document.querySelectorAll("div.prices > h2");

tags2d.forEach(addPriceTag);
function addPriceTag(item) {
  item.classList.add("price-tag");
}

//2e

let classNew = document.querySelectorAll(".new");
classNew.forEach(underline);
function underline(item) {
  item.style.textDecoration = "underline";
}

//2f,g

let ulElements = document.querySelectorAll("ul");
console.log("gyvunų grupių + žirafų:", ulElements.length);
ulElements.forEach(bordersAndPadding);
function bordersAndPadding(item) {
  item.style.border = "2px dashed silver";
  item.style.padding = "15px 50px";
}

//2h, i

let newAnimalsCount = 0;

ulElements.forEach(newAnimalsForEachClass);
function newAnimalsForEachClass(item) {
  let newAnimals = item.querySelectorAll(".new");
  console.log(`Naujų gyvūnų ${item.id} skyriuje: ${newAnimals.length}`);
  newAnimalsCount += newAnimals.length;
}
console.log("Naujų gyvūnų:", newAnimalsCount);
