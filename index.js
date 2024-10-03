let btn=document.querySelector('button')
btn.addEventListener("click",function(){
   let h3=document.querySelector('h3')
   let newcolor=randomcolor()
   h3.innerHTML=newcolor
   let div=document.querySelector('div')
   div.style.backgroundColor=newcolor;
})
function randomcolor(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color=`rgb(${red},${green},${blue})`
console.log("new color updated")
return color
}