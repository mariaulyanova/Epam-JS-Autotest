// Create classes Task and TaskList with the following features:

// 1. Add task to the list
// 2. Get and display the list of all tasks in the console using the following format 
//    "[new] Task 1", "[completed] Task2"
// 3. Check task as a completed task
// 4. Remove task from the list of tasks.
// 5. Sort tasks alphabetically in asc or desc order
// 6. Clear the list of tasks.

class Task {
  constructor(taskTitle) {
    this.taskTitle = taskTitle;
    this.completed = false;
  }
  
  complete() {
    this.completed = true;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskTitle) {
    const task = new Task(taskTitle);
    this.tasks.push(task);
  }

  removeTask(taskTitle) {
    this.tasks = this.tasks.filter(task => task.taskTitle !== taskTitle);
  }

  getDisplayTask() {
    this.tasks.forEach(task => {
      const status = task.completed ? '[completed]' : '[new]';
      console.log(`"${status} ${task.taskTitle}"`);
    });
  }

  taskAsCompleted(taskTitle) {
    const task = this.tasks.find(task => task.taskTitle === taskTitle);
    if (task) {
      task.complete();
    }
  }

  sortASC() {
    this.tasks.sort((a, b) => a.taskTitle.localeCompare(b.taskTitle));
  }

  sortDESC() {
    this.tasks.sort((a, b) => b.taskTitle.localeCompare(a.taskTitle));
  }

  clearTask() {
    this.tasks = [];
  }
}

const taskList = new TaskList();

taskList.addTask('Cook the dinner');
taskList.addTask('Go out on the walk');
taskList.addTask('Call mom');
taskList.addTask('Do home task');

taskList.getDisplayTask();
// OUTPUT:
// "[new] Cook the dinner"
// "[new] Go out on the walk"
// "[new] Call mom"
// "[new] Do home task"

taskList.taskAsCompleted('Call mom');
taskList.taskAsCompleted('Do home task');

taskList.getDisplayTask();
// "[new] Cook the dinner"
// "[new] Go out on the walk"
// "[completed] Call mom"
// "[completed] Do home task"

taskList.sortASC();
taskList.getDisplayTask();
// OUTPUT:
// "[completed] Call mom"
// "[new] Cook the dinner"
// "[completed] Do home task"
// "[new] Go out on the walk"

taskList.sortDESC();
taskList.getDisplayTask();
// OUTPUT:
// "[new] Go out on the walk"
// "[completed] Do home task"
// "[new] Cook the dinner"
// "[completed] Call mom"

taskList.removeTask('Go out on the walk');
taskList.getDisplayTask();
// OUTPUT:
// "[completed] Do home task"
// "[new] Cook the dinner"
// "[completed] Call mom"

taskList.clearTask();
taskList.getDisplayTask();
// OUTPUT:
// (Empty output)
