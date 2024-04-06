/* Esta todo dentro de un try para no mostrar los errores por consola y manejarlos a futuro */
try {

    window.addEventListener('unload', function (e) {
        window.scrollTo(0, 0);
    });

    const nav = document.querySelector('#nav');
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');

    const navUser = document.querySelector('#navUser');

    /* ------ Register Module ------- */
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const logo = document.getElementById('logo');




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

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    logo.addEventListener("click", function () {
        // Redirigir a URL 
        window.location.href = "index.html";
    });

} catch (e) {
    console.log(e.message);
}

function closeMenu() {
    try {
        console.log("entro")
        //usamos el id del nav para agregarle la clase nav-visible
        nav.classList.remove("nav-visible");
        abrir.classList.remove('ocultar-menu-burguer');
        cerrar.classList.add('ocultar-cerrar-menu');
        cerrar.classList.remove('reiniciar-spin');
        document.body.style.overflow = 'scroll';
        void cerrar.offsetWidth; // Trigger reflow
        cerrar.classList.add('reiniciar-spin');
    } catch (error) {
        /* console.log(e.message); */
    }

}

function buttonPreRegister() {
    try {
        window.location.href = "conex.html";
    } catch (e) {
       /*  console.log(e.message); */
    }

}
