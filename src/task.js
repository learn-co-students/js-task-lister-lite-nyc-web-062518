let allTasks = []

let taskId = 0

class Task {
  constructor(content, priority) {
    this.id = ++ taskId
    this.content = content
    this.priority = priority
    allTasks.push(this)
  }
}
