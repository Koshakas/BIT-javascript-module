class Task {
  static tasks = [1, 2, 3];

  static start() {
    console.log(this.tasks);
    this.buttonSaveNewTask();
    this.addNewTaskButton();
    this.load();
  }

  static showCreateModal() {
    const modal = document.querySelector("#create-modal");
    modal.style.display = "block";
    modal.style.opacity = 1;
    // modal.querySelector('.btn-primary').dataset.id = tasks.id;
  }

  static hideCreateModal(id) {
    const modal = document.querySelector("#" + id);
    modal.style.display = "none";
    modal.style.opacity = 0;
    delete modal.querySelector(".btn-secondary").dataset.id;
  }

  static buttonSaveNewTask() {
    const taskTitle = document.querySelector("#create-modal [name=task-title]");
    const taskDescription = document.querySelector("#create-modal [name=task-description]");
    document.querySelector("#btn-save-task").addEventListener("click", () => {
      this.createTask(taskTitle.value, taskDescription.value, "New");
      // console.log(taskTitle.value, taskDescription.value);
    });
  }

  static addNewTaskButton() {
    document.querySelector("#add-new-task").addEventListener("click", () => this.showCreateModal());
  }

  static createTask(taskTitle, taskDescription, taskStatus) {
    this.tasks.push(new Task(taskTitle, taskDescription, taskStatus));
    console.log(tasks);
  }

  static renderTask() {
    this.tasks.forEach(e => {
      e.render();
      console.log(e);
    });
    console.log(this.tasks);
  }

  static save() {
    const data = [];
    this.tasks.forEach(k => {
      data.push({
        taskTitle: k.taskTitle,
        taskDescription: k.taskDescription,
        taskStatus: k.taskStatus,
        taskId: k.taskId
      });
    });
    // console.log(data);

    //Local storage
    localStorage.setItem("tasksApp", JSON.stringify(data));
  }

  static load() {
    if (null === localStorage.getItem("tasksApp")) {
      localStorage.setItem("tasksApp", JSON.stringify([]));
    }
    JSON.parse(localStorage.getItem("tasksApp")).forEach(j => this.createTasksArray(j.taskTitle, j.taskDescription));
  }

  constructor(taskTitle, taskDescription, taskStatus, taskId) {
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
    this.taskStatus = taskStatus;
    this.taskId = taskId;
  }

  render() {
    this.createNewTask();
    this.createNewTaskHtml();
  }

  createNewTask() {
    this.element = document.createElement("div");
    document.querySelector("#new-task").appendChild(this.element);
  }

  createNewTaskHtml() {
    const html = `
      <h4> ${this.taskTitle} </h4>
      <textarea> ${this.taskDescription} </textarea>
      <br>
      <button class="btn btn-primary" data-id="${this.id}"> X </button>
      `;
    this.element.innerHTML = html;
  }
}

Task.start();
