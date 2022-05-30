// execCommand 함수를 사용하지 않는 버전
// 다만, 한 번 스타일을 적용하고 나면 취소가 안 됨
// 이 예외처리는 알아서...

const editor = document.querySelector(".editor");

document.querySelectorAll(".options button").forEach(item => item.addEventListener("click", function() {
    const command = item.dataset.command;
    // align
    if(command.includes("style")){
        const selectedTxt = window.getSelection();
        const parentEl = selectedTxt.anchorNode.parentElement;
        parentEl.style.textAlign = command.slice(6);
    }
    // html 요소를 이용해서 바꾸기
    else{
        const createEl = document.createElement(command);
        // 블록 지정한 영역을 선택
        const selectedTxt = window.getSelection();

        // h1, h2, h3, p
        if(command === "h1" || command === "h2" || command === "h3" || command === "p"){
            // anchorNode: 선택한 영역의 첫번째 노드
            const parentEl = selectedTxt.anchorNode.parentElement;
            // 부모 영역의 텍스트를 옮겨와서
            createEl.textContent = parentEl.textContent;
            // 위에서 생성해준 새로운 요소와 기존 요소를 바꿔치기함
            editor.replaceChild(createEl, parentEl);
        }
        // bold, italic, underline, strikethrough
        else{
            const selectedTxtRange = selectedTxt.getRangeAt(0);
            // 선택한 영역만 감싸는 것
            selectedTxtRange.surroundContents(createEl);
        }
    }
}));