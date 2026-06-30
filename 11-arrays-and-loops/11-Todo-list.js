const todoList = ['Eat Egg mayo', 'Eat Mug Cake'];
const p = ['p1', 'p2', 'p3']

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
}

document.querySelector('.js-odo-list-div').innerHTML = todoListHTML;

console.log(todoListHTML);


function addTodo(){
    const newTask = document.querySelector('#input-box-2').value

    todoList.push(newTask);

    console.log(newTask);

    document.querySelector('#input-box-2').value = '';


}