var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num1 = parseInt(num1);
var num2 = parseInt(num2);

var somar = document.getElementById("somar");
somar.addEventListener("click", funcSomar);

function funcSomar (num1, num2){
    var res = num1 + num2;
    alert(res);
}

