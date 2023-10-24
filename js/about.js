const btnScroll = document.querySelector("#scrollBtn");

let slider = 0;
let i = 0

// Calcula el punto en el que deseas cambiar el estilo
const visibleBtnUp = 250;

// Agrega un evento de desplazamiento (scroll) al documento
window.addEventListener('scroll', () => {
    // Obtiene la posición vertical actual de la página
    const scrollY = window.scrollY;

    // Comprueba si el usuario ha hecho scroll lo suficiente para cambiar el estilo
    if (scrollY >= visibleBtnUp) {
        btnScroll.style = "display:flex";
    } else {
        btnScroll.style = "display:none";
    }
});

btnScroll.addEventListener("click", function () {
    // Hacemos scroll al tope de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Esto proporciona un efecto de desplazamiento suave
    });
});