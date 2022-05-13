const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const carousel = document.querySelector(".carousel");

const carouselItems = [
    {
        src: "./public/001.png",
        alt: "이상해씨",
    },
    {
        src: "./public/004.png",
        alt: "파이리",
    },
    {
        src: "./public/007.png",
        alt: "꼬부기",
    },{
        src: "./public/152.png",
        alt: "치코리타",
    },{
        src: "./public/155.png",
        alt: "브케인",
    },{
        src: "./public/158.png",
        alt: "꼬부기",
    },
]

const createItems = (n) => {
    for(let i = 0; i<n; i++){
        let item = document.createElement("Li");
        let itemImage = document.createElement("Img");
        itemImage.src = carouselItems[i].src;
        itemImage.alt = carouselItems[i].alt;
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
