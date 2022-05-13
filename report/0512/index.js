const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const carousel = document.querySelector(".carousel");

const carouselItems = [
    "./public/001.png",
    "./public/004.png",
    "./public/007.png",
    "./public/152.png",
    "./public/155.png",
    "./public/158.png",
]

const createItems = (n) => {
    for(let i = 0; i<n; i++){
        let item = document.createElement("Li");
        let itemImage = document.createElement("Img");
        itemImage.src = carouselItems[i];
        item.appendChild(itemImage);
        item.style.transform = "rotateY(" + 360/n*i + "deg) translateZ(300px)";
        carousel.appendChild(item);
    }
}

const rotateCarousel = (n) => {
    carousel.style.transform = "translateZ(-300px) rotateY(" + (n)/carouselItems.length*360 + "deg)";
};

let currentIndex = 0;

window.addEventListener("load", createItems(carouselItems.length));

nextButton.addEventListener("click", () => {
    rotateCarousel(--currentIndex);
});

prevButton.addEventListener("click", () => {
    rotateCarousel(++currentIndex);
})
