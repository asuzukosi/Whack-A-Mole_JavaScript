
document.addEventListener("DOMContentLoaded",()=>{
  //alert("Hello");

for(let i = 0; i<9; i++){
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i)
    document.getElementById("grid").append(box)

  }

   setInterval(()=>{
     let index = Math.round(Math.random()*9)
     let rem = 5
     setInterval(()=>{
       if(rem == -1){
         rem = 5;
       }
       document.getElementById("time").innerHTML = rem;
       rem --
     },100)
     document.getElementById(index).setAttribute("class", "mole");
     document.getElementById(index).addEventListener("click",whack);
     setTimeout(()=>{
       document.getElementById(index).setAttribute("class", "box");
       document.getElementById(index).removeEventListener("click",whack);
     },500)
   },500)
})

function whack(){
  alert("HIT");
}
