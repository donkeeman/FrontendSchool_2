document.querySelectorAll(".options button").forEach(item => item.addEventListener("click", function() {
    const command = item.dataset.command;
    if(command === "h1" || command === "h2" || command === "h3" || command === "p"){
        // 선택한 커맨드가 있는 블록을 영역으로 잡아서, 그 태그 자체를 변경시켜버림
        // 근데 deprecated인데?
        document.execCommand("formatBlock", false, command);
    }
    else{
        // 이건 커맨드 자체를 변경시킴
        document.execCommand(command);
    }
}));