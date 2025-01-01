document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      input.value = "";
    }
  });

  function addTodoItem(todoText) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button>Delete</button>
        `;
    todoList.appendChild(todoItem);

    const deleteButton = todoItem.querySelector("button");
    deleteButton.addEventListener("click", function () {
      todoItem.remove();
    });
  }
});
