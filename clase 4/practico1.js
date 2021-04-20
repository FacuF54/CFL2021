let readlineSync = require('readline-sync');
console.log("Este programa dice que numero es mas grande");
let primerNumero = readlineSync.questionFloat("Elija primer numero ");
let segundoNumero = readlineSync.questionFloat("Elija segundo numero ");
let tercerNumero = readlineSync.questionFloat("elija tercer numero ");
if (primerNumero>segundoNumero&&primerNumero>tercerNumero) 
{
    console.log("Este numero es mas grande" ,primerNumero);
} 
else {
    if (segundoNumero>primerNumero&&segundoNumero>tercerNumero){
            console.log("Este numero es mas grande" ,segundoNumero);
    }
    else {
        if (tercerNumero>primerNumero&&tercerNumero>segundoNumero)
            console.log("Este numero es mas grande" ,tercerNumero);
    }
}