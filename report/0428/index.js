let result = document.getElementById("result");
const randomButton = document.getElementById("randomButton");

randomButton.onclick = () => {
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    result.innerHTML = parseInt(Math.random() * end) + start;
}