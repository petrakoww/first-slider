const slider = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let counter = 0;
const size = carouselImages[0].clientWidth;


//dynamic circle
const sliderContainer = document.querySelector('.carousel-container');
const numberOfItems = slider.children.length;

const circleDiv = document.createElement("div");
circleDiv.style.textAlign = "center";
sliderContainer.appendChild(circleDiv);
let i;
let dot;
for (i = 0; i < numberOfItems; i++) { 
    dot = document.createElement("button");
    dot.className = "dot";
    dot.id = i;
    circleDiv.appendChild(dot);
}

circleDiv.addEventListener("click", (e)=>{
    const {id} = e.target;

    if (id) {
        slider.style.transform = "translateX(" + (-size * + id) + "px)";
    }
    counter = id;
})

//dynamic arrows
nextBtn.addEventListener("click", () =>{
    counter++;
    if (counter >= i) {
        counter = 0;
    }
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
});


prevBtn.addEventListener("click", () =>{
    counter--;
    if (counter < 0) {
        counter = i - 1;
    }
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
});