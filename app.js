const slider = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let counter = 0;
let size = carouselImages[0].clientWidth;

/////////////////////////////////////////////////////////////////////////////////////
let imagesArray = [];
for (let i = 0; i < carouselImages.length; i++) {
    imagesArray.push(carouselImages[i].clientWidth);
}
let currentSize = 0;
let currentImageSize = 0;
let maxSize = 0;
let j = 0;
for (j = 0; j < imagesArray.length; j++) {
    
    maxSize += carouselImages[j].clientWidth;
}
maxSize -= carouselImages[j-1].clientWidth;
let transitionSize = 0;//
/////////////////////////////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////////
let activeButton = document.querySelectorAll(".dot");
activeButton[0].style.backgroundColor = "red";
//////////////////////////////////////////////////////////////////////////////////
circleDiv.addEventListener("click", (e)=>{
    transitionSize = 0;
    
    const {id} = e.target;
    
     if (id) {
        // const test = imagesArray.reduce((priv, curr, index)=>{
        //     if (index <= id) {
        //         let test2 = priv+curr;
        //         return test2;
        //     }else{
        //         return priv;
        //     }        
        // }, 0);
            
        for (let i = 0; i < id; i++) {
            transitionSize+=imagesArray[i];
        }
        slider.style.transform = "translateX(" + (-transitionSize) + "px)";
    }
    
counter = id;

for (let i = 0; i <= numberOfItems-1; i++) {
    activeButton[i].style.backgroundColor = "#bbb";
}
if (counter) {
    activeButton[counter].style.backgroundColor = "red";
}

})



//dynamic arrows
nextBtn.addEventListener("click", () =>{
    currentImageSize = imagesArray[counter];
    counter++;
    
    // currentSize+=currentImageSize;
    transitionSize+=currentImageSize;
    if (counter >= i) {
        counter = 0;
        //currentSize = 0;
        transitionSize = 0;
    }

    slider.style.transform = "translateX(" + (-transitionSize/*currentSize*/) + "px)";
    

    
    //activeButton[0].style.backgroundColor = "#red";
    
        // activeButton[id].classList.toggle("active");
        if (counter) {
            activeButton[counter].style.backgroundColor = "red";
            activeButton[counter-1].style.backgroundColor = "#bbb";
            //console.log(activeButton[counter].id);
            
        }else if (counter == 0) {
            activeButton[0].style.backgroundColor = "red";
            activeButton[i-1].style.backgroundColor = "#bbb";
        }

});


prevBtn.addEventListener("click", () =>{
    currentImageSize = imagesArray[counter-1];
    counter--;

    // currentSize-=currentImageSize;
    transitionSize-=currentImageSize;
    if (counter < 0) {
        counter = i - 1;
        // currentSize = maxSize;
        transitionSize = maxSize;
    }
    
    slider.style.transform = "translateX(" + (-transitionSize/*currentSize*/) + "px)";



    activeButton[counter].style.backgroundColor = "red";
    if (activeButton[counter].id != 0) {
        activeButton[0].style.backgroundColor = "#bbb";
    }
    if (counter < i-1) {
        activeButton[counter+1].style.backgroundColor = "#bbb";
    }
        
    
    // else if (counter == 0) {
    //    activeButton[0].style.backgroundColor = "red";
    //     activeButton[i-1].style.backgroundColor = "#bbb";
    // }


});


//arrow keys
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }
    else if (e.key === "ArrowRight") {
        nextBtn.click();
    }
});


//draggable
let pressed = false;
slider.addEventListener("mousedown", ()=>{
    pressed = true;
    slider.style.cursor = "grabbing";
})
slider.addEventListener("mouseenter", ()=>{
    slider.style.cursor = "grab";
})
slider.addEventListener("mouseup", ()=>{
    slider.style.cursor = "grab";
})
window.addEventListener("mouseup", ()=>{
    pressed = false;
})
//mouse move >x, y => move; set counter


//active circle