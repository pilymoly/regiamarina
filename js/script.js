'use strict';

const btnRight=document.querySelector("#btnRight");
const btnLeft=document.querySelector("#btnLeft");
const tira=document.querySelector("#tira-sliders");
const imagen=document.querySelector("#li-slider1");

let slider=0;
let leftTira=0;

btnRight.addEventListener("click", () => {
    console.log('click right');
    
    clearInterval(carouselAuto);
    let ancho=imagen.offsetWidth;
    slider = (slider + 1) % 7;
    const translateValue = -slider * ancho;
    tira.style.transition = 'transform 2s ease-in-out';
    tira.style.transform = `translateX(${translateValue}px)`;
    carouselAuto = setInterval(moveCarousel, 12000);
});

btnLeft.addEventListener("click", () => {
    clearInterval(carouselAuto);
    let ancho=imagen.offsetWidth;
    slider = slider==0?5:(slider - 1) % 7;
    const translateValue = -slider * ancho;
    tira.style.transition = 'transform 2s ease-in-out';
    tira.style.transform = `translateX(${translateValue}px)`;  
    carouselAuto = setInterval(moveCarousel, 12000);
});

function moveCarousel() {
    let ancho=imagen.offsetWidth;  
    slider = (slider + 1) % 7;
    const translateValue = -slider * ancho;
    tira.style.transition = 'transform 2s ease-in-out';
    tira.style.transform = `translateX(${translateValue}px)`;
}

function resetCarousel() {
    slider = 0;
    tira.style.transition = 'transform 0s';
    tira.style.transform = `translateX(0)`;
}

let carouselAuto = setInterval(moveCarousel, 12000);

// Restablecer el carrusel cuando se llega al final.
tira.addEventListener('transitionend', function () {
    if (slider === 6) {
        resetCarousel();
    }
});

//Animacion de la galeria
const galeria=document.querySelector(".content-galery");
const img1=document.querySelector(".img-fadeInLeft");
const img2=document.querySelector(".img-fadeInDown");
const img3=document.querySelector(".img-fadeInDown2");
const img4=document.querySelector(".img-fadeInRight");
const img5=document.querySelector(".img-fadeInUp");
const img6=document.querySelector(".img-fadeInRight2");

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();   
    return (
        rect.top <= 700 &&
        rect.left >= 0 //&&
        //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    if (isElementInViewport(galeria)) {
        img1.classList.add("animar");
        img2.classList.add("animar");
        img3.classList.add("animar");
        img4.classList.add("animar");
        img5.classList.add("animar");
        img6.classList.add("animar");
        window.removeEventListener("scroll", checkVisibility);
    }
}

window.addEventListener("scroll", checkVisibility);

function irA(url){
    window.location.href=url;
}

const btnScroll = document.querySelector("#scrollBtn");

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

function validarCorreoElectronico(correo) {
    const expresionRegular = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return expresionRegular.test(correo);
}

//Formulario de subscripcion
let subscribe = document.querySelector("#form-subscribe");
let inputSubscribe = document.querySelector("#input-subscribe");
let msjSubscribe = document.querySelector("#mensaje-subscribe");

subscribe.addEventListener("submit", (event) => {
    event.preventDefault();
    if(inputSubscribe.value==""){
        msjSubscribe.innerHTML="Debe ingresar un correo electronico";
        msjSubscribe.style="display:block";
    }else{
        if(validarCorreoElectronico(inputSubscribe.value)){
            msjSubscribe.style="display:none";
            inputSubscribe.value="";
            alert("Se enviaron los datos con exito!");
        }else{
            msjSubscribe.innerHTML="Debe ingresar un correo electronico valido";
            msjSubscribe.style="display:block";
        };
    };
});
