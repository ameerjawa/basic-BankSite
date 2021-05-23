

let transtablebtn = document.getElementById("transbtn");
let deposetbtn = document.getElementById("deposit");
let transtable = document.getElementById("transtable");
let depositform = document.getElementById("depositform");
let cancelbtn= document.getElementById("cancel");


transtablebtn.addEventListener("click" , (e)=>{
    transtable.setAttribute("class","enablemode");
    depositform.setAttribute("class", "disablemode");
    e.preventDefault();

});
deposetbtn.addEventListener("click", (e) => {
  transtable.setAttribute("class", "disablemode");
  depositform.setAttribute("class","enablemode");
    e.preventDefault();
});


cancelbtn.addEventListener("click",(e)=>{
    transtable.setAttribute("class", "disablemode");
    depositform.setAttribute("class", "disablemode");
});
