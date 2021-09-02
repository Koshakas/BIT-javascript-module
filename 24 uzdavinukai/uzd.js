const setas = new Set(["Lietus", "Sniegas", "Pūga", "Šlabdriba", "Vėtra"]);

localStorage.setItem("orai", JSON.stringify([...setas]));

const array = JSON.parse(localStorage.getItem("orai"));
// console.log(array);

const setas2 = new Set([...array]);

// console.log("setas2:", setas2);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.style.top = `${rand(0, window.innerHeight - 150)}px`;
  div.style.left = `${rand(0, window.innerWidth - 150)}px`;
  document.body.appendChild(div);
}

let co;

const go = e => {
  // console.log(co);
  const x = e.pageX - co[1];
  const y = e.pageY - co[0];
  co[4].style.top = co[2] + y + "px";
  co[4].style.left = co[3] + x + "px";
};

document.querySelectorAll("div").forEach(div => {
  div.addEventListener("mousedown", e => {
    div.style.cursor = "grabbing";
    co = [e.pageY, e.pageX, parseInt(div.style.top), parseInt(div.style.left), e.target];
    document.body.addEventListener("mousemove", go);
  });
});

document.querySelectorAll("div").forEach(div => {
  div.addEventListener("mouseup", () => {
    // console.log("mouseup");
    div.style.cursor = "grab";
    document.body.removeEventListener("mousemove", go);
  });
});
