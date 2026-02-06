function toggleMenu(){
let sidebar=document.getElementById("sidebar");
sidebar.style.left= sidebar.style.left=="0px" ? "-250px":"0px";
}

function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page).classList.add("active");
}

function openProfile(){
document.getElementById("profile").style.display="block";
}

function closeProfile(){
document.getElementById("profile").style.display="none";
}
function openLogin(){
document.getElementById("loginSidebar").classList.add("active");
}

function closeLogin(){
document.getElementById("loginSidebar").classList.remove("active");
}
function checkLogin(){

let user=localStorage.getItem("loggedIn");

if(!user){
alert("Please login first");
window.location.href="login.html";
}

}
