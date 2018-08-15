
document.addEventListener("DOMContentLoaded", () => {

  let taskForm = document.getElementById('create-task-form')
  let tasksList = document.getElementById('tasks')

  taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    let newTask = document.getElementById('new-task-description').value
    let newLi = document.createElement('li')
    let deleteButton = document.createElement('button')
    deleteButton.innerText = "x"
    newLi.innerText = newTask
    newLi.appendChild(deleteButton)
    tasksList.appendChild(newLi)
    document.getElementById('new-task-description').value = ''
  })

  tasksList.addEventListener('click', function(e){
    if(e.target.nodeName === "BUTTON") {
      e.target.parentNode.remove()
    }
  })
});
