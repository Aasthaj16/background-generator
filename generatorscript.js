var css=document.querySelector("h3");
var color1=document.querySelector(".colorpicker1");
var color2=document.querySelector(".colorpicker2");
var body=document.getElementById("gradient");


function changeinbg(){
    body.style.background=
    "linear-gradient(to right,"
    +color1.value
    + ", "
    +color2.value
    +")";
    css.textContent=body.style.background+";";
}


color1.addEventListener("input",changeinbg);
color2.addEventListener("input",changeinbg);

