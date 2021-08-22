function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i <= 3000; i += 100) {
  const ruler = document.createElement("div");
  ruler.classList.add("section");

  const span = document.createElement("span");
  span.innerHTML = `${i}&nbsp;px`;

  ruler.appendChild(span);
  document.body.appendChild(ruler);
}

const ball = document.querySelector(".ball");

// Užduotis 1, 2
// document.addEventListener("scroll", () => {
//   console.log(window.scrollY);

//   if (window.scrollY > 200) {
//     ball.style.top = window.scrollY + "px";
//   }
// });

// Užduotis 3

let intervalId;
let width = window.innerWidth - 50;
let height = window.innerHeight - 50;
function go() {
  let x = rand(0, width);
  let y = rand(0, height);
  ball.style.top = y + "px";
  ball.style.left = x + "px";
  console.log(x, y);
}

let running = false;
ball.addEventListener("click", () => {
  if (running) {
    clearInterval(intervalId);
    running = false;
  } else {
    go();
    intervalId = setInterval(go, 1000);
    running = true;
  }
});

window.addEventListener("resize", () => {
  width = window.innerWidth - 50;
  height = window.innerHeight - 50;
});
