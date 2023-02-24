const btnEscuelas = document.getElementById('escuelas');
const btnUniversidades = document.getElementById('universidades');
const btnOrganizaciones = document.getElementById('organizaciones');
const descripcion = document.getElementById('descripcion');
const contenido = document.getElementById('contenido');

window.addEventListener('load', () => {
    btnEscuelas.style.borderBottom = "16px solid #5BBA47";
    descripcion.style.backgroundColor = "#5BBA4720";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social e inteligencia emocional (entre otras cosas) <strong style="color:#5BBA47">para jóvenes entre 12 y 18 años.</strong>';
})

btnEscuelas.addEventListener ('click', ()=> {
    btnEscuelas.style.borderBottom = "16px solid #5BBA47";
    btnUniversidades.style.borderBottom = "8px solid #FAC31390";
    btnOrganizaciones.style.borderBottom = "8px solid #ED1C2490";
    descripcion.style.backgroundColor = "#5BBA4720";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social e inteligencia emocional (entre otras cosas) <strong style="color:#5BBA47">para jóvenes entre 12 y 18 años.</strong>';
})

btnUniversidades.addEventListener ('click', ()=> {
    btnEscuelas.style.borderBottom = "8px solid #5BBA47";
    btnUniversidades.style.borderBottom = "16px solid #FAC313";
    btnOrganizaciones.style.borderBottom = "8px solid #ED1C2490";
    descripcion.style.backgroundColor = "#FAC31320";
    contenido.innerHTML = 'Ofrecemos la oportunidad de realizar una o varias sesiones sobre ciudadanía activa, cambio social y <strong style="color:#F26123">búsqueda de oportunidades educativas/laborales/voluntariados/emprendimiento</strong> para universitarios.';
})

btnOrganizaciones.addEventListener ('click', ()=> {
    btnEscuelas.style.borderBottom = "8px solid #5BBA4790";
    btnUniversidades.style.borderBottom = "8px solid #FAC31390";
    btnOrganizaciones.style.borderBottom = "16px solid #ED1C24";
    descripcion.style.backgroundColor = "#ED1C2420";
    contenido.innerHTML = '<strong style="color:#ED1C24">Hablemos de las competencias interculturales necesarias para el mundo de hoy.</strong> Si eres una empresa, una institución o una ONG contáctanos para ver las posibilidades de colaboración.';
})