const cuadrosDivididos = document.getElementById('cuadros-divididos');
const btnEscuelas = document.getElementById('escuelas');
const btnUniversidades = document.getElementById('universidades');
const btnOrganizaciones = document.getElementById('organizaciones');
const btnEscuelasMovil = document.getElementById('escuelas-movil');
const btnUniversidadesMovil = document.getElementById('universidades-movil');
const btnOrganizacionesMovil = document.getElementById('organizaciones-movil');
const descripcion = document.getElementById('descripcion');
const descripcionEscuelasMovil = document.getElementById('descripcion-escuelas');
const descripcionUniversidadesMovil = document.getElementById('descripcion-universidades');
const descripcionOrganizacionesMovil = document.getElementById('descripcion-organizaciones');
const contenido = document.getElementById('contenido');
const mediaQuery = window.matchMedia('(min-width: 956px)');

window.addEventListener('load', () => {
    descripcion.style.backgroundColor = "#5BBA4720";
    descripcionEscuelasMovil.style.backgroundColor = "#5BBA4720";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social e inteligencia emocional (entre otras cosas) <strong style="color:#5BBA47">para jóvenes entre 12 y 18 años.</strong>';
    if (mediaQuery.matches) {
        btnEscuelas.style.borderBottom = "16px solid #5BBA47";
    } else {
        btnEscuelasMovil.style.borderBottom = "8px solid #5BBA47";
    }
})

btnEscuelas.addEventListener('click', () => {
    btnEscuelas.style.borderBottom = "16px solid #5BBA47";
    btnUniversidades.style.borderBottom = "8px solid #FAC31390";
    btnOrganizaciones.style.borderBottom = "8px solid #ED1C2490";
    cuadrosDivididos.style.border = "2px solid #009876";
    descripcion.style.backgroundColor = "#5BBA4720";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social e inteligencia emocional (entre otras cosas) <strong style="color:#5BBA47">para jóvenes entre 12 y 18 años.</strong>';
})

btnUniversidades.addEventListener('click', () => {
    btnEscuelas.style.borderBottom = "8px solid #5BBA4790";
    btnUniversidades.style.borderBottom = "16px solid #FAC313";
    btnOrganizaciones.style.borderBottom = "8px solid #ED1C2490";
    cuadrosDivididos.style.border = "2px solid #FAC313B2";
    descripcion.style.backgroundColor = "#FAC31320";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social y <strong style="color:#F26123">búsqueda de oportunidades educativas/laborales/ voluntariados/emprendimiento</strong> para universitarios.';
})

btnOrganizaciones.addEventListener('click', () => {
    btnEscuelas.style.borderBottom = "8px solid #5BBA4790";
    btnUniversidades.style.borderBottom = "8px solid #FAC31390";
    btnOrganizaciones.style.borderBottom = "16px solid #ED1C24";
    cuadrosDivididos.style.border = "2px solid #ED1C24B2";
    descripcion.style.backgroundColor = "#ED1C2420";
    contenido.innerHTML = '<strong style="color:#ED1C24">Hablemos de las competencias interculturales necesarias para el mundo de hoy.</strong> Si eres una empresa, una institución o una ONG contáctanos para ver las posibilidades de colaboración.';
})

let ToggleEscuelas = false;
let ToggleUniversidades = true;
let ToggleOrganizaciones = true;

btnEscuelasMovil.addEventListener('click', () => {
    ToggleEscuelas = !ToggleEscuelas;
    if (ToggleEscuelas) {
        btnEscuelasMovil.style.borderBottom = "4px solid #5BBA4790";
        descripcionEscuelasMovil.classList.remove('d-block');
        descripcionEscuelasMovil.classList.add('d-none');
    } else {
        btnEscuelasMovil.style.borderBottom = "8px solid #5BBA47";
        cuadrosDivididos.style.border = "1px solid #009876";
        descripcionEscuelasMovil.style.backgroundColor = "#5BBA4720";
        descripcionEscuelasMovil.classList.add('d-block');
        descripcionEscuelasMovil.classList.remove('d-none');
        if (!ToggleUniversidades) {
            ToggleUniversidades = !ToggleUniversidades;
        }
        descripcionUniversidadesMovil.classList.add('d-none');
        btnUniversidadesMovil.style.borderBottom = "4px solid #FAC31390";
        if (!ToggleOrganizaciones) {
            ToggleOrganizaciones = !ToggleOrganizaciones;
        }
        descripcionOrganizacionesMovil.classList.add('d-none');
        btnOrganizacionesMovil.style.borderBottom = "4px solid #ED1C2490";
    }
})

btnUniversidadesMovil.addEventListener('click', () => {
    ToggleUniversidades = !ToggleUniversidades;
    if (ToggleUniversidades) {
        btnUniversidadesMovil.style.borderBottom = "4px solid #FAC31390";
        descripcionUniversidadesMovil.classList.remove('d-block');
        descripcionUniversidadesMovil.classList.add('d-none');
    } else {
        btnUniversidadesMovil.style.borderBottom = "8px solid #FAC313";
        cuadrosDivididos.style.border = "1px solid #FAC313B2";
        descripcionUniversidadesMovil.style.backgroundColor = "#FAC31320";
        descripcionUniversidadesMovil.classList.add('d-block');
        descripcionUniversidadesMovil.classList.remove('d-none');
        if (!ToggleEscuelas) {
            ToggleEscuelas = !ToggleEscuelas;
        }
        descripcionEscuelasMovil.classList.add('d-none');
        btnEscuelasMovil.style.borderBottom = "4px solid #5BBA4790";
        if (!ToggleOrganizaciones) {
            ToggleOrganizaciones = !ToggleOrganizaciones;
        }
        descripcionOrganizacionesMovil.classList.add('d-none');
        btnOrganizacionesMovil.style.borderBottom = "4px solid #ED1C2490";
    }
})

btnOrganizacionesMovil.addEventListener('click', () => {
    ToggleOrganizaciones = !ToggleOrganizaciones;
    if (ToggleOrganizaciones) {
        btnOrganizacionesMovil.style.borderBottom = "4px solid #ED1C2490";
        descripcionOrganizacionesMovil.classList.remove('d-block');
        descripcionOrganizacionesMovil.classList.add('d-none');
    } else {
        btnOrganizacionesMovil.style.borderBottom = "8px solid #ED1C24";
        cuadrosDivididos.style.border = "1px solid #ED1C24B2";
        descripcionOrganizacionesMovil.style.backgroundColor = "#ED1C2420";
        descripcionOrganizacionesMovil.classList.add('d-block');
        descripcionOrganizacionesMovil.classList.remove('d-none');
        if (!ToggleEscuelas) {
            ToggleEscuelas = !ToggleEscuelas;
        }
        descripcionEscuelasMovil.classList.add('d-none');
        btnEscuelasMovil.style.borderBottom = "4px solid #5BBA4790";
        if (!ToggleUniversidades) {
            ToggleUniversidades = !ToggleUniversidades;
        }
        descripcionUniversidadesMovil.classList.add('d-none');
        btnUniversidadesMovil.style.borderBottom = "4px solid #FAC31390";
    }
})