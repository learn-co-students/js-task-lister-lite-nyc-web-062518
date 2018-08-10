
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.getElementById('create-task-form')
  let d = document.getElementById('new-task-description')
  let t = document.getElementById('tasks')

  form.addEventListener('submit', function(e){
    e.preventDefault()
    let newT = taskList.createTask(d.value)
    let node = document.createElement('li')
    node.innerHTML = newT.description
    let button = document.createElement("button")
    button.innerHTML = "x"
    button.setAttribute("data-description", d.value)
    node.appendChild(button)

    t.appendChild(node)
    d.value = ""
  })

  t.addEventListener('click', function(e){
    let li = e.target.parentElement
    t.removeChild(li)
  })
});





// taskList.createTask(desc)
