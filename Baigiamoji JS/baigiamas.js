class Task {
  static tasksList = [];
  element;
  static taskId = 0;
  static newTasks = 0;
  static pendingTasks = 0;
  static doneTasks = 0;

  static createTask(name, description, status) {
    this.clearTasks();
    this.tasksList.push(new this(name, description, status, ++this.taskId));
    this.save();
    this.renderTasks();
    this.hideModal("#createTaskModal");
  }

  static editTask(id) {
    this.tasksList.forEach(task => {
      if (task.taskId == id) {
        this.clearTasks();
        let check = 0;
        if (task.status == "new") {
          if (this.newTasks <= 1) swiper.slideNext(300, true);
          task.status = "pending";
        } else if (task.status == "pending") {
          if (this.pendingTasks <= 1) swiper.slideNext(300, true);
          task.status = "done";
        } else {
          if (this.doneTasks <= 1) swiper.slideTo(0, 300, true);
          task.status = "new";
        }
        this.renderTasks();
      }
    });
    this.save();
  }

  static deleteTask(id) {
    this.tasksList.forEach((task, i) => {
      if (task.taskId == id) {
        this.clearTasks();
        this.tasksList.splice(i, 1);
        console.log(i, this.tasksList[i]);
        this.renderTasks();
      }
    });
    this.save();
  }

  // --------------------- Buttons START---------------------------

  static newTaskButton() {
    document.querySelector("#add-new-task").addEventListener("click", () => this.showCreateModal());
    const taskName = document.querySelector("input#name");
    const taskDescription = document.querySelector("input#description");
    taskName.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        this.createTask(taskName.value, taskDescription.value, "new");
      }
    });
    taskDescription.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        this.createTask(taskName.value, taskDescription.value, "new");
      }
    });
  }

  static closeModalButton() {
    const close = document.querySelectorAll(".closeModal");
    close.forEach(button => {
      button.addEventListener("click", () => {
        this.hideModal("#createTaskModal");
        this.hideModal("#confirmDeleteModal");
      });
    });
  }

  static confirmCreateButton() {
    const createTaskbtn = document.querySelector("button#createTask");
    createTaskbtn.addEventListener("click", () => {
      const taskName = document.querySelector("input#name");
      const taskDescription = document.querySelector("input#description");
      this.createTask(taskName.value, taskDescription.value, "new");
    });
  }

  static confirmDeleteButton() {
    const confirm = document.querySelector("#confirmDeleteButton");
    confirm.addEventListener("click", e => {
      this.deleteTask(e.target.dataset.id);
      this.hideModal("#confirmDeleteModal");
    });
  }

  static cancelDeleteButton() {
    const cancel = document.querySelector("#cancelDelete");
    cancel.addEventListener("click", () => {
      this.hideModal("#confirmDeleteModal");
    });
  }

  static statusButtons() {
    const newTaskBtn = document.querySelector(".new-task");
    if (this.newTasks == 0) {
      newTaskBtn.style.cursor = "default";
    }
    newTaskBtn.addEventListener("click", () => {
      swiper.slideTo(0, 300, true);
    });

    const pendingTaskBtn = document.querySelector(".pending-task");
    if (this.pendingTasks == 0) {
      pendingTaskBtn.style.cursor = "default";
    }
    pendingTaskBtn.addEventListener("click", () => {
      swiper.slideTo(1, 300, true);
    });

    const doneTaskBtn = document.querySelector(".done-task");
    if (this.doneTasks == 0) {
      doneTaskBtn.style.cursor = "default";
    }
    doneTaskBtn.addEventListener("click", () => {
      swiper.slideTo(2, 300, true);
    });
  }

  // ----------------------Buttons END---------------------------

  //-----------------------Modals START--------------------------
  static showCreateModal() {
    const modal = document.querySelector("#createTaskModal");

    const taskName = document.querySelector("input#name");
    const taskDescription = document.querySelector("input#description");

    taskName.value = sentence(); //random name
    taskDescription.value = sentence() + sentence(); //random task
    modal.style.display = "block"; //show modal

    taskName.focus();
  }

  static showConfirmDeleteModal(taskId, name) {
    const modal = document.querySelector("#confirmDeleteModal");
    modal.style.display = "block";
    modal.querySelector("#confirmDeleteButton").dataset.id = taskId;

    const message = modal.querySelector("h1");
    message.innerHTML = "";
    message.appendChild(document.createTextNode(`Really Delete Task "${name}"?`));
  }

  static hideModal(selector) {
    const modal = document.querySelector(selector);
    modal.style.display = "none";
  }

  //-----------------------Modals END--------------------------

  static save() {
    const save = [];
    this.tasksList.forEach(task => {
      save.push({
        name: task.name,
        description: task.description,
        status: task.status
      });
    });
    localStorage.setItem("todoApp", JSON.stringify(save));
  }

  static load() {
    if (localStorage.getItem("todoApp") == null) {
      localStorage.setItem("todoApp", JSON.stringify([]));
    }
    const restore = JSON.parse(localStorage.getItem("todoApp"));
    restore.forEach(task => {
      this.createTask(task.name, task.description, task.status);
    });
  }

  static renderTasks() {
    this.updateStatus();
    this.tasksList.forEach(task => task.render());
  }

  static updateStatus() {
    this.newTasks = 0;
    this.pendingTasks = 0;
    this.doneTasks = 0;
    this.tasksList.forEach(task => {
      if (task.status == "new") this.newTasks++;
      if (task.status == "pending") this.pendingTasks++;
      if (task.status == "done") this.doneTasks++;
    });
    const newTask = document.querySelector(".new-task");
    newTask.innerHTML = `New: ${this.newTasks}`;

    const pendingTask = document.querySelector(".pending-task");
    pendingTask.innerHTML = `Pending: ${this.pendingTasks}`;
    const doneTask = document.querySelector(".done-task");
    doneTask.innerHTML = `Done: ${this.doneTasks}`;

    const totalTasks = document.querySelector("div.total-tasks");
    totalTasks.innerText = `Total: ${this.newTasks + this.pendingTasks + this.doneTasks}`;
  }

  static clearTasks() {
    document.querySelectorAll("div.task").forEach(task => task.remove());
  }

  static start() {
    this.load();
    this.newTaskButton();
    this.confirmCreateButton();
    this.cancelDeleteButton();
    this.confirmDeleteButton();
    this.closeModalButton();
    this.statusButtons();
  }

  // --------------Objective---------------------

  constructor(name, description, status, taskId) {
    this.name = name;
    this.description = description;
    this.status = status;
    this.taskId = taskId;
  }

  render() {
    this.createTaskElement();
    this.createTaskHtml();
  }

  createTaskElement() {
    this.element = document.createElement("div");
    this.element.classList.add("task");
    document.querySelector(`#task-section .${this.status}`).appendChild(this.element);
  }

  createTaskHtml() {
    const taskHtml = document.createElement("div");
    taskHtml.classList.add(this.status);

    const header = document.createElement("div");
    header.classList.add("task-header");
    header.dataset.id = this.taskId;

    const headerTitle = document.createElement("div");
    headerTitle.appendChild(document.createTextNode(this.name));
    header.appendChild(headerTitle);
    header.addEventListener("dblclick", () => {
      this.constructor.editTask(this.taskId);
    });

    const changeStatus = document.createElement("i");
    changeStatus.classList.add("bi", "bi-check-circle");
    changeStatus.addEventListener("click", () => {
      this.constructor.editTask(this.taskId);
    });
    header.appendChild(changeStatus);

    const del = document.createElement("i");
    del.classList.add("bi", "bi-x-circle");
    header.appendChild(del);
    del.addEventListener("click", () => {
      this.constructor.showConfirmDeleteModal(this.taskId, this.name);
    });

    const body = document.createElement("div");
    body.classList.add("task-body");
    body.appendChild(document.createTextNode(this.description));

    taskHtml.appendChild(header);
    taskHtml.appendChild(body);

    this.element.appendChild(taskHtml);
  }
}

//-------------------------------START Random task generator----------------------

const nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
const adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  const rand2 = Math.floor(Math.random() * 10);
  const rand3 = Math.floor(Math.random() * 10);
  const rand4 = Math.floor(Math.random() * 10);
  const content = "The " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + ".";
  return content;
}

//------------------------------END Random task generator---------------------------
//-----------------------------------Swiper-----------------------------------------
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    // when window width is >= 480px
    540: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});

//-----------------------------------Swiper-----------------------------------------

Task.start();
