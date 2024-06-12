let number;
let radius;
const PI = Math.PI;
let age;

//YOU CAN REMOVE IF YOU WANT
document.getElementById("sub").onclick = function(){
    age = document.getElementById("num").value;
    age < 0 ? document.getElementById("res").textContent = "That's not possible" : document.getElementById("res").textContent = `You are ${age} years old`;  
}


/*document.getElementById("btn").onclick = function(){
    number = document.getElementById("rad").value;
    radius = number * 2 * PI;
    radius = radius.toFixed(2);
    document.getElementById("anw").innerHTML = radius + "units";
}

document.getElementById("btn2").onclick = function(){
    number = document.getElementById("area").value;
    radius = number * number * PI;
    radius = radius.toFixed(2);
    document.getElementById("anw2").innerHTML = radius + "units";
}
*/
