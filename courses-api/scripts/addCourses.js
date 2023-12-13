let coursesService

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService()

    // loadCourses();
    // const getCoursesButton = document.getElementById("getCoursesButton")
    // getCoursesButton.addEventListener("click", getCourseList)

    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", addCourse)

})

async function addCourse(event)
{
    event.preventDefault()
    const dept=document.getElementById("dept").value;
    const courseNum=document.getElementById("courseNum").value;
    const courseName=document.getElementById("courseName").value;
    const instructor=document.getElementById("instructor").value;
    const startDate=document.getElementById("startDate").value;
    const numDays=document.getElementById("numDays").value;
    const course = {
        "dept": dept,
        "courseNum": courseNum,
        "courseName": courseName,
        "instructor": instructor,
        "startDate": startDate,
        "numDays": numDays
    }
    console.log(course) 

    try {     
        // console.log(course)   
        const newCourse = await coursesService.addCourse(course)
        alert(`${newCourse.courseName} has been added`);
        location.href="index.html"
    } catch (error) {
        alert(`There was an error adding ${course.courseName}`)
    }
    

}
