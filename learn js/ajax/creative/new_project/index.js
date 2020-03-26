
let luck = document.getElementById('good');
luck.addEventListener('click', epic)
function epic(){
    console.log("you pressed the start btn")
    document.getElementById("demo").innerHTML = 
Math.floor(Math.random() * 100,);
}