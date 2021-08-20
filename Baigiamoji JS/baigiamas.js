class Task {
  static tasksList = [];
  element;
  static taskId = 0;

  static createTask(name, description) {
    this.clearTasks();
    this.tasksList.push(new this(name, description, ++this.taskId));
    this.save();
    this.renderTasks();
    this.hideModal("#createTaskModal");
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
        this.createTask(taskName.value, taskDescription.value);
      }
    });
    taskDescription.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        this.createTask(taskName.value, taskDescription.value);
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
      this.createTask(taskName.value, taskDescription.value);
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

  // ----------------------Buttons END---------------------------

  //-----------------------Modals START--------------------------
  static showCreateModal() {
    const modal = document.querySelector("#createTaskModal");

    const taskName = document.querySelector("input#name");
    const taskDescription = document.querySelector("input#description");

    taskName.value = ""; //reset input fields
    taskDescription.value = ""; //reset input fields
    modal.style.display = "block"; //show modal

    taskName.focus();
  }

  static showConfirmDeleteModal(taskId) {
    const modal = document.querySelector("#confirmDeleteModal");
    modal.style.display = "block";
    modal.querySelector("#confirmDeleteButton").dataset.id = taskId;
    console.log(taskId);
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
    this.tasksList.forEach(e => e.render());
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
    console.log(this.tasksList);
  }

  // --------------Objective---------------------

  constructor(name, description, taskId) {
    this.name = name;
    this.description = description;
    this.status = "new";
    this.taskId = taskId;
  }

  render() {
    this.createTaskElement();
    this.createTaskHtml();
  }

  createTaskElement() {
    this.element = document.createElement("div");
    this.element.classList.add("task");
    document.querySelector("section#task-list").appendChild(this.element);
  }

  createTaskHtml() {
    const taskHtml = document.createElement("div");
    taskHtml.classList.add(this.status);
    // console.log(this.status);
    const header = document.createElement("div");
    header.classList.add("task-header");
    header.appendChild(document.createTextNode(this.name));
    // console.log(this.name);

    const del = document.createElement("i");
    del.classList.add("bi", "bi-x-circle");
    header.appendChild(del);
    del.addEventListener("click", e => {
      this.constructor.showConfirmDeleteModal(this.taskId);
      console.log(this.taskId);
    });

    const body = document.createElement("div");
    body.classList.add("task-body");
    body.appendChild(document.createTextNode(this.description));

    taskHtml.appendChild(header);
    taskHtml.appendChild(body);

    this.element.appendChild(taskHtml);
  }
}

Task.start();
