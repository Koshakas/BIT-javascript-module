// 1a -1c

const heading1 = document.querySelector("h1");
heading1.style.color = "green";
heading1.classList.remove("main");

const tagI = document.querySelector("i");
tagI.className = "small";

// 1d

const heading2 = document.querySelector("h1 + h2");
heading2.classList.add("first");
heading2.classList.remove("main");

// 1e

const span = document.querySelector(" h2 > span");
span.style.fontSize = "10px";
span.style.color = "gray";

//2a

const allH2 = document.querySelectorAll("h2");
console.log("H2 tagų puslapyje:", allH2.length);

//2b

const allH2NoFirst = document.querySelectorAll("h2:not(.first)");
console.log("H2 tagų be first klasės", allH2NoFirst.length);

//2c

allH2.forEach(x => (x.style.color = "skyblue"));

//2d

const tags2d = document.querySelectorAll("div.prices > h2");

tags2d.forEach(x => x.classList.add("price-tag"));

//2e

document.querySelectorAll(".new").forEach(item => (item.style.textDecoration = "underline"));

//2f,g

const ulElements = document.querySelectorAll("ul");
console.log("gyvunų grupių + žirafų:", ulElements.length);
ulElements.forEach(x => {
  x.style.border = "2px dashed silver";
  x.style.padding = "15px 50px";
});

//2h, i

let newAnimalsCount = 0;

ulElements.forEach(x => {
  let newAnimals = x.querySelectorAll(".new");
  console.log(`Naujų gyvūnų ${x.id} skyriuje: ${newAnimals.length}`);
  newAnimalsCount += newAnimals.length;
});
console.log("Naujų gyvūnų:", newAnimalsCount);

//3a

document.querySelector("#h1-color").addEventListener("click", () => {
  heading1.style.color = "white";
  heading1.style.backgroundColor = "green";
});

document.querySelector("#h1-font").addEventListener("click", () => {
  heading1.style.fontSize = "10px";
});

//3b

document.querySelector("i").addEventListener("click", () => {
  tagI.style.fontWeight = "bold";
});

//3c
const classPrices = document.querySelector(".prices");
console.log(classPrices);
classPrices.addEventListener("click", () => {
  if (classPrices.style.backgroundColor == "gray") classPrices.style.backgroundColor = "white";
  else classPrices.style.backgroundColor = "gray";
});

//3d

const contacts = document.querySelector("#contacts");
contacts.addEventListener("click", e => {
  contacts.style.color = "inherit";
  e.stopPropagation();
});

//3e

document.querySelector("#contacts > u").addEventListener("click", () => {
  contacts.style.fontSize = "20px";
});

//3f

document.querySelector("#contacts > b").addEventListener("click", e => {
  contacts.style.removeProperty("font-size");
  contacts.style.removeProperty("color");
  e.stopPropagation();
});

//3g

document.querySelector("#h1-color-back").addEventListener("click", () => {
  heading1.style.color = "green";
  heading1.style.backgroundColor = null;
});

document.querySelector("#h1-font-back").addEventListener("click", () => {
  heading1.style.fontSize = null;
});

//4a

const newAnimals = document.querySelectorAll("ul .new");

newAnimals.forEach(x => {
  x.addEventListener("dblclick", e => {
    //newAnimals.forEach(y => (y.style.color = "red")); //Visi nusispalvina
    x.style.color = "red"; // Vienas nusispalvina
  });
});

//4b
const animals = document.querySelectorAll("ul li:not(.like-button)");
animals.forEach(i => {
  i.addEventListener("click", () => {
    i.style.fontSize = "130%";
  });
});

//4c
const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach(i => {
  i.addEventListener("click", () => {
    i.parentElement.classList.add("like");
  });
});

//5a
const senjoruKaina = document.createElement("h2");
senjoruKaina.classList.add("price-tag");
const senjoruKainaTxt = document.createTextNode("Senjorai tik: 1.99 eur");

senjoruKaina.appendChild(senjoruKainaTxt);
document.querySelector(".prices").appendChild(senjoruKaina);

//5b
const senjoruGrupe = document.createElement("h2");
senjoruGrupe.classList.add("price-tag");
senjoruGrupe.classList.add("new");
senjoruGrupe.appendChild(document.createTextNode("Senjorų grupė iki 10: tik 5.99 eur"));

document.querySelector(".prices").appendChild(senjoruGrupe);

senjoruGrupe.addEventListener("click", e => {
  senjoruGrupe.style.color = "green";
  e.stopPropagation();
});

//5c

document.querySelectorAll(".like-button").forEach(i => {
  const nepatinka = document.createElement("li");
  nepatinka.appendChild(document.createTextNode("NEPATINKA"));
  nepatinka.classList.add("dislike");
  i.parentElement.insertBefore(nepatinka, i.nextSibling);
});

document.querySelectorAll(".dislike").forEach(i => {
  i.addEventListener("click", () => {
    i.parentElement.classList.remove("like");
  });
});

//5d

const fieldSet = document.createElement("fieldset");

const pabrauktiButton = document.createElement("button");
pabrauktiButton.appendChild(document.createTextNode("Pabraukti H1 tagą"));

const nePabrauktiButton = document.createElement("button");
nePabrauktiButton.appendChild(document.createTextNode("Nepabraukti H1 tagą"));

fieldSet.appendChild(document.createElement("legend")).appendChild(document.createTextNode("HEADER 3"));
fieldSet.appendChild(pabrauktiButton);
fieldSet.appendChild(nePabrauktiButton);

document.body.insertBefore(fieldSet, document.querySelector("#contacts"));

pabrauktiButton.addEventListener("click", () => {
  heading1.style.textDecoration = "underline";
});

nePabrauktiButton.addEventListener("click", () => {
  heading1.style.textDecoration = null;
});
