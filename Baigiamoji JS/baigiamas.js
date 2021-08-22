class Task {
  static tasksList = [];
  element;
  static taskId = 0;

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
        if (task.status == "new") task.status = "pending";
        else if (task.status == "pending") task.status = "done";
        else task.status = "new";
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
    this.tasksList.forEach(task => {
      if (task.status == "new") task.render();
    });
    this.tasksList.forEach(task => {
      if (task.status == "pending") task.render();
    });
    this.tasksList.forEach(task => {
      if (task.status == "done") task.render();
    });
  }

  static updateStatus() {
    let newTasks = 0;
    let pendingTasks = 0;
    let doneTasks = 0;
    this.tasksList.forEach(task => {
      if (task.status == "new") newTasks++;
      if (task.status == "pending") pendingTasks++;
      if (task.status == "done") doneTasks++;
    });
    const newTask = document.querySelector(".new-task");
    newTask.innerHTML = `New&nbsp;tasks:&nbsp${newTasks}`;

    const pendingTask = document.querySelector(".pending-task");
    pendingTask.innerHTML = `Pending&nbsp;tasks:&nbsp${pendingTasks}`;

    const doneTask = document.querySelector(".done-task");
    doneTask.innerHTML = `Done&nbsp;tasks:&nbsp${doneTasks}`;
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
    document.querySelector("section#task-list").appendChild(this.element);
  }

  createTaskHtml() {
    const taskHtml = document.createElement("div");
    taskHtml.classList.add(this.status);
    const header = document.createElement("div");
    header.classList.add("task-header");
    header.dataset.id = this.taskId;
    header.appendChild(document.createTextNode(this.name));
    header.addEventListener("dblclick", () => {
      this.constructor.editTask(this.taskId);
    });

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

Task.start();
