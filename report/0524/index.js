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
    note.push(notepad.value);
    listUpdate();
    notepad.value = "";
});

clearButton.addEventListener("click", () => {
    notepad.value = "";
});

deleteButton.addEventListener("click", () => {
    if(confirm("모든 메모를 삭제하시겠습니까?")){
        localStorage.removeItem("noteList");
        noteList.innerHTML = "";
    }
});

function listUpdate(){
    localStorage.setItem("noteList", note);
    noteList.innerHTML = "";
    localStorage.getItem("noteList").split(",").forEach((content) => {createNote(content)});
}

function createNote(content) {
    let noteEl = document.createElement("li");
    let closeButton = document.createElement("button");
    closeButton.classList.add("closeButton");
    closeButton.innerText = "×";
    closeButton.addEventListener("click", (e) => {
        deleteNote(e);
    });
    noteEl.append(closeButton, content);
    noteList.appendChild(noteEl);
}

function deleteNote(e) {
    if(confirm("메모를 삭제하시겠습니까?")){
        note.splice(note.indexOf(e.currentTarget.parentElement.innerText.replace("×\n", "")), 1);
        if(note.length === 0){
            localStorage.removeItem("noteList");
            noteList.innerHTML = "";
        }
        else{
            listUpdate();
        }
    }
}