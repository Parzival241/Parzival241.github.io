/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const idiomaActual = document.getElementById('navbarDropdownIdiomas');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');
const opcionesArray = document.querySelectorAll('.opcion');

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }; 

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


opcionesArray.forEach((opcion) => {
    // Agregamos la "e" (evento) para poder controlarlo
    opcion.addEventListener('click', (e) => {

        e.preventDefault(); // Evitamos que el enlace haga su acción por defecto (navegar)
        
        // 2. Buscamos el <span> dentro de esta opción usando querySelector (es más seguro y moderno)
        const spanText = opcion.querySelector('span');
        
        // 3. Verificamos que sí encontró el span para evitar errores
        if (spanText) {
            // Usamos trim() para quitar espacios vacíos al inicio o final por si acaso
            const idioma = spanText.textContent.trim().toLowerCase();
            establecerIdioma(idioma);
        }
    });
});

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `assets/banderas/${idioma}.png`;
    switch (idioma) {
        case 'español':
            break;
        case 'english':
            break;
        case 'français':
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch(navigator.language.slice(0,2)){
        case 'es':
            establecerIdioma('español');
            break;
        case 'en':
            establecerIdioma('english');
            break;
        case 'fr':
            establecerIdioma('français');
            break;
        default:
            establecerIdioma('español');
    }
});