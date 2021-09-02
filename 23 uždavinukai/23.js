class BookShelf {
  booksSet;
  element;

  constructor(...books) {
    this.booksSet = new Set(books);
    this.createHtml();
    this.booksSet.forEach(book => {
      if (book.quantity) this.element.appendChild(book.element);
    });
    window.addEventListener("bookchange", () => {
      this.booksSet.forEach(book => {
        if (!book.quantity) book.element.remove();
      });
    });
  }

  createHtml() {
    this.element = document.createElement("div");
    this.element.classList.add("shelf");
    document.body.appendChild(this.element);
  }
}

class Book {
  author;
  title;
  pages;
  element;
  quantity;

  constructor(title, pages, cover, price, quantity, ...author) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.cover = cover;
    this.price = price;
    this.quantity = quantity;
    this.createHtml();
  }

  static bookChange = new Event("bookchange");

  createHtml() {
    this.element = document.createElement("div");
    this.element.classList.add("book");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Buy this book";
    this.element.innerHTML = `
      <h2>${this.title}</h2>
      <img src="${this.cover}">
      <div class="author"> by ${this.author} | <i>${this.pages}, pages</i></div>
      <div class="price">${this.price},- Eur</div>
      <div class="quantity">In stock: ${this.quantity} pcs.</div>
      `;
    this.element.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      this.quantity--;
      this.element.querySelector(".quantity").innerText = `In stock: ${this.quantity} pcs.`;
      window.dispatchEvent(this.constructor.bookChange);
    });
  }
}

book1 = new Book("Moral Compass", 200, "https://images1.penguinrandomhouse.com/cover/9780399179532", 12, 0, "Vladimir Nabokov");
book2 = new Book(`The Secret Commonwealth`, 180, "https://images4.penguinrandomhouse.com/cover/9780553510706", 15, 5, "Judy Blume");
book3 = new Book("No True Believers", 305, "https://images2.penguinrandomhouse.com/cover/9780525644255", 20, 10, "Thomas Harris");
book4 = new Book(`The Between`, 189, "https://images1.penguinrandomhouse.com/cover/9780385744751", 18, 50, "Jodi Picoult", "Judy Blume");
book5 = new Book(`Stolen Things`, 289, "https://images4.penguinrandomhouse.com/cover/9781524744922", 19, 8, "J.D. Salinger");
book6 = new Book(`Fire Color One`, 337, "https://images1.penguinrandomhouse.com/cover/9780399546945", 22, 5, "Richard Adams");

const bs1 = new BookShelf(book1, book2, book3);
const bs2 = new BookShelf(book4, book5, book6);
// console.log(bs);
