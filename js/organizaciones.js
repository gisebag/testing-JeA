/* BOTONES TARJETAS */
for (let i = 1; i < 6; i++) {
  const botonVerMas = document.getElementById(`boton-ver-mas-${i}`);
  const tarjetaImagen = document.getElementById(`tarjeta-imagen-${i}`);
  const tarjetaDescripcion = document.getElementById(`tarjeta-descripcion-${i}`);
  const botonCerrarTarjeta = document.getElementById(`cerrar-tarjeta-${i}`);
  
  botonVerMas.addEventListener('click', () => {
    tarjetaImagen.classList.remove('mostrar');
    tarjetaImagen.classList.add('ocultar');
    tarjetaDescripcion.classList.remove('ocultar');
    tarjetaDescripcion.classList.add('mostrar');
    botonVerMas.classList.add('d-none');
    setTimeout(() => {
      botonCerrarTarjeta.classList.remove('d-none');
    }, 250);
  });
  
  botonCerrarTarjeta.addEventListener('click', () => {
    tarjetaImagen.classList.remove('ocultar');
    tarjetaImagen.classList.add('mostrar');
    tarjetaDescripcion.classList.remove('mostrar');
    tarjetaDescripcion.classList.add('ocultar');
    botonCerrarTarjeta.classList.add('d-none');
    setTimeout(() => {
      botonVerMas.classList.remove('d-none');
    }, 250);
  });
}

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