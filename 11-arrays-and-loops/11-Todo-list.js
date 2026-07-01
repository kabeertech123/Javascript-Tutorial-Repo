const todoList = ["Eat Egg mayo", "Eat Mug Cake"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector(".tasks-div").innerHTML = todoListHTML;

  console.log(todoListHTML);
}

function addTodo() {
  const newTask = document.querySelector(".js-input").value;

  todoList.push(newTask);

  console.log(newTask);

  document.querySelector(".js-btn").value = "";

  renderTodoList();

}
