const tasks = [];

updateTask();

function updateTask(){
  let todoTask = '';

  for (let i=0; i<tasks.length; i++){
  const todo = tasks[i];
  const html = `<p>${todo}</p>`
  todoTask += html;
}

document.querySelector('.js-todo-task').innerHTML = todoTask;
}
function addTodo(){
  tasks.push(document.querySelector('.js-name-input').value);
  console.log(tasks);
  document.querySelector('.js-name-input').value = '';
  updateTask();
}