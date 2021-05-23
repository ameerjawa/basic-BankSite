'use strict';

let transfer = document.getElementById("transfer");
let details = document.getElementById("details");
let sendemail = document.getElementById("sendemail");
let report = document.getElementById("report");
let del = document.getElementById("delete");
let transform = document.getElementById("transferform");
let detailsform= document.getElementById("detailsform");
let emailform= document.getElementById("emailform");
let reportform=document.getElementById("reportform");
let delform = document.getElementById("deletform");
let translist = document.getElementById("translist");





transfer.addEventListener("click" , (e) =>{
    transform.setAttribute("class","enablemode");
   detailsform.setAttribute("class", "disablemode");
   emailform.setAttribute("class", "disablemode");
   reportform.setAttribute("class", "disablemode");
    delform.setAttribute("class", "disablemode");
    translist.setAttribute("class", "disablemode");

    e.preventDefault();
});
details.addEventListener("click", (e) => {
   detailsform.setAttribute("class", "enablemode");
    transform.setAttribute("class", "disablemode");
      emailform.setAttribute("class", "disablemode");
      reportform.setAttribute("class", "disablemode");
       delform.setAttribute("class", "disablemode");
       translist.setAttribute("class", "disablemode");
    e.preventDefault();
});
sendemail.addEventListener("click", (e) => {
   emailform.setAttribute("class", "enablemode");
     transform.setAttribute("class", "disablemode");
     detailsform.setAttribute("class", "disablemode");
     reportform.setAttribute("class", "disablemode");
      delform.setAttribute("class", "disablemode");
      translist.setAttribute("class", "disablemode");
    e.preventDefault();

});
report.addEventListener("click", (e) => {
  reportform.setAttribute("class", "enablemode");
  emailform.setAttribute("class", "disablemode");
  transform.setAttribute("class", "disablemode");
  detailsform.setAttribute("class", "disablemode");
  delform.setAttribute("class", "disablemode");
  translist.setAttribute("class", "disablemode");
  e.preventDefault();
});

del.addEventListener("click", (e) => {
  delform.setAttribute("class","enablemode");
  reportform.setAttribute("class", "disablemode");
  emailform.setAttribute("class", "disablemode");
  transform.setAttribute("class", "disablemode");
  detailsform.setAttribute("class", "disablemode");
  translist.setAttribute("class", "disablemode");
  e.preventDefault();
});

document.getElementById("cancel").addEventListener("click",()=>{
     
    document.getElementById("transferform").setAttribute("class", "disablemode");
    document.getElementById("detailsform").setAttribute("class", "disablemode");
    document.getElementById("emailform").setAttribute("class", "disablemode");
    reportform.setAttribute("class","disablemode");
    delform.setAttribute("class","disablemode");
    translist.setAttribute("class", "enablemode");
});