//Select DOM
const todoInput = document.querySelector(".todo-input1");
const todoButton = document.querySelector(".todo-button1");
const todoList = document.querySelector(".todo-list1");
const datepicker = document.querySelector(".datepicker1");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);



//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo1");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item1");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button1");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn1");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button1");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn1");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn1") {
    e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall1");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn1") {
    const todo = item.parentElement;
    todo.classList.toggle("completed1");
    console.log(todo);
  }
}


function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos1") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos1"));
  }
  todos.push(todo);
  localStorage.setItem("todos1", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos1") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos1"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos1", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos1") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos1"));
  }
  todos.forEach(function(todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo1");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item1");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
  
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn1");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn1");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}


function getDate() {
  var today = new Date();
  var dd = today.getDate()+1;
  var MM = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(MM<10) {
      MM = '0'+ MM
  } 

  today = yyyy + '-' + MM + '-' + dd;
  console.log(today);
  document.getElementById("datepicker1").value = today;
}


window.onload = function() {
  getDate();
};

