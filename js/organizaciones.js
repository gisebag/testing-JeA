/* CAROUSEL */
//Haciendo la barra de desplazamiento invisible
const element = document.getElementsByClassName('elemento');
const scrollbarWidth = window.getComputedStyle(element[0]).getPropertyValue('scrollbar-width');

//Dando función a las flechas del carousel
const contenedor = document.getElementsByClassName('carrusel-div')[0];
const contenido = document.getElementsByClassName('carrusel')[0];
const flechaIzquierda = document.getElementsByClassName('flecha-izquierda');
const flechaDerecha = document.getElementsByClassName('flecha-derecha');

contenido.style.width = 90 + '%';

let izquierdaPresionada = false;
let derechaPresionada = false;
let scrollInterval;

for (let i = 0; i < flechaIzquierda.length; i++) {
  flechaIzquierda[i].addEventListener('mouseover', function () {
    izquierdaPresionada = true;
    scrollInterval = setInterval(function () {
      contenido.scrollLeft -= 5; // se disminuye en 5 unidades cada 30ms
    }, 30);
  });
  flechaIzquierda[i].addEventListener('mouseout', function () {
    izquierdaPresionada = false;
    clearInterval(scrollInterval);
  });
}

for (let i = 0; i < flechaDerecha.length; i++) {
  flechaDerecha[i].addEventListener('mouseover', function () {
    derechaPresionada = true;
    scrollInterval = setInterval(function () {
      contenido.scrollLeft += 5; // se aumenta en 5 unidades cada 30ms
    }, 30);
  });
  flechaDerecha[i].addEventListener('mouseout', function () {
    derechaPresionada = false;
    clearInterval(scrollInterval);
  });
}