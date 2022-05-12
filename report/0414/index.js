const langButton = document.querySelector("#favLangButton");
const dropdownList = document.querySelector("#dropdownList");
const listItems = dropdownList.querySelectorAll("li");
// select는 보이지는 않지만 리스트의 인덱스와 매칭하기 위해서
const langSelect = document.querySelector("#favoriteLanguageSelect");

langButton.addEventListener("focusin", () => {
    dropdownList.classList.toggle("on");
})

for(let i = 0; i<listItems.length; i++){
    listItems[i].addEventListener("click", () => {
        // selected 초기화
        for(let j = 0; j<langSelect.options.length; j++)
            langSelect.options[j].selected = false;
        // 선택한 리스트의 인덱스를 option의 인덱스와 매칭
        langSelect.options[i+1].selected = true;
        langButton.innerHTML = listItems[i].innerHTML;
        dropdownList.classList.remove("on");
    })
}
