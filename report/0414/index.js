let langButton = document.getElementById("favoriteLanguageButton");
let dropdownList = document.getElementById("dropdownList");
let listItems = dropdownList.querySelectorAll("li");
// select는 보이지는 않지만 리스트의 인덱스와 매칭하기 위해서
let langSelect = document.getElementById("favoriteLanguageSelect");

langButton.addEventListener("focusin", function(){
    dropdownList.style.display = "block";
    this.style.outline = "3px solid #F8E4FF";
    this.style.border = "1px solid #9B51E0";
    this.style.fontSize = "14px";
    this.style.lineHeight = "16px";
    this.style.backgroundImage = 'url("./public/icon-Triangle-up.png")';
})

langButton.addEventListener("focusout", function(){
    dropdownList.style.display = "none";
    this.style.outline = "none";
    this.style.border = "1px solid #C4C4C4";
    this.style.fontSize = "12px";
    this.style.lineHeight = "14px";
    this.style.backgroundImage = 'url("./public/icon-Triangle-down.png")';
})

for(let i = 0; i<listItems.length; i++){
    listItems[i].onmousedown = function(){
        // selected 초기화
        for(let j = 0; j<langSelect.options.length; j++)
            langSelect.options[j].selected = false;
        // 선택한 리스트의 인덱스를 option의 인덱스와 매칭
        langSelect.options[i+1].selected = true;
        langButton.innerHTML = listItems[i].innerHTML;
        dropdownList.style.display = "none";
    }
}
