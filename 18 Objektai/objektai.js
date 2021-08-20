const obj2 = {
  savybe1: "zaluma",

  savybe2: "geltonuma",

  savybe3: 42,

  savybe4: [1, 5, 6],

  metodas1: function () {
    console.log("as metodas1");
  },

  metodas2: function () {
    console.log("as metodas2");
  },

  metodas3: function () {
    console.log("as metodas3");
  }
};

// for (const metodas in obj2) {
//   if (typeof obj2[metodas] == "function") obj2[metodas]();
//   else console.log(metodas, obj2[metodas]);
// }

const obj3 = {
  savybe1: "zaluma",

  savybe2: "geltonuma",

  savybe3: 42,

  savybe4: [1, 5, 6],

  metodas1: function () {
    console.log(this.savybe2);
  },

  metodas2: function () {
    console.log(this.savybe3);
  },

  metodas3: function () {
    console.log(this.savybe1);
  }
};

for (const metodas in obj3) {
  if (typeof obj3[metodas] == "function") {
    obj3[metodas]();
  } else console.log(metodas, obj3[metodas]);
}

const calc = {
  rezultatas: null,
  plius: function (a, b) {
    this.rezultatas = a + b;
    this.istorija.push(this.rezultatas);
    return this;
  },
  minus: function (a, b) {
    this.rezultatas = a - b;
    this.istorija.push(this.rezultatas);
    return this;
  },
  istorija: [],
  valyti: function () {
    this.istorija = [];
  }
};
calc.plius(7, 8).plius(7, 10).plius(7, 20);
console.log(calc.rezultatas);

console.log(calc.istorija);

calc.valyti();
console.log(calc.istorija);

console.log("---------------------------");

const obj4 = {
  name: "",
  setName: function (v) {
    this.name = v;
  },
  koksVardas: function () {
    console.log(this.name);
  }
};
const duok = obj4.koksVardas.bind(obj4);

obj4.setName("Olivija");
console.log(obj4.name);

document.querySelector("button").addEventListener("click", duok);
