let langButton = document.getElementById("favLangButton");
let dropdownList = document.getElementById("dropdownList");
let listItems = dropdownList.querySelectorAll("li");
// select는 보이지는 않지만 리스트의 인덱스와 매칭하기 위해서
let langSelect = document.getElementById("favoriteLanguageSelect");

langButton.addEventListener("focusin", () => {
    dropdownList.classList.toggle("on");
})

for(let i = 0; i<listItems.length; i++){
    listItems[i].onclick = function(){
        // selected 초기화
        for(let j = 0; j<langSelect.options.length; j++)
            langSelect.options[j].selected = false;
        // 선택한 리스트의 인덱스를 option의 인덱스와 매칭
        langSelect.options[i+1].selected = true;
        langButton.innerHTML = listItems[i].innerHTML;
        dropdownList.classList.remove("on");
    }
}
