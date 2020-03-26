let haha = document.getElementById('btn');
haha.addEventListener('click', btn)

function btn(){
    
var foodcost = prompt("What is the total amount");
var no = prompt("No of people");
console.log("The total cost of food was ", foodcost, );
console.log("Each one of you has to pay ", (foodcost/no).toFixed(2),);


}