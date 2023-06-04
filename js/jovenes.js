let carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: false,
    wrap: false
});

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