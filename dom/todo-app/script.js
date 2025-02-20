const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const value = todoInput.value;

  const item = document.createElement('li');
  item.innerText = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';
  
  item.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    item.remove();
  });

  todoList.appendChild(item);

  todoInput.value = '';
});