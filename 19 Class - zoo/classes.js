class Animal {
  //----------------------Static---------------------

  static animals = [];
  element;
  static filterSet;

  static createAnimal(specie, tail, color, horns) {
    this.clearZoo();
    this.animals.push(new this(specie, tail, color, horns));
    this.save();
    this.renderZoo();
  }

  static renderZoo() {
    this.animals.forEach(e => e.render());
    this.filterSelect();
  }

  static clearZoo() {
    document.querySelectorAll("div.animal").forEach(e => e.remove());
    this.clearFilterSelect();
  }

  static buttonCreate() {
    const specie = document.querySelector("#name");
    const tail = document.querySelector("#tail");
    const color = document.querySelector("#color");
    const horn = document.querySelector("#horns");
    document.querySelector("button#create").addEventListener("click", e => {
      this.createAnimal(specie.value, tail.value, color.value, horn.checked);
    });
  }

  static buttonEdit() {
    const specie = document.querySelector("#edit-id");
    const tail = document.querySelector("#edit-tail");
    const color = document.querySelector("#edit-color");
    const horn = document.querySelector("#edit-horns");
    document.querySelector("#edit-animal").addEventListener("click", e => {
      this.editAnimal(e.target.dataset.id, specie.value, tail.value, color.value, horn.checked);
    });
  }

  static buttonHideModal() {
    document.querySelector("#edit .close-modal").addEventListener("click", () => this.hideModal("#edit"));
    document.querySelector("#confirm-delete .close-modal").addEventListener("click", () => this.hideModal("#confirm-delete"));
    document.querySelector("#cancel-delete").addEventListener("click", () => this.hideModal("#confirm-delete"));
  }

  static confirmDeleteButton() {
    document.querySelector("#confirm-delete .confirm").addEventListener("click", e => {
      this.deleteAnimal(e.target.dataset.id);
      this.hideModal("#confirm-delete");
    });
  }

  static sortButtons() {
    document.querySelector("#sort_specie").addEventListener("click", e => {
      this.showSorted(e.target.id);
    });
    document.querySelector("#sort_tail_long").addEventListener("click", e => {
      this.showSorted(e.target.id);
    });
  }

  static filterButton() {
    document.querySelector("#filter").addEventListener("click", () => {
      this.showFiltered();
    });
  }

  static showFiltered() {
    const filterValue = document.querySelector("#animals_list").value;
    const an = [];
    this.animals.forEach(animal => {
      if (animal.specie == filterValue) {
        an.push(animal);
      }
    });
    this.animals = an;
    this.clearZoo();
    this.renderZoo();
  }

  static showAllButton() {
    document.querySelector("#show_all").addEventListener("click", () => {
      this.animals = [];
      this.load();
    });
  }

  static showSorted(id) {
    const dir = document.querySelector("#sort_desc").checked ? 1 : -1;
    if (id == "sort_tail_long") {
      this.animals.sort(function (a, b) {
        return dir * (a.tailLength - b.tailLength);
      });
    }
    if (id == "sort_specie") {
      this.animals.sort(function (a, b) {
        const nameA = a.specie.toUpperCase(); // ignore upper and lowercase
        const nameB = b.specie.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -dir;
        }
        if (nameA > nameB) {
          return dir;
        }
      });
    }
    this.clearZoo();
    this.renderZoo();
  }

  static makeFilterSet() {
    this.filterSet = new Set();
    this.animals.sort(function (a, b) {
      const nameA = a.specie.toUpperCase(); // ignore upper and lowercase
      const nameB = b.specie.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });

    this.animals.forEach(animal => {
      this.filterSet.add(animal.specie);
    });
  }

  static filterSelect() {
    const html = document.querySelector("#animals_list");
    this.filterSet.forEach(animal => {
      const option = document.createElement("option");
      option.appendChild(document.createTextNode(animal));
      option.setAttribute("value", animal);
      html.appendChild(option);
    });
  }

  static clearFilterSelect() {
    document.querySelector("#animals_list").innerHTML = "";
  }

  static hideModal(query) {
    const modal = document.querySelector(query);
    modal.style.display = "none";
    modal.style.opacity = 0;
    delete modal.dataset.id;
  }

  static start() {
    this.load();
    this.buttonCreate();
    this.buttonHideModal();
    this.buttonEdit();
    this.confirmDeleteButton();
    this.sortButtons();
    this.filterButton();
    this.showAllButton();
  }

  static deleteAnimal(id) {
    this.animals.forEach((animal, i) => {
      if (animal.id == id) {
        this.clearZoo();
        this.animals.splice(i, 1);
        this.renderZoo();
      }
    });
    this.save();
  }

  static editAnimal(id, specie, tail, color, horn) {
    this.animals.forEach(animal => {
      if (animal.id == id) {
        this.clearZoo();
        animal.specie = specie;
        animal.tailLength = tail;
        animal.color = color;
        animal.hasHorn = horn;
      }
    });
    this.save();
    this.renderZoo();
    this.hideModal("#edit");
  }

  static save() {
    const saved = [];
    this.animals.forEach(animal => {
      saved.push({
        specie: animal.specie,
        tailLength: animal.tailLength,
        color: animal.color,
        hasHorn: animal.hasHorn
      });
    });
    localStorage.setItem("zooApp", JSON.stringify(saved));
    this.makeFilterSet();
  }

  static load() {
    if (localStorage.getItem("zooApp") == null) {
      localStorage.setItem("zooApp", JSON.stringify([]));
    }

    const restore = JSON.parse(localStorage.getItem("zooApp"));
    restore.forEach(animal => {
      this.createAnimal(animal.specie, animal.tailLength, animal.color, animal.hasHorn);
    });
    this.makeFilterSet();
  }

  static showEditModal(animal) {
    const modal = document.querySelector("div#edit");
    modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.zIndex = 1;
    modal.querySelector("#edit-animal").dataset.id = animal.id;

    document.querySelector("#edit-id").value = animal.specie;
    document.querySelector("#edit-tail").value = animal.tailLength;
    document.querySelector("#edit-color").value = animal.color;
    document.querySelector("#edit-horns").checked = animal.hasHorn;
  }

  static showDeleteConfirmModal(id) {
    const modal = document.querySelector("div#confirm-delete");
    modal.style.display = "block";
    modal.style.opacity = 1;
    modal.style.zIndex = 1;
    modal.querySelector("#confirm-delete .confirm").dataset.id = id;

    // this.hideEditModal("div#confirm-delete");
  }

  static hideDeleteConfirmModal() {
    const modal = document.querySelector("div#confirm-delete");
    modal.style.display = "hidden!important";
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
    delete modal.querySelector("div#confirm-delete").dataset.id;
  }

  //---------------------Objective--------------

  constructor(specie, tail, color, hasHorn) {
    this.specie = specie;
    this.tailLength = tail;
    this.color = color;
    this.hasHorn = hasHorn;
    this.id = this.createId(1000000, 9999999);
  }
  render() {
    this.createAnimalElement();
    this.createAnimalHtml();
    this.deleteButton();
    this.editButton();
  }
  createAnimalElement() {
    this.element = document.createElement("div");
    this.element.classList.add("animal");
    document.body.appendChild(this.element);
  }
  createAnimalHtml() {
    let ragai = "";
    if (this.hasHorn) ragai = "turi ragų";
    else ragai = "neturi ragų";
    const html = `
    <h2>${this.specie}</h2>
    <div class="description">Uodegos ilgis: <i>${this.tailLength} cm</i>.<br>
    Spalva - ${this.color}.<br>
    Jis ${ragai}</div>
    <button class="edit" type="button" data-id="${this.id}">Redaguoti</button>
    <button class="delete" type="button" data-id="${this.id}">Ištrinti</button>
    `;
    this.element.innerHTML = html;
  }

  deleteButton() {
    this.element.querySelector("button.delete").addEventListener("click", () => this.constructor.showDeleteConfirmModal(this.id));
  }

  editButton() {
    this.element.querySelector("button.edit").addEventListener("click", () => this.constructor.showEditModal(this));
  }

  createId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(Animal.animals);

Animal.start();
