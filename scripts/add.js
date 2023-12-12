let todoService

document.addEventListener("DOMContentLoaded", () => {
    todoService = new TodosService()

    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", saveNewTodo)
})
async function saveNewTodo(event){
    event.preventDefault()
    // console.log("save button clicked")

    // save the todo to the API
    // 1. build a todo object
    const userId = document.getElementById("userId").value
    const title = document.getElementById("todotitle").value
    const completed = document.getElementById("todoCompleted").value

    // 2. create a JavaScript object - this will be the "body" of the request
    const todo = {
       userId:userId,
       title:title,
       completed:completed
    }

    console.log(todo);
    const newTodo = await todoService.add(todo)
    console.log(newTodo);
    // alert("new todo added to list")
    // go back to the home page
    location.href = "/index.html"
}