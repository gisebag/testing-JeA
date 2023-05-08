/* CAROUSEL */
const carrousel = document.querySelector(".carrousel-items");

let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
let intervalo = null;
let step = 0.5;
const start = () => {
    intervalo = setInterval(function () {
        carrousel.scrollLeft = carrousel.scrollLeft + step;
        if (carrousel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carrousel.scrollLeft === 0){
            step = step * -1;
        }
    }, 10);
};

const stop = () =>{
    clearInterval(intervalo);
}

carrousel.addEventListener("mouseover", () =>{
    stop();
});

carrousel.addEventListener("mouseout", () =>{
    start();
});

start();