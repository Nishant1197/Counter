const colors=["green","red","blue","yellow"];
const button=document.getElementById("btn");
const body=document.querySelector('body');
const span=document.querySelector("span")
let c=0
button.addEventListener("click",function()
{
 
    index=generaterandom()
    body.style.backgroundColor=colors[index]
    span.textContent=colors[index]
    
})
function generaterandom(){
    return Math.floor(Math.random()*colors.length)
}