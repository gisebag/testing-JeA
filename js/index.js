/* CAROUSEL */
const carrousel = document.querySelector(".carrousel-items");
const scrollStep = 1;
const scrollSpeed = 50;
const pauseDuration = 2000; // Duración de la pausa en milisegundos
let intervalo = null;
let scrollDirection = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrousel.scrollBy(scrollStep * scrollDirection, 0);
    if (
      carrousel.scrollLeft === 0 ||
      carrousel.scrollLeft === carrousel.scrollWidth - carrousel.clientWidth
    ) {
      scrollDirection *= -1;
      stop(); // Detener el desplazamiento
      setTimeout(start, pauseDuration); // Volver a iniciar después de la pausa
    }
  }, scrollSpeed);
};

const stop = () => {
  clearInterval(intervalo);
};

carrousel.addEventListener("mouseover", () => {
  stop();
});

carrousel.addEventListener("mouseout", () => {
  start();
});

start();

carrousel.addEventListener("touchstart", (event) => {
    const touch = event.targetTouches[0];
    let startX = touch.clientX;
    let scrollLeft = carrousel.scrollLeft;

    carrousel.addEventListener("touchmove", (event) => {
        const touch = event.targetTouches[0];
        let deltaX = startX - touch.clientX;
        carrousel.scrollLeft = scrollLeft + deltaX;
    });

    carrousel.addEventListener("touchend", () => {
        carrousel.removeEventListener("touchmove", null);
        carrousel.removeEventListener("touchend", null);
    });
});

start();