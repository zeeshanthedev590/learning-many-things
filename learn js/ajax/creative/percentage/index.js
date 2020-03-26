let haha = document.getElementById('btn');
haha.addEventListener('click', btn)

function btn(){
    console.log('You have clicked the Btn');
    var mark = prompt("What are the marks obtained");
    var no = 75;
    var result=mark/no*100;
    console.log("your percentage is",result)

}