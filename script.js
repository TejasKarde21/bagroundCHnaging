
const main = document.getElementById("main");
const button = document.getElementById("btn");

 
const color = ["orange","red","yellow","gray","cyan"];

let i = 0;
button.addEventListener("click",function(){
     
    main.style.backgroundColor = color[i];
 
    
    i = (i+1) % color.length;
    i++;

});