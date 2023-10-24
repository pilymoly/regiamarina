'use strict';

// Obtén el elemento que deseas cambiar
const elemento = document.querySelector('header');

// Calcula el punto en el que deseas cambiar el estilo
const puntoDeCambio = 100;

// Agrega un evento de desplazamiento (scroll) al documento
window.addEventListener('scroll', () => {
    // Obtiene la posición vertical actual de la página
    const scrollY = window.scrollY;

    // Comprueba si el usuario ha hecho scroll lo suficiente para cambiar el estilo
    if (scrollY >= puntoDeCambio) {
        elemento.classList.add('background-Menu');
    } else {
        elemento.classList.remove('background-Menu');
    }
});

let contador = 1;
function eventoMenu(){
    const menu = document.querySelector('#menu');
    const btnMnu = document.querySelector('#btnMnu');
	if(contador==1){
        console.log('eventomenu == 1', contador);
		//menu.style='left: 0';
        menu.style.transform = 'translateX(-20%)';
		contador=0;
        btnMnu.innerHTML='x';
	}else{
        console.log('eventomenu == 0', contador);
		//menu.style='left:-100%';
        menu.style.transform = 'translateX(-120%)';
		contador=1;
        btnMnu.innerHTML='≡';
	};
};