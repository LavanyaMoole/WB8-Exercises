class CoursesService {
    baseUrl = 'http://localhost:8081/api/courses'

    async getAll()
    {
        return fetch(this.baseUrl).then(response => response.json())
    }


    async addCourse(course)
    {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-Type": "application/json; charset=UTF-8"}

        }
         return fetch(this.baseUrl, requestInfo)
                .then(response => response.json())
    }
   async  delete(id){
        let url = `${this.baseUrl}/${id}`
        const requestInfo = {
            method: "DELETE"
        }

        return fetch(url, requestInfo)
    }
}