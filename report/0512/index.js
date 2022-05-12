const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const listItems = document.querySelectorAll("Li");

nextButton.addEventListener("click", () => {
    for(let item of listItems){}
    for(let i = 0; i<listItems.length-1; i++) {
        if(listItems[i].classList.contains("left")){
            listItems[i].classList.remove(...listItems[i].classList);
            listItems[i].classList.add("hide");
        }
        else if(listItems[i].classList.contains("mid")){
            listItems[i].classList.remove("mid");
            listItems[i].classList.add("left");
        }
        else if(listItems[i].classList.contains("right")){
            console.log(i);
            listItems[i].classList.remove("right");
            listItems[i].classList.add("mid");

            if(i >= listItems.length){
                listItems[0].classList.remove("hide");
                listItems[0].classList.add("show", "right");
            }
            else{
                listItems[i+1].classList.remove("hide");
                listItems[i+1].classList.add("show", "right");
            }
            break;
        }
    }
});