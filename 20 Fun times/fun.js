// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i <= 3000; i += 100) {
//   const ruler = document.createElement("div");
//   ruler.classList.add("section");

//   const span = document.createElement("span");
//   span.innerHTML = `${i}&nbsp;px`;

//   ruler.appendChild(span);
//   document.body.appendChild(ruler);
// }

// const ball = document.querySelector(".ball");

// Užduotis 1, 2
// document.addEventListener("scroll", () => {
//   console.log(window.scrollY);

//   if (window.scrollY > 200) {
//     ball.style.top = window.scrollY + "px";
//   }
// });

// Užduotis 3

// let intervalId;
// let width = window.innerWidth - 50;
// let height = window.innerHeight - 50;
// function go() {
//   let x = rand(0, width);
//   let y = rand(0, height);
//   ball.style.top = y + "px";
//   ball.style.left = x + "px";
//   console.log(x, y);
// }

// let running = false;
// ball.addEventListener("click", () => {
//   if (running) {
//     clearInterval(intervalId);
//     running = false;
//   } else {
//     go();
//     intervalId = setInterval(go, 1000);
//     running = true;
//   }
// });

// window.addEventListener("resize", () => {
//   width = window.innerWidth - 50;
//   height = window.innerHeight - 50;
// });

class Burbulas {
  constructor() {
    this.id = Math.floor(Math.random() * 9000000) + 1000000; //rand(1000000, 9999999);
    this.element = document.createElement("div");
    this.element.classList.add("ball");
    this.element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("body").appendChild(this.element);
    this.varyk();

    this.element.addEventListener("click", e => {
      Burbulas.pagautas(this);
      e.stopPropagation();
    });

    this.timerId = setInterval(this.varyk, 1000);
  }
  static burbulai;
  static w;
  static h;
  static startBtn = document.querySelector("button");
  static timerDiv = document.querySelector("#timer");
  static tableUl = document.querySelector("ul");
  static timeStart;
  static clockId;
  static gamer;
  static table;
  static score;

  static naujasBurbulas = () => {
    const b = new this();
    this.burbulai.set(b.id, b);
  };

  static start() {
    this.ekranoDydis();
    this.burbulai = new Map();
    this.load();
    this.displayTable();

    const btn = document.querySelector("button");
    btn.addEventListener("click", e => {
      console.log("click");
      e.stopPropagation();
      for (let i = 0; i < 2; i++) {
        setTimeout(this.naujasBurbulas, this.rand(1, 1000));
      }
      document.body.addEventListener("click", this.naujasBurbulas);
      this.startBtn.style.display = "none";
      this.timeStart = new Date();
      this.clockId = setInterval(this.doTick, 100);
      const input = document.querySelector("input#vardas");
      this.gamer = input.value;
      console.log(this.gamer);
      input.value = "";
      input.style.display = "none";
      document.querySelector("#input-label").style.display = "none";
    });
  }

  static doTick = () => {
    const tick = new Date();
    const time = tick.getTime() - this.timeStart.getTime();
    const sec = Math.floor(time / 1000);
    const dec = Math.floor((time - sec * 1000) / 100);
    this.timerDiv.innerText = sec + ":" + dec;
  };

  static rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static ekranoDydis() {
    this.h = window.innerHeight;
    this.w = window.innerWidth;
    console.log(this.h, this.w);
  }

  static pagautas(burbulas) {
    burbulas.element.remove();
    this.burbulai.delete(burbulas.id);
    clearInterval(this.timerId);
    if (this.burbulai.size == 0) {
      this.gameEnd();
    }
  }

  static gameEnd() {
    const tick = new Date();
    const time = tick.getTime() - this.timeStart.getTime();
    const sec = Math.floor(time / 1000);
    const dec = Math.floor((time - sec * 1000) / 10);
    this.timerDiv.innerText = sec + ":" + dec;

    this.startBtn.style.display = "block";
    document.body.removeEventListener("click", this.naujasBurbulas);
    clearInterval(this.clockId);
    document.querySelector("#input-label").style.display = "inline";
    document.querySelector("input#vardas").style.display = "inline";
    this.table.push({ name: this.gamer, score: sec + ":" + dec, time: time });
    this.table.sort((a, b) => a.time - b.time);
    localStorage.setItem("ballApp", JSON.stringify(this.table.slice(0, 5)));
    this.table = this.table.slice(0, 5);
    this.displayTable();
  }

  static load() {
    if (localStorage.getItem("ballApp") == null) {
      localStorage.setItem("ballApp", JSON.stringify([]));
    }
    this.table = JSON.parse(localStorage.getItem("ballApp"));
  }

  static displayTable() {
    let html = "";
    this.table.forEach(g => {
      html += `<li>${g.name} ${g.score}</li>`;
    });
    this.tableUl.innerHTML = html;
  }

  varyk = () => {
    this.element.style.top = this.constructor.rand(0, this.constructor.h - 100) + "px";
    this.element.style.left = this.constructor.rand(0, this.constructor.w - 100) + "px";
  };
}
Burbulas.start();
