// The controller transfers information between the model and the view. TaskList is your controller. It puts information onto the DOM and can read information from it. Just like in Rails, your controller can read params and instantiate new objects which it will then render on the DOM.

class TaskList {

  createTask(desc){
    return new Task(desc)
  }

  
}
