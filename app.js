const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let counter = 0;
const size = carouselImages[0].clientWidth;


firstPic = document.getElementById("firstPic");
secondPic = document.getElementById("secondPic");
thirdPic = document.getElementById("thirdPic");



nextBtn.addEventListener("click", () =>{
    
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    if (counter >= 3) {
        carouselSlide.style.transform = "translateX(" + (0) + "px)";
        counter = 0;
    };
});

prevBtn.addEventListener("click", () =>{
    
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    if (counter === -1) {
        carouselSlide.style.transform = "translateX(" + (-1000) + "px)";
        counter = 2;
    };
});



firstPic.addEventListener("click", () =>{
    counter = 0;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    if (counter === -1) {
        carouselSlide.style.transform = "translateX(" + (-1000) + "px)";
        counter = 0;
    };
});

secondPic.addEventListener("click", () =>{
    counter = 1;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

thirdPic.addEventListener("click", () =>{
    
    counter = 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});