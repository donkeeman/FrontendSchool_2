const userTask = document.querySelector(".artcl_main input");
const addBtn = document.querySelector(".artcl_main button");
const listTodo = document.querySelector(".list_todo");
const main = document.querySelector(".artcl_main");

addBtn.addEventListener("click", createListItem);

// 에러 메시지
const message = document.createElement("strong");
message.style.display = "none";
message.style.color = "red";
main.append(message);
userTask.addEventListener("input", () => {
    message.style.display = "none";
});

// 다운로드 버튼
const downloadBtn = document.createElement("button");
downloadBtn.classList.add("btn");
downloadBtn.textContent = "리스트 다운로드";
document.body.append(downloadBtn);
downloadBtn.addEventListener("click", downloadFile);

const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

function saveTasks() {
    window.localStorage.setItem("tasklist", JSON.stringify(tasks));
}

if (tasks) {
    tasks.forEach((task) => {
        genItem(task.textContent, task.checked);
    });
    showDownload();
}

function createListItem() {
    const val = userTask.value;
    if (val) {
        const myObj = {
            val: genItem(val, false),
            checked: false,
        };
        tasks.push(myObj);
        saveTasks();
        showDownload();
    } else {
        errorMsg("내용을 작성해 주세요.");
    }
}

function genItem(val, complete) {
    const li = document.createElement("li");
    li.textContent = val;
    listTodo.append(li);

    userTask.value = "";

    if (complete) {
        li.classList.add("done");
    }

    li.addEventListener("click", () => {
        li.classList.toggle("done");
        buildTasks();
    });

    const btn = document.createElement("button");
    btn.innerHTML = "<i class='fa-solid fa-trash'></i>";
    li.append(btn);
    btn.addEventListener("click", () => {
        li.remove();
        showDownload();
        buildTasks();
    });
    return val;
}

function buildTasks() {
    tasks.length = 0;
    const curList = listTodo.querySelectorAll("li");
    curList.forEach((el) => {
        const tempTask = {
            val: el.textContent,
            checked: false,
        };

        if (el.classList.contains("done")) {
            tempTask.checked = true;
        }
        tasks.push(tempTask);
    });
    saveTasks();
}

function showDownload() {
    const curList = listTodo.querySelectorAll("li");
    if (curList.length > 0) {
        downloadBtn.style.display = "block";
    } else {
        downloadBtn.style.display = "none";
    }
}

function errorMsg(msg) {
    message.style.display = "block";
    message.textContent = msg;
    userTask.focus();
}

function downloadFile() {
    let temp = "<나의 할 일 목록>\n\n";
    const curList = listTodo.querySelectorAll("li");
    curList.forEach((el) => {
        if (el.classList.contains("done")) {
            temp += `완료 - `;
        }
        temp += `${el.textContent}\n`;
    });
    let element = document.createElement("a");
    element.setAttribute(
        "href",
        "data:text/plain; charset=utf-8," + encodeURIComponent(temp)
    );
    element.setAttribute("download", "todoList.txt");
    element.click();
    element = null;
}
