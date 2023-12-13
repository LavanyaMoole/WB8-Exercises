let coursesService

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService()

    loadCourses();
    const getCoursesButton = document.getElementById("getCoursesButton")
    getCoursesButton.addEventListener("click", getCourseList)

    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", addCourse)

})

async function getCourseList() 
{
    try {
        let courses = await coursesService.getAll()
        console.table(courses)
    } catch (error) {
        alert("something went wrong")
    }
    
}




async function loadCourses(){
    courses= await coursesService.getAll()
    console.log(courses)
    displayCourses(courses)
 }
 function displayCourses(courses){
     document.getElementById("coursesRows").innerHTML = ""
 
     courses.forEach(course => {
         displayTodo(course)
     });
 }
 function displayTodo(course){
     const coursesRows = document.getElementById("coursesRows")
 
     const row = coursesRows.insertRow(-1)
     const idCell = row.insertCell(0)
     idCell.innerText = course.id
     const deptCell = row.insertCell(1)
     deptCell.innerText = course.dept
     const courseNumCell = row.insertCell(2)
     courseNumCell.innerText = course.courseNum
     const courseNameCell = row.insertCell(3)
     courseNameCell.innerText = course.courseName
     const instructorCell = row.insertCell(4)
     instructorCell.innerText = course.instructor
     const startDateCell = row.insertCell(5)
     startDateCell.innerText = course.startDate
     const numDaysCell = row.insertCell(6)
     numDaysCell.innerText = course.numDays
     const editCell = row.insertCell(7)
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
 
         const isDeleteConfirmed = confirm(`You are about to delete ${course.courseName}, do you want to continue?`)
         if(isDeleteConfirmed)
         {
             coursesService.delete(course.id)
                
         }
     })
 
     editButton.addEventListener("click", () => {
        //  location.href = `../editTodos.html?id=${todo.id}`
     })
 
 }
 function addNewClick(){
     location.href="./addCourses.html"
 }