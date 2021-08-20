const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
const btn5 = document.querySelector("#button5");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const array = [];

btn1.addEventListener("click", () => {
  console.log(input1.value);
});

btn2.addEventListener("click", () => {
  console.log(input2.value);
});

btn3.addEventListener("click", () => {
  console.log("Inputu ilgis:", input1.value.length + input2.value.length);
});

btn4.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
});

btn5.addEventListener("click", () => {
  array.push(input1.value);
  array.push(input2.value);
  console.log(array);
});

let pigiausiaKnyga;
let maziausiaKaina;
let type;
fetch("https://in3.dev/knygos/")
  .then(response => response.json())
  .then(data => {
    maziausiaKaina = data[0].price;
    pigiausiaKnyga = data[0].title;
    type = data[0].type;
    data.forEach(e => {
      if (e.price <= maziausiaKaina) {
        maziausiaKaina = e.price;
        pigiausiaKnyga = e.title;
        type = e.type;
      }
    });
    fetch("https://in3.dev/knygos/types/")
      .then(response => response.json())
      .then(data => {
        data.forEach(types => {
          if (types.id == type) {
            type = types.title;
          }
        });
        console.log("Pigiausia knyga yra:", pigiausiaKnyga, "-", maziausiaKaina, type);
      });
  });
