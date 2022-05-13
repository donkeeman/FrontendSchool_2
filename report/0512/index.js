const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const carousel = document.querySelector(".carousel");
const listItems = document.querySelectorAll("Li");

const carouselItems = [
    "./public/001.png",
    "./public/004.png",
    "./public/007.png",
];

const createItems = (n) => {
    for(let i = 0; i<n; i++){
        let item = document.createElement("Li");
        let itemImage = document.createElement("Img");
        itemImage.src = carouselItems[i];
        item.appendChild(itemImage);
        item.style.transform = "translateZ(2rem) rotateY(" + 360/n*(1-i) + "deg)";
        carousel.appendChild(item);
    }
}


window.addEventListener("load", createItems(carouselItems.length));

nextButton.addEventListener("click", () => {
   
});