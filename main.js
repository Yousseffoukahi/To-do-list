let inputTask = document.getElementById('inp');
let addTask = document.getElementById('add');
let deleteTask =document.getElementById('delete');
let check = document.getElementById('check');
let task = document.getElementById('task');
let taskContainer = document.querySelector('.task-container');

const taskList = [];

// add task function
add.addEventListener('click', ()=> {
    let task = inputTask.value.trim()
    if (task) {
        taskList.push(task);
    }else {
        alert("Please enter a task");
    }
});
