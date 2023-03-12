// if(!localStorage.getItem('Auth')){

// location.href= "login.html";
// }

// console.log(localStorage.getItem("Auth"))

let res = JSON.parse(localStorage.getItem("Auth"));
document.getElementById("porifile-email").innerText = res.email;

$(function(){
    $("#nav-placeholder").load("index.html");
  });

