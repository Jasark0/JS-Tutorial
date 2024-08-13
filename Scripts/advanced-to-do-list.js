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
    
    tasks.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>
            ${name}
        </div>
        <div>
        ${dueDate}
        </div>
        <button class="delete-button js-delete-todo-button">Delete</button>
        `;
        todoTask += html;
    });
  
    document.querySelector('.js-todo-task').innerHTML = todoTask;
    
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          tasks.splice(index, 1); 
          updateTask();
        });
      }); 
  }

  document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
  });

  function addTodo(){
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    const name = document.querySelector('.js-name-input').value;
    
    if (dueDate === '' && name === ''){
      alert('Enter a Todo Name and a Due Date!');
      return;
    }
    tasks.push({name, dueDate});
    document.querySelector('.js-name-input').value = '';
    updateTask();
  }