let result = document.getElementById("result");
const randomButton = document.getElementById("randomButton");

randomButton.onclick = () => {
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    if(end < start){
        alert("시작 숫자는 끝 숫자보다 작아야 합니다.");
        return;
    }
    result.innerHTML = parseInt(Math.random() * end) + start;
}