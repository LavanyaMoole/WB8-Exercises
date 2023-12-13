
document.addEventListener("DOMContentLoaded", ()=> {
    const userName = document.getElementById("userName")
    const role = document.getElementById("role")
    const saveUserName = document.getElementById("saveUserName")
    const deleteDeatils = document.getElementById("delete")

    const clearStorage = document.getElementById("clearStorage")

    saveUserName.addEventListener("click", () => {
        localStorage.userName=userName.value
        localStorage.role=role.value;
        
    })

    deleteDeatils.addEventListener("click", () => {
        localStorage.removeItem("userName")
    })

    clearStorage.addEventListener("click", () => {
        localStorage.clear()
    })

})