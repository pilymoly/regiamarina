'use strict';
//---------------------------------------------------------
// Consulto la API y cargo los productos
//---------------------------------------------------------
const mnuProduct = document.querySelector(".mnu-product");

async function getMenuProduct() {
    try {
        const response = await fetch("https://www.efe-uno.com.ar/apis/api-regia-marina/regia-marina.php");
        const data = await response.json();
        //console.log(data);

        let mnuProductoHtml="";
        // Mostrar información en el DOM
        data.forEach(producto => {
            mnuProductoHtml += `
            <li>
                <a href="#panel-${producto.id}">&nbsp;${producto.nombre}&nbsp;</a>
            </li>
            `;        
        });

        mnuProduct.innerHTML=mnuProductoHtml;

    } catch (error) {
        console.error(error);
    };
};

const contentProductos = document.querySelector("#content-productos");

async function getProductos() {
    try {
        const response = await fetch("https://www.efe-uno.com.ar/apis/api-regia-marina/regia-marina.php");
        const data = await response.json();
        //console.log(data);

        let productoHtml="";
        let datosTecnicosHTML="";
        let imagenesHTML="";
        // Mostrar información en el DOM
        data.forEach(producto => {
            datosTecnicosHTML="";
            producto.datostecnicos.forEach(datec => {
                datosTecnicosHTML+=`<li>${datec}</li>`;
            })
            imagenesHTML="";
            producto.imagenes.forEach(imagen => {
                imagenesHTML+=`
                <li class="slide">
                    <img class="slider-item" src="images/${imagen}" alt="Dardo front">
                </li>
                `;
            })
            productoHtml += `
            <div class="link-mnu" id="panel-${producto.id}">
                <h3>${producto.nombre}</h3>           
                <div class="contenedor">
                    <div class="Datos1">
                        <p>${producto.descripcion}</p>
                    </div>
                    <div class="Datos2">
                        <h3>Datos técnicos:</h3>
                        <ul>
                            ${datosTecnicosHTML}
                        </ul>
                    </div>
                </div> 
                <div class="carrousel">
                    <ul class="tira-sliders" style="width: 4030px;">
                        ${imagenesHTML+imagenesHTML}
                    </ul>
                </div>
            </div>
            `;        
        });

        contentProductos.innerHTML=productoHtml;

        const fragmentoDeURL = window.location.hash;
        console.log('#', fragmentoDeURL);
        if(fragmentoDeURL!=""){
            window.location.href=fragmentoDeURL;
        }

    } catch (error) {
        console.error(error);
    };
};

document.addEventListener("DOMContentLoaded", function () {
    getMenuProduct();
    getProductos();
});

//---------------------------------------------------------
// Boton scroll
//---------------------------------------------------------
//const tira = document.querySelector("#tira-sliders-1");
//const imagen = document.querySelectorAll("#tira-sliders-1 .slider-item");
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
