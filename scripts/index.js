let todoService;
let todos;
document.addEventListener("DOMContentLoaded",()=>{4
    todoService=new TodosService();

    loadTodos();

})
async function loadTodos(){
   todos= await todoService.getAll()
   console.log(todos)
   displayTodos(todos)
}
function displayTodos(todos){
    document.getElementById("todosRows").innerHTML = ""

    todos.forEach(todo => {
        displayTodo(todo)
    });
}
function displayTodo(todo){
    const todoRows = document.getElementById("todosRows")

    const row = todoRows.insertRow(-1)
    const idCell = row.insertCell(0)
    idCell.innerText = todo.id
    const nameCell = row.insertCell(1)
    nameCell.innerText = todo.userId
    const detailsCell = row.insertCell(2)
    detailsCell.innerText = todo.title
    const completedCell = row.insertCell(3)
    completedCell.innerText = todo.completed
    const editCell = row.insertCell(4)
    const editButton = document.createElement("button")
    editButton.classList.add("btn")
    editButton.classList.add("btn-success")
    editButton.classList.add("m-1")
    editButton.innerText = "Edit"
    editCell.appendChild(editButton)
    
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn")
    deleteButton.classList.add("btn-danger")
    deleteButton.classList.add("m-1")
    deleteButton.innerText = "Delete"
    editCell.appendChild(deleteButton)

    // // delete and edit functions
    deleteButton.addEventListener("click", () => {

        const isDeleteConfirmed = confirm(`You are about to delete ${todo.title}, do you want to continue?`)
        if(isDeleteConfirmed)
        {
            todoService.delete(todo.id)
                
        }
    })

    editButton.addEventListener("click", () => {
        location.href = `../editTodos.html?id=${todo.id}`
    })

}
function addNewClick(){
    location.href="./addTodos.html"
}