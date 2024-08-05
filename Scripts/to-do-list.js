const tasks = [];

function addTodo(){
  tasks.push(document.querySelector('.js-name-input').value);
  console.log(tasks);
  document.querySelector('.js-name-input').value = '';
}