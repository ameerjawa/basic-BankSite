'use strict';

let movetosignupbtn = document.getElementById('movetosignup');
let logorrejsec = document.getElementById("logorregsec");
let regsec = document.getElementById("regsec");
let signupbtn = document.getElementById("signupbtn");
let formreg = document.getElementById("formreg");
let cancel = document.getElementById("cancelsignup");
let firsteye = document.getElementById("firsteye");
let secondeye = document.getElementById("secondeye");
let thirdeye = document.getElementById("thirdeye");
let passloginput = document.getElementById("passwordlog");
let passreginput1 = document.getElementById("passwordreg1");
let passreginput = document.getElementById("passwordreg2");
let flageye = false;
firsteye.addEventListener("click",()=>{
if(flageye){
  passloginput.setAttribute("type", "text");
  flageye=false;
}else{
  passloginput.setAttribute("type", "password");
  flageye = true;
}

});
secondeye.addEventListener("click", () => {
  if (flageye) {
    passreginput1.setAttribute("type", "text");
    flageye = false;
  } else {
    passreginput1.setAttribute("type", "password");
    flageye = true;
  }
});
thirdeye.addEventListener("click", () => {
  if (flageye) {
    passreginput.setAttribute("type", "text");
    flageye = false;
  } else {
    passreginput.setAttribute("type", "password");
    flageye = true;
  }
});


cancel.addEventListener("click",(e)=>{
  regsec.setAttribute("class","disablemode");
  logorrejsec.setAttribute("class", "enablemode");
  e.preventDefault();
 
});


movetosignupbtn.addEventListener("click",(e)=>{
    
logorrejsec.setAttribute("class","disablemode");
regsec.setAttribute("class","enablemode");
e.preventDefault();

});

let adminbtn = document.getElementById("admin");
let canceladmin = document.getElementById("canceladmin");
//let overlay = document.getElementById("overlay");
let containeradmin = document.getElementById("container");

 adminbtn.addEventListener("click",(e)=>{
  overlay.setAttribute("class", "enablemode");
  containeradmin.setAttribute("class", "enablemode");
  logorrejsec.setAttribute("class","disablemode");

  e.preventDefault();
  
});
canceladmin.addEventListener("click", (e)=>{
  overlay.setAttribute("class", "disablemode");
  containeradmin.setAttribute("class", "disablemode");
  logorrejsec.setAttribute("class","enablemode");
  e.preventDefault();
});