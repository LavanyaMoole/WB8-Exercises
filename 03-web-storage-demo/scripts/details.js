
document.addEventListener("DOMContentLoaded", ()=> {
    const message= document.getElementById("message")

    let userName = localStorage.userName
    let role=localStorage.role

    if(role=="student"||role=="Student"||role=="STUDENT")
    {
        message.innerText = `Welcome Student ${userName}`
    }
    else{
        message.innerText = `Welcome instructor ${userName}`
    }

})