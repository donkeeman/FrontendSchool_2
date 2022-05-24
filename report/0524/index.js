// setItem(key, value) – 키-값 쌍 저장
    // getItem(key) – 키에 해당하는 값 호출
    // removeItem(key) – 해당 값 삭제
    // clear() – 모든 데이터 삭제
    // key(index) – 인덱스(index)에 해당하는 키 호출
    // length – 저장된 항목의 개수

let note = [];
note.push('panic station - muse');
note.push('hysteria - muse');
note.push('psycho - muse');

localStorage.setItem("noteList", note);

console.log(localStorage.getItem("noteList").split(","));

const noteList= document.querySelector(".noteList");
const closeButtons = document.querySelector(".closeButton");

const createNote = (content) => {
    let noteEl = document.createElement("li");
    let closeButton = document.createElement("button");
    closeButton.classList.add("closeButton");
    closeButton.innerText = "x";
    noteEl.append(closeButton, content);
    noteList.appendChild(noteEl);
};

note.forEach((content) => {createNote(content)});

closeButtons.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    if(confirm("메모를 삭제하시겠습니까?")){
        noteList.removeChild(e.currentTarget.parentElement);
    }
});
