let langDiv = document.getElementById("favoriteLanguageDiv");
let langText = document.getElementById("favoriteLanguageText");
let dropdownList = document.getElementById("dropdownList");
let listItems = dropdownList.querySelectorAll("li");
// 값을 서버로 전송할 때는 필요하다?
let langSelect = document.getElementById("favoriteLanguageSelect");

let isListVisible = false;

langDiv.onclick = hideList;

langDiv.addEventListener("focusin", function(){
    this.style.outline = "3px solid #F8E4FF";
    this.style.border = "1px solid #9B51E0";
    this.style.fontSize = "14px";
    this.style.lineHeight = "16px";
    this.style.backgroundImage = 'url("./public/icon-Triangle-up.png")';
})

langDiv.addEventListener("focusout", function(){
    this.style.outline = "none";
    this.style.border = "1px solid #C4C4C4";
    this.style.fontSize = "12px";
    this.style.lineHeight = "14px";
    this.style.backgroundImage = 'url("./public/icon-Triangle-down.png")';
})

dropdownList.onclick = hideList;

for(let i = 0; i<listItems.length; i++){
    listItems[i].onclick = function(){
        // 값을 서버로 전송할 때는 필요하다?
        langSelect.options[i+1].setAttribute("selected", "selected");
        langText.innerHTML = listItems[i].innerHTML;
    }
}

function hideList(){
    dropdownList.style.display = isListVisible ? "none" : "block";
    isListVisible = !isListVisible;
}