let btn=document.getElementById("btn");
let name=document.getElementById("name")
let email=document.getElementById("email")
let message=document.getElementById("message")
btn.addEventListener("click",function(){
    if (name.value==""){
        alert("please fill name ")
        return ;
    }
    if (email.value==""){
        alert("please fill email ")
        return ;
    }
    if (message.value==""){
        alert("leave a message ")
        return ;
    }
    
})