// Your view is your index.html. It contains the HTML template for our single-page application.
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

// LUKES WORK

//   const form = document.getElementById('create-task-form')
//   let d = document.getElementById('new-task-description')
//   let t = document.getElementById('tasks')
//
//   form.addEventListener('submit', function(e){
//     e.preventDefault()
//     let newT = taskList.createTask(d.value)
//     let node = document.createElement('li')
//     node.innerHTML = newT.description
//     let button = document.createElement("button")
//     button.innerHTML = "x"
//     button.setAttribute("data-description", d.value)
//     node.appendChild(button)
//
//     t.appendChild(node)
//     d.value = ""
//   })
//
//   t.addEventListener('click', function(e){
//     let li = e.target.parentElement
//     t.removeChild(li)
//   })
// });

// MY WORK

const newTaskDesc = document.getElementById("new-task-description")
const input = document.getElementById("submit-new-task")
const taskList = document.getElementById("tasks")
const deleteButton = document.getElementById("delete-button")
const taskListItems = document.getElementById("list")

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
