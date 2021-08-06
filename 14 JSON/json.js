let pirstukai = null === localStorage.getItem("pirst") ? [0] : JSON.parse(localStorage.getItem("pirst"));

console.log("pirstukai:", pirstukai);

document.querySelector("button").addEventListener("click", () => {
  pirstukai[0]++;
  console.log("pirstukai:", pirstukai);
  localStorage.setItem("pirst", JSON.stringify(pirstukai));
});
