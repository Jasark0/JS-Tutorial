const tasks = [
    {
      name: 'make dinner',
      dueDate: '2022-12-22'
    },
    {
      name: 'wash dishes',
      dueDate: '2022-12-22'
    }
  ];
  
  updateTask();
  
  function updateTask(){
    let todoTask = '';
    
    tasks.forEach(function(todoObject, index){
        const todoObject = tasks[index];
        const { name, dueDate } = todoObject;
        const html = `
        <div>
            ${name}
        </div>
        <div>
        ${dueDate}
        </div>
        <button onclick="tasks.splice(${index}, 1); updateTask();" class="delete-button">Delete</button>
        `;
        todoTask += html;
    });
  
  document.querySelector('.js-todo-task').innerHTML = todoTask;
  
  }
  function addTodo(){
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    const name = document.querySelector('.js-name-input').value;
  
    tasks.push({name, dueDate});
    document.querySelector('.js-name-input').value = '';
    updateTask();
  }