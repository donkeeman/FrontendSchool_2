let loginButton = document.getElementById("loginButton");
let closeButton = document.getElementById("closeButton");
let modal = document.getElementById("modalContainer");

loginButton.onclick = function(){
    modal.style.display = "block";
}

closeButton.onclick = function(){
    modal.style.display = "none";
}