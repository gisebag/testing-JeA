/* const hideText_btn = document.getElementById('hideText_btn');
const arrow_btn = document.getElementById('arrow_btn')
const hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', mostrar);
arrow_btn.addEventListener('click', hide);

function mostrar() {
    hideText.classList.toggle('show');
    
    

    if (hideText.classList.contains('show')) {
        document.getElementById('hideText_btn').style.display = 'none' ;
    }
    else{
        document.getElementById('hideText_btn').style.display = 'block' ;
    }
    console.log(mostrar);
}


function hide() {
    hideText.classList.toggle('show');
    document.getElementById('arrow_btn').style.display = 'hideText'
    document.getElementById('hideText_btn').style.display = 'block' ;
} */

//JOAQUIN
const btnConocenos = document.getElementById('btnConocenos');
const textoHistoria = document.getElementById('textoHistoria');
const divFotosCerrado = document.getElementById('recuadro-fotos-cerrado');
const divFotosAbierto = document.getElementById('recuadro-fotos-abierto');
const btnFlecha = document.getElementById('btnFlecha');

btnConocenos.addEventListener('click', () => {
        textoHistoria.innerHTML = '<p>JeA nació en 2020 a raíz de las Jornadas Iberoamericanas de la Educación Intercultural llevadas a cabo por AFS Programas Interculturales. Carolina, de España, junto a Amparo, Delfina y Luna de Argentina coincidieron en el “Panel para Jóvenes: Ciudadanos Globales cambiando sus comunidades” y, tras ver la increíble respuesta de la juventud (más de 300 jóvenes se unieron al encuentro), se empezó a gestar el proyecto como necesidad de un espacio que potencie la conectividad activa entre jóvenes hispano hablantes.</p><br><p>Nos dimos cuenta que muchos jóvenes quieren llevar a cabo iniciativas para hacer una diferencia en sus comunidades y globalmente pero no saben por dónde ni cómo empezar. Queremos orientar su accionar. Y a su vez, muchos otros jóvenes tienen proyectos increíbles que no son lo suficientemente reconocidos. Queremos hacerlos visibles y apoyarlos.</p><br><p><span>Más de la mitad de la población mundial tiene menos de 30 años y no está adecuadamente representada en los sistemas sociales, políticos y económicos.</span></p><br><p>Creemos firmemente que el futuro debe ser moldeado por la juventud con decisiones que reflejen sus necesidades basadas en un intercambio intergeneracional de ideas. Necesitamos crear más oportunidades para participar de forma significativa en la toma de decisiones, para que así podamos tener un mayor control sobre la configuración de nuestras vidas y nuestro futuro,hacer oír nuestras voces, colaborando conjuntamente.</p><br><span>JeA surge de la necesidad de crear un espacio hecho POR y PARA jóvenes. Funcionamos como un “embudo” de información para direccionar tu accionar y generar un IMPACTO.</span> <br>'
        btnConocenos.classList.add('d-none');
        divFotosCerrado.classList.add('d-none');
        divFotosAbierto.classList.remove('d-none');
        btnFlecha.classList.remove('d-none');
});

btnFlecha.addEventListener('click', () => {
    textoHistoria.innerHTML = '<p>JeA nació en 2020 a raíz de las Jornadas Iberoamericanas de la Educación Intercultural llevadas a cabo por AFS Programas Interculturales...</p>'
    btnConocenos.classList.remove('d-none');
    divFotosCerrado.classList.remove('d-none');
    divFotosAbierto.classList.add('d-none');
    btnFlecha.classList.add('d-none');
});