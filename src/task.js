let tasks = []

let taskId = 0

const create = document.getElementById('create')
class Task {
  constructor(description){
    this.description = description
    this.id = ++taskId
    tasks.push(this)
  }
}

create.addEventListener('click', () => {
  let newTask = new Task(document.getElementById('new-task-description').value)
  let newLi = document.createElement('li')

  newLi.setAttribute('id', newTask.id)
  newLi.innerHTML = `${newTask.description}<input type='button' value='X'>`

  let taskList = document.getElementById('tasks')
  taskList.appendChild(newLi)

  let task = document.getElementById(newTask.id)
  let delButton = task.childNodes[1]
  console.log(delButton)
  delButton.addEventListener('click', () => {
    console.log(newTask.id)

    // let task = document.getElementById(newTask.id)
    task.remove()

    let taskToBeDeleted = tasks.find(task => task.id == newTask.id)
    console.log(`tasks.indexOf(taskToBeDeleted) = ${tasks.indexOf(taskToBeDeleted)}`)
    tasks.splice(tasks.indexOf(taskToBeDeleted), 1)
    console.log(tasks)
  }
)

}
)

//

// let aTask = new Task('aisdjiasj')
