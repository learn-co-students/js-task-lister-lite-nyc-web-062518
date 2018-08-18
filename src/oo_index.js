// Your view is your index.html. It contains the HTML template for our single-page application.

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const newTaskDesc = document.getElementById("new-task-description")
const input = document.getElementById("submit-new-task")
const taskList = document.getElementById("tasks")
const deleteButton = document.getElementById("delete-button")
const taskListItems = document.getElementById("list")

let select = `<select id="select-priority" onchange="changeColor()">
  <option value="high">High
  <option value="medium">Medium
  <option value="low">Low
  </select>`

input.addEventListener("click", event => {
  const li = document.createElement("li")
  if (newTaskDesc.value.length > 0) {
    li.innerHTML = `${newTaskDesc.value}  <button class="delete-button"> Delete </button> | ${select}`
    taskList.appendChild(li)
    event.preventDefault()
    newTaskDesc.value = ""
  }
})

taskListItems.addEventListener("click", event => {
  if (event.target.innerText === "Delete") {
    event.target.parentElement.remove()
  }
})
