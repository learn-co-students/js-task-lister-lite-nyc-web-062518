// const button = document.getElementById('create-task-button')
const form = document.getElementById('create-task-form')
const input = document.getElementById('new-task-description')
const list = document.querySelector("#tasks")
const priority = document.getElementById('priority')


document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (priority.value === '') {
    alert("You must select a priority")
  } else {
    let task = new Task(input.value, priority.value)
    let listElement = document.createElement('li')
    listElement.innerHTML = `<strong>Task:</strong> ${task.content} <br> <strong>Priority:</strong> ${task.priority} <button id=button-${task.id} class='delete-button'>remove</button> <br><br>`
    let listPriority = list.querySelector(`#${task.priority}-priority`)
    listPriority.appendChild(listElement)
    input.value = ""
    
    let button = document.getElementById(`button-${task.id}`)
    button.addEventListener("click", () => {
      listElement.remove()
      allTasks = allTasks.filter( (taskElement) => taskElement != task )
    })
  }
})
