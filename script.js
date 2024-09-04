let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addButton = document.getElementById("add");
const clearButton = document.getElementById("clear");
const todoListContainer = document.getElementById("todolist"); 

clear.addEventListener("click", () => {
  clearTodos();
 
});

renderTodoList();

function renderTodoList() {
  todoListContainer.innerHTML = ''; 

  todos.forEach((todoItem, index) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('flex', 'mb-4', 'items-center');
    todoDiv.dataset.index = index;

    const todoText = document.createElement('p');
    todoText.classList.add('w-full', 'text-grey-darkest');
    todoText.textContent = todoItem.text;
    if (todoItem.completed) {
      todoText.classList.add('line-through');
    }

    const doneButton = document.createElement('button');
    doneButton.onclick = () => doneTodo(index);
    doneButton.classList.add('flex-no-shrink', 'p-2', 'ml-4', 'mr-2', 'border-2', 'rounded', 'hover:text-white', 'text-green', 'border-green', 'hover:bg-green');
    doneButton.textContent = 'Done';

    const removeButton = document.createElement('button');
    removeButton.onclick = () => removeTodo(index);
    removeButton.classList.add('flex-no-shrink', 'p-2', 'ml-2', 'border-2', 'rounded', 'text-red', 'border-red', 'hover:text-white', 'hover:bg-red');
    removeButton.textContent = 'Remove';

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(doneButton);
    todoDiv.appendChild(removeButton);
    todoListContainer.appendChild(todoDiv);
  });
}

addButton.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  todos.push({ text: input, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList(); 
});


function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodoList();
}


function clearTodos() {
  todos = [];
  localStorage.clear();
  todoListContainer.innerHTML = '';
}


function doneTodo(index) {
  todos[index].completed = !todos[index].completed; 
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodoList(); 
}
