const hideText_btn = document.getElementById('hideText_btn');
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
}

