const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

window.onload = function() {
    window.scrollTo(0, 0);
}

function toggleNav() {
    nav.classList.add("nav-visible");
 
    cerrar.classList.remove('reiniciar-spin');
    void cerrar.offsetWidth; // Trigger reflow
    cerrar.classList.add('reiniciar-spin');
    document.body.style.overflow = 'hidden';
}

abrir.addEventListener('click', () => {
    abrir.classList.add('ocultar-menu-burguer');
    cerrar.classList.remove('ocultar-cerrar-menu');
    void cerrar.offsetWidth; // Trigger reflow
})

cerrar.addEventListener('click', () => {
    //usamos el id del nav para agregarle la clase nav-visible
    nav.classList.remove("nav-visible");
    abrir.classList.remove('ocultar-menu-burguer');
    cerrar.classList.add('ocultar-cerrar-menu');
    cerrar.classList.remove('reiniciar-spin');
    document.body.style.overflow = 'scroll';
    void cerrar.offsetWidth; // Trigger reflow
    cerrar.classList.add('reiniciar-spin');
  
})



function test() {
    nav.classList.remove("nav-visible");
    document.body.style.overflow = 'scroll';
}
