let btn=document.getElementById("btn");
let jokes=document.getElementById("jokes");

function fun(){


fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=e0d03f9f188065d9c28369390a12")
.then(res=>res.json())
.then(res=>jokes.innerHTML=res.jokeContent
    ).catch(err=>b.innerHTML=err);

}

fun();



btn.addEventListener("click",fun)