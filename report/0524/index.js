// setItem(key, value) – 키-값 쌍 저장
    // getItem(key) – 키에 해당하는 값 호출
    // removeItem(key) – 해당 값 삭제
    // clear() – 모든 데이터 삭제
    // key(index) – 인덱스(index)에 해당하는 키 호출
    // length – 저장된 항목의 개수
let note = [];

const noteList= document.querySelector(".noteList");
const closeButtons = document.querySelector(".closeButton");
const saveButton = document.querySelector("#saveButton");
const clearButton = document.querySelector("#clearButton");
const deleteButton = document.querySelector("#deleteButton");
const notepad = document.querySelector("#notepad");

if("noteList" in localStorage){
    note = localStorage.getItem("noteList").split(",");
    listUpdate();
}

saveButton.addEventListener("click", () => {
    let now = timeFormat(new Date());
    note.push(now + notepad.value);
    listUpdate();
    notepad.value = "";
});

clearButton.addEventListener("click", () => {
    notepad.value = "";
});

deleteButton.addEventListener("click", () => {
    if(confirm("모든 메모를 삭제하시겠습니까?")){
        deleteAll();
    }
});

function listUpdate(){
    localStorage.setItem("noteList", note);
    noteList.innerHTML = "";
    localStorage.getItem("noteList").split(",").forEach((content) => {createNote(content)});
}

function createNote(data) {
    let date = data.match(/(\d{1,2}\/\d{1,2} \d{1,2}\:\d{1,2}\:\d{1,2})/g);
    let noteEl = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("upper");
    let closeButton = document.createElement("button");
    closeButton.classList.add("closeButton");
    closeButton.innerText = "×";
    closeButton.addEventListener("click", (e) => {
        deleteOne(e);
    });
    let timeInpo = document.createElement("p");
    timeInpo.classList.add("timeInpo");
    timeInpo.innerText = date;
    let content = document.createElement("p");
    content.classList.add("content");
    content.innerText = data.replace(/(\d{1,2}\/\d{1,2} \d{1,2}\:\d{1,2}\:\d{1,2})/g, "");
    div.append(timeInpo, closeButton);
    noteEl.append(div, content);
    noteList.appendChild(noteEl);
}

function deleteOne(e) {
    if(confirm("메모를 삭제하시겠습니까?")){
        note.splice(note.indexOf(e.currentTarget.parentElement.parentElement.innerText.replace(/[×\n]/g, "")), 1);
        if(note.length === 0){
            deleteAll();
        }
        else{
            listUpdate();
        }
    }
}

function deleteAll(){
    localStorage.removeItem("noteList");
    noteList.innerHTML = "";
}

function timeFormat(time){
    return `${zeroPad(time.getMonth()+1)}/${zeroPad(time.getDate())} ${zeroPad(time.getHours())}:${zeroPad(time.getMinutes())}:${zeroPad(time.getSeconds())}`;
}

function zeroPad(time){
    return ("0"+time).slice(-2);
}