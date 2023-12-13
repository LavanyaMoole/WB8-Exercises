let coursesService

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService()

    const getCoursesButton = document.getElementById("getCoursesButton")
    getCoursesButton.addEventListener("click", getCourseList)

    const addCourseButton = document.getElementById("addCourseButton")
    addCourseButton.addEventListener("click", addCourse)

})

function getCourseList() 
{
    coursesService.getAll()
                    .then(courses => {
                        // if the API call returned a 2xx
                        // success - you can use the data
                        console.table(courses);
                    })
                    .catch(error => {
                        alert("something went wrong")
                    })
}

function addCourse()
{
    const course = {
        courseName: "Advaned APIs",
        courseNum: 301,
        dept: 'CompSci'
    }

    coursesService.addCourse(course)
                  .then(course => {
                        alert(`${course.name} was added`);
                  })
                  .catch(() => {
                    alert("There was an error")
                  })
}