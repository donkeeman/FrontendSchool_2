const alwaysLoginButton = document.getElementById("alwaysLogin");
let checked = false;

alwaysLoginButton.addEventListener("click", function() {
    document.getElementById("checkImg").src = checked ? "./LHW_LION_img/icon_check_empty.png" : "./LHW_LION_img/icon_check.png";
    checked = !checked;
});

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function() {
    checked ? alert("로그인 되었습니다. 로그인 상태가 유지됩니다.") : alert("로그인 되었습니다. 로그인 상태가 유지되지 않습니다.");
})

const createAccountButton = document.getElementById("createAccount");
createAccountButton.addEventListener("click", function() {
    alert("회원가입 페이지로 이동합니다.");
})

const findAccountButton = document.getElementById("findAccount");
findAccountButton.addEventListener("click", function() {
    alert("아이디/비밀번호 찾기 페이지로 이동합니다.");
})
