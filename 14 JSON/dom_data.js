//1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente
//esantį tekstą išvesti į console.log

const form = document.createElement("form");
document.body.appendChild(form);

const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Rašykit..");

const inputButton = document.createElement("input");
inputButton.setAttribute("type", "button");
inputButton.setAttribute("value", "Spausdinti");

form.appendChild(inputText);
form.appendChild(inputButton);

inputButton.addEventListener("click", () => {
  renderH1(inputText.value);
  array.push(inputText.value);
});

inputText.addEventListener("click", () => {
  inputText.value = "";
});
inputText.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    renderH1(inputText.value);
    array.push(inputText.value);
    e.preventDefault();
    inputText.value = "";
  }
});

// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”.
// Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

const select = document.createElement("select");

const rytas = document.createElement("option");
rytas.appendChild(document.createTextNode("Rytas"));
rytas.setAttribute("value", "Rytas");
rytas.addEventListener("click", () => {
  renderH1(rytas.value);
  array.push(rytas.value);
});

const diena = document.createElement("option");
diena.appendChild(document.createTextNode("Diena"));
diena.setAttribute("value", "Diena");
diena.addEventListener("click", () => {
  renderH1(diena.value);
  array.push(diena.value);
});

const vakaras = document.createElement("option");
vakaras.appendChild(document.createTextNode("Vakaras"));
vakaras.setAttribute("value", "Vakaras");
vakaras.addEventListener("click", () => {
  renderH1(vakaras.value);
  array.push(vakaras.value);
});

select.appendChild(rytas);
select.appendChild(diena);
select.appendChild(vakaras);

document.body.appendChild(select);

// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”,
//“vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti
//į console.log

const formRadio = document.createElement("form");
document.body.appendChild(formRadio);

const radioRytas = document.createElement("input");
radioRytas.setAttribute("type", "radio");
radioRytas.setAttribute("value", "Rytas");
radioRytas.setAttribute("id", "rytas");
radioRytas.setAttribute("name", "radio");
radioRytas.addEventListener("click", () => {
  renderH1(radioRytas.value);
  array.push(radioRytas.value);
});
formRadio.appendChild(radioRytas);

const labelRytas = document.createElement("label");
labelRytas.setAttribute("for", "rytas");
labelRytas.appendChild(document.createTextNode("Rytas"));
formRadio.appendChild(labelRytas);

const radioDiena = document.createElement("input");
radioDiena.setAttribute("type", "radio");
radioDiena.setAttribute("value", "Diena");
radioDiena.setAttribute("id", "diena");
radioDiena.setAttribute("name", "radio");
radioDiena.addEventListener("click", () => {
  renderH1(radioDiena.value);
  array.push(radioDiena.value);
});
formRadio.appendChild(radioDiena);

const labelDiena = document.createElement("label");
labelDiena.setAttribute("for", "diena");
labelDiena.appendChild(document.createTextNode("Diena"));
formRadio.appendChild(labelDiena);

const radioVakaras = document.createElement("input");
radioVakaras.setAttribute("type", "radio");
radioVakaras.setAttribute("value", "Vakaras");
radioVakaras.setAttribute("id", "vakaras");
radioVakaras.setAttribute("name", "radio");
radioVakaras.addEventListener("click", () => {
  renderH1(radioVakaras.value);
  array.push(radioVakaras.value);
});
formRadio.appendChild(radioVakaras);

const labelVakaras = document.createElement("label");
labelVakaras.setAttribute("for", "vakaras");
labelVakaras.appendChild(document.createTextNode("Vakaras"));
formRadio.appendChild(labelVakaras);

// 4. Sukurti vieną checkbox tipo elementą. Pažymėjus elementą išvesti
//i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
checkBox.setAttribute("id", "checkbox");
document.body.appendChild(checkBox);

const labelCheckbox = document.createElement("label");
labelCheckbox.setAttribute("for", "checkbox");
labelCheckbox.appendChild(document.createTextNode("Žymeklis"));
document.body.appendChild(labelCheckbox);

checkBox.addEventListener("click", e => {
  if (checkBox.checked) {
    renderH1("Pažymėta");
    array.push("Pažymėta");
  } else {
    renderH1("Nepažymėta");
    array.push("Nepažymėta");
  }
});

// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”,
//“vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint
//arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų
//reikšmes.

const checkBoxHTML = `
  <input id="chbx-rytas" type="checkbox" value="Rytas">
  <label for='chbx-rytas'>Rytas</label>
  <input id="chbx-diena" type="checkbox" value="Diena">
  <label for='chbx-diena'>Diena</label>
  <input id="chbx-vakaras" type="checkbox" value="Vakaras">
  <label for='chbx-vakaras'>Vakaras</label>`;

const form5 = document.createElement("form");
form5.setAttribute("id", "checkbox-form");
form5.innerHTML = checkBoxHTML;
document.body.appendChild(form5);

const checkboxInputs = document.querySelectorAll("#checkbox-form input");
const arr = ["", "", ""];
checkboxInputs.forEach(i => {
  i.addEventListener("click", () => {
    let string = "";
    checkboxInputs.forEach((j, i) => {
      if (j.checked) {
        string += j.value + " ";
        arr[i] = j.value;
      } else arr[i] = "";
    });
    renderH1(string);
  });
});

// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą
//įkeliant į tą sukurtą elementą.
// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai
// sukurtuose elementuose h3

const heading1 = document.createElement("h1");
document.body.appendChild(heading1);

function renderH1(value) {
  console.log(value);
  heading1.appendChild(document.createTextNode(value + " "));
  document.body.appendChild(document.createElement("h3")).appendChild(document.createTextNode(value + " "));
}

// 8.Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią
// reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti
// masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.

const array = [];
array.push(arr); // 5 uzduoties masyvas

// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus,
//gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta
//daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas
// masyve, atinka vieną naują h3 tagą).

const goButton = document.createElement("button");
goButton.appendChild(document.createTextNode("GO"));

document.body.appendChild(goButton);
goButton.addEventListener("click", () => {
  console.log(array);
  for (i = 0; i < array.length; i++) {
    document.body.appendChild(document.createElement("h3")).appendChild(document.createTextNode(array[i]));
  }
});

// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.

const resetButton = document.createElement("button");
resetButton.appendChild(document.createTextNode("Reset"));

document.body.appendChild(resetButton);
resetButton.addEventListener("click", () => {
  while (array.length > 0) {
    array.pop();
  }
  array.push(arr); //5 užduoties tušias masyvas
});

// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.

const clearButton = document.createElement("button");
clearButton.appendChild(document.createTextNode("Clear All H3"));

document.body.appendChild(clearButton);
clearButton.addEventListener("click", () => {
  document.querySelectorAll("h3").forEach(i => {
    i.remove();
  });
});

// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus
//būtų sudėti į sukurtą naują objektą. Tą objektą paversti JSON stringu
//ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log
//Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo
//informacijos suformuoti h3 tagus kaip 9 uždavinyje.

const goJSON = document.createElement("button");
goJSON.appendChild(document.createTextNode("JSON Stringify"));

document.body.appendChild(goJSON);

let jsonString = "";
goJSON.addEventListener("click", () => {
  jsonString = JSON.stringify(array);
  console.log(jsonString);

  const jsonArray = JSON.parse(jsonString);
  for (i = 0; i < jsonArray.length; i++) {
    document.body.appendChild(document.createElement("h3")).appendChild(document.createTextNode(jsonArray[i]));
  }
});
