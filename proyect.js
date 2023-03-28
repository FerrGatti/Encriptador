const textIngresado = document.getElementById("input-texto");


function encriptar (){
    var texto = document.querySelector("#input-texto").value.toLowerCase();

    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".text-input-salida").value = textoCifrado.toLowerCase();
    ocultarDisplay(); //-->ejecutamos la funcion que creamos al final para ocultar para desaparecer la imagen cuando ejecutamos el encriptado
    }


    
var boton1 = document.querySelector("#btn-encriptar"); 
boton1.onclick = encriptar;

//Funcion para desencriptar texto

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 

    document.querySelector(".text-input-salida").value = textoCifrado.toLowerCase(); 
    
    

}

var boton2 = document.querySelector("#btn-desencriptar"); 
boton2.onclick = desencriptar;

/*Funcion para copiar*/
function copiarPortapapeles(){
    let texto = document.getElementById('msg');//seleccionamos el elemento del html 
    texto.select();//funcion para seleccionar los valores de ese elemento
    texto.setSelectionRange(0,9999);//rango que vamos a seleccionar del elemento, en este caso 9999 para selec todo.
    document.execCommand('copy');
}
/*Funcion para ocultar imagen y texto al encriptar*/
var areaDeimg = document.getElementById('text-out');
var btnCopiado = document.getElementById('btn-copiado');
var bordeColor = document.getElementsById('seccion2');

function ocultarDisplay(){
    areaDeimg.classList.add("ocultar");
    btnCopiado.classList.remove('ocultar');
    
}
//Quitar mayusculas
textIngresado.addEventListener("input", () => {
    textIngresado.value = textIngresado.value.normalize("NFD").replace(/[^a-zA-Z 0-9.]+/g,'').toLowerCase()
});