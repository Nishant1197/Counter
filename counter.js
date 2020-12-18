const Decrease=document.getElementById("Decrease");
const Reset=document.getElementById("Reset");
const Increase=document.getElementById("Increase");
const span=document.querySelector("span")
var c=0;
Decrease.addEventListener("click",function(){
    c=c-1;
    span.textContent=c;

})
Reset.addEventListener("click",function(){
    c=0;
    span.textContent=c;

})
Increase.addEventListener("click",function(){
    c=c+1
    span.textContent=c;

})
