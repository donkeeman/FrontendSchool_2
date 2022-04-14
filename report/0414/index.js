let favoriteLanguageSelect = document.getElementById("favoriteLanguageSelect");

let dropdownList = document.getElementById("dropdownList");

let options = dropdownList.querySelectorAll("li");

let isListVisible = false;

favoriteLanguageSelect.onclick = hideList;

dropdownList.onclick = hideList;

for(let i = 0; i<options.length; i++){
    options[i].onclick = function(){
        favoriteLanguageSelect.options[i+1].setAttribute("selected", "selected");
    }
}

function hideList(){
    dropdownList.style.visibility = isListVisible ? "hidden" : "visible";
    isListVisible = !isListVisible;
}

