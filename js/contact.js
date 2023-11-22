'use strict';

//Formulario de contacto
let formulario = document.querySelector("#contact-form");
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");
let msjValida = document.querySelector("#mensaje-valida");
let msjMail = document.querySelector("#mensaje-email");
let loader = document.querySelector(".loader-content");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(validarDatos()){
        loader.style="display: flex";
        msjValida.innerHTML=""
        const data = new FormData();
        data.append('nombre', nombre.value);
        data.append('destinatario', email.value);
        data.append('asunto', subject.value);
        data.append('mensaje', message.value);
        data.append('from', 'nrivarola@gmail.com');
        fetch('https://www.efe-uno.com.ar/apis/api-mails/efeunoMails.php',
        {
            method: 'POST', 
            body: data,
            headers: {
                "accept": 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            loader.style="display: none";
            alert('Mensaje enviado!');
            limpiarFormulario();
        });
    }else{
        console.log('No valida');
        console.log('mailmsj>>',msjMail.style.display,'<<');
        
        if(msjMail.style.display=="none"){
            console.log('none');            
            msjValida.innerHTML="* Debe completar los campos marcados en rojo.";
        }else{
            msjValida.innerHTML="";
        };
    };
});

function validarDatos(){
    let valido = true;

    if(nombre.value==""){
        valido=false;
        nombre.classList.add('border-alert');
    }else{
        nombre.classList.remove('border-alert');
    };
    if(email.value==""){
        valido=false;
        email.classList.add('border-alert');
    }else{
        if(validarCorreoElectronico(email.value)){
            email.classList.remove('border-alert');
            msjMail.style="display:none";
        }else{
            valido=false;
            email.classList.add('border-alert');
            msjMail.style="display:block";
        }
    };
    if(subject.value==""){
        valido=false;
        subject.classList.add('border-alert');
    }else{
        subject.classList.remove('border-alert');
    };
    if(message.value==""){
        valido=false;
        message.classList.add('border-alert');
    }else{
        message.classList.remove('border-alert');
    };
    
    return valido;
};

function validarCorreoElectronico(correo) {
    const expresionRegular = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return expresionRegular.test(correo);
}

function limpiarFormulario(){
    nombre.value="";
    email.value="";
    subject.value="";
    phone.value="";
    message.value="";
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

//----------------------
// Boton scroll
//----------------------
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
