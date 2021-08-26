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

  static naujasBurbulas = () => {
    const b = new this();
    this.burbulai.set(b.id, b);
  };

  static start() {
    this.ekranoDydis();
    document.body.addEventListener("click", () => {
      this.naujasBurbulas();
    });
    this.burbulai = new Map();

    const btn = document.querySelector("button");
    btn.addEventListener("click", e => {
      console.log("click");
      e.stopPropagation();
      for (let i = 0; i < 5; i++) {
        setTimeout(this.naujasBurbulas, this.rand(1, 1000));
      }

      btn.style.display = "none";
    });
  }

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
  }

  varyk = () => {
    this.element.style.top = this.constructor.rand(0, this.constructor.h - 100) + "px";
    this.element.style.left = this.constructor.rand(0, this.constructor.w - 100) + "px";
  };
}
Burbulas.start();
