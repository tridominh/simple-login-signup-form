var loginPill = document.getElementById("tab-login");
var registerPill = document.getElementById("tab-register");
var login = document.getElementsByClassName("tab-pane fade")[0];
var register = document.getElementsByClassName("tab-pane fade")[1];

document.getElementById("tab-login").addEventListener("click", switchLogin);
document.getElementById("tab-register").addEventListener("click", switchRegister);

function switchRegister(){
    loginPill.className = "nav-link";
    registerPill.className = "nav-link active";
    login.className = "tab-pane fade";
    register.className = "tab-pane fade show active";
}

function switchLogin(){
    registerPill.className = "nav-link";
    loginPill.className = "nav-link active";
    register.className = "tab-pane fade";
    login.className = "tab-pane fade show active";
}