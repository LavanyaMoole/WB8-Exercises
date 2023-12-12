let todoService;
document.addEventListener("DOMContentLoaded",()=>{

    todoService = new TodosService()
    
    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", updateTodo)

    const params = new URLSearchParams(location.search)
    if(params.has("id"))
    {
        
        id = params.get("id")
        console.log(id)
        loadTodo(id)
    }
    else {
        alert("You must select a category to edit")
        location.href = "../index.html"
    }
})

async function loadTodo(id) {
    let todo = await todoService.getById(id)
    console.log(todo);

    document.getElementById("todoId").value = todo.id
    document.getElementById("userId").value = todo.userId
    document.getElementById("todotitle").value = todo.title
    document.getElementById("todoCompleted").value = todo.completed
}

async function updateTodo(event) {
    event.preventDefault()

    const id = document.getElementById("todoId").value
    const userId = document.getElementById("userId").value
    const title = document.getElementById("todotitle").value

    const completed= document.getElementById("todoCompleted").value
    // 2. create a JavaScript object - this will be the "body" of the request
    const todo = {
        "id": id,
        "userId": userId,
        "title": title,
        "completed":completed
    }

    await todoService.update(todo)

    location.href = "/index.html"
}