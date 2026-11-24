const save=document.getElementById("save")
const username=document.getElementById("name")
const age=document.getElementById("age")
const display=document.getElementById("display")
let user= JSON.parse(localStorage.getItem("user")) || {}

save.addEventListener("click", function(){
    user={
        name:username.value,
        age:age.value
    };
    localStorage.setItem("user", JSON.stringify(user));
    display.textContent=`Name: ${user.name}, Age: ${user.age}`;
});