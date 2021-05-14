let readlineSync = require('readline-sync');
//leo el texto del usuario
let texto = readlineSync.questionInt("ingrese el texto: ");
//em letras estan todas las letras que a mi me interesan
let todasLasLetras=26;
letras='abcdefghijklmnñopqrstuvwzxyz'
//tolasLasLetras me dice cuantas letras debo evaluar
let todasLasLetras = letras.length;
//en ocurrencia voy a guardar la ocurrencia de cada una
let letras = new Array(todasLasLetras);
//en cuantasLetras tengo la cantidad total de "letras"
let cuantasLetras = 0;

function inicializar(ocurrencias){
    //pongo en 0 todos los contadores, uno por da letra.
    let indice;
    for (indice = 0; indice < ocurrencias.length; indice++) {
        ocurrencias[indice]=0;
        
    }
    
}
function cuabtasVecesEsata(texto,largo,letras){
    let ocurrencia=0;
    for(let i=0; i<largo; i++){
        if(texto[i]==letra){
            ocurrencia++
        }
    }
    return ocurrencia;
}
function contarLetras(letras,texto,ocyrrencias){
    // esta funcion cuenta las ocurrencias dfe cada letra del arreglo letras en el texto
    let indice;
    let textoLocal = texto.toLowerCase();
    let cantidadTotalDeLetras = 0;
    for(indice = 0; indice < letras.length; indice++) {
        ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);
        cantidadTotalDeLetras+=ocurrencias[indice];
    }
    return cantidadTotalDeLetras;
}
function listado(letras,ocurrencia,totalLetras);{
    let indice;
    for(indice =0; indice < letra.length; iondice++){
        if (ocurrencia[indice] !=0){
            console.log('letras',letras[indice],'aparece',ocurrencias[indice],'con una probabilidad',frecuencia[indice]/totalLetras);
        }
    }
}

inicializar(ocurrencias);
cantidadTotalDeLetras=contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,cantidadTotalDeLetras);
