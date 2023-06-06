/* BOTONES TARJETAS */
for (let i = 1; i < 8; i++) {
    const botonVerMas = document.getElementById(`boton-ver-mas-${i}`);
    const tarjetaDescripcion = document.getElementById(`tarjeta-descripcion-${i}`);
    const botonCerrarTarjeta = document.getElementById(`cerrar-tarjeta-${i}`);
    const imagenLogo = document.getElementById(`imagen-logo-${i}`)
    
    botonVerMas.addEventListener('click', () => {
      tarjetaDescripcion.classList.remove('ocultar');
      tarjetaDescripcion.classList.add('mostrar');
      botonVerMas.classList.add('d-none');
      setTimeout(() => {
        botonCerrarTarjeta.classList.remove('d-none');
      }, 250);
    });
    
    botonCerrarTarjeta.addEventListener('click', () => {
      tarjetaDescripcion.classList.remove('mostrar');
      tarjetaDescripcion.classList.add('ocultar');
      botonCerrarTarjeta.classList.add('d-none');
      setTimeout(() => {
        botonVerMas.classList.remove('d-none');
      }, 250);
    });
  }