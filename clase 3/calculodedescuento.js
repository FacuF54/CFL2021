let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Ingrese la base ");
let altura = readlineSync.questionInt("ingrese la altura: ");
area = base * altura;
console.log("El area es: ",area);