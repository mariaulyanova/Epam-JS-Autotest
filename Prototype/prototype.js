// Notes* You can do experiment after each step yourself
// (check proto of objects with constructor function’s prototype)

// Requirements:

// Creation phase
// 1. Define the Task object constructor function.

function Task(title, priority) {
  this.title = title;
  this.priority = priority;
  this.completed = false;
}

// 2. Add a method to the Task prototype to mark a task as complete.

Task.prototype.complete = function() {
  return this.completed = true;
}

// 3. Define the TaskList object using function constructor.

function TaskList() { 
  this.tasks = [];
}

// 4. Add a method to the TaskList prototype to add a new task to the list.

TaskList.prototype.addNewTask = function(title, priority) {
  return this.tasks.push(new Task(title, priority));
}

// 5. Add a method to the TaskList prototype to delete a task from the list.

TaskList.prototype.deleteTask = function(task) {
  let index;
  if (typeof task === 'number') {
    index = task;
  } else if (typeof task === 'string') {
    index = this.tasks.findIndex(a => a.title === task);
  } else {
    throw new Error('Invalid task type');
  }
  if (index === -1) {
    throw new Error('Task not found');
  }
  this.tasks.splice(index, 1);
}

// 6. Add a method to the TaskList prototype to search for a task by its title.

TaskList.prototype.searchTaskByTitle = function(searchStr) {
  const match = this.tasks.find(task => task.title.toLowerCase().includes(searchStr.toLowerCase()));
  return match ? match : `This title doesn't exist.`;
}

// 7. Add a method to the TaskList prototype to sort tasks by priority level or completion status.

TaskList.prototype.sortTaskPriorLevel = function(sortBy) {
  return this.tasks.sort(function(a, b) {
    if (sortBy === 'priority') {
      const priorityLevels = ['high', 'medium', 'low'];
      const priorityA = priorityLevels.indexOf(a.priority);
      const priorityB = priorityLevels.indexOf(b.priority);
      return priorityA - priorityB;
    } else if (sortBy === 'completed') {
      return b.completed - a.completed;
    } else {
      return console.log('You can perfom sorting by PRIORITY or COMPLETED only!');
    
    } 
  })
}

// 8. Add a method to the TaskList prototype to get the count of the completed and outstanding tasks.

TaskList.prototype.countTaskStatus = function() {
  const totalTask = this.tasks.length;
  const completedTask = this.tasks.filter(item => item.completed).length;
  const outstandingTask = totalTask -completedTask; 

  return {completed: completedTask, outstanding: outstandingTask };
}

// 9. Create a new instance of the TaskList object.

const taskList = new TaskList();

//10. Add some initial tasks to the task list. Example
taskList.addNewTask('Clean the house', "high");
taskList.addNewTask('Open the dor', 'low');
taskList.addNewTask("Look at window", 'low');
taskList.addNewTask('Do hometask', 'high');
taskList.addNewTask("Buy groceries", "medium");
taskList.addNewTask("Walk the dog", 'low');

// 11. Log the initial task list and count of completed and outstanding tasks.

console.log(taskList.tasks);
console.log(taskList.countTaskStatus()); //{ completed: 0, outstanding: 6 }

// 12. Mark the first task as complete (using created method) and delete the second task.

taskList.tasks[0].complete();
taskList.deleteTask('Open the dor');
taskList.deleteTask(0);

// 13. Log the updated task list and count of completed and outstanding tasks.

console.log(taskList.tasks); 
console.log(taskList.countTaskStatus()); //{ completed: 1, outstanding: 3 }
console.log(taskList.sortTaskPriorLevel('priority'));

// 14. Search for tasks containing "walk" in their title or identifier.

console.log(taskList.searchTaskByTitle("walk")); // Task { title: 'Walk the dog', priority: 'low', completed: false }
console.log(taskList.searchTaskByTitle('hello')); //This title doesn't exist.

// 15. Sort tasks by priority level and log the updated task list.

taskList.sortTaskPriorLevel("priority");

console.log(taskList.tasks);

// 16. Sort tasks by completion status and log the updated task list.
taskList.tasks[3].complete();
taskList.sortTaskPriorLevel("completed");

console.log(taskList.tasks); 

taskList.sortTaskPriorLevel('sgsgs');
console.log(taskList.tasks); //You can perfom sorting by PRIORITY or COMPLETED only!
