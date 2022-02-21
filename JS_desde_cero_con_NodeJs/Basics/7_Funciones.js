/**
 * Las funciones son un conjunto de sentencias para realizar unas acciones especificas dentro de los programas.
 * 
 * Al igual que las variables pueden ser guardadas en memoria como un valor.
 * 
 * Las funciones deben cumplir tareas en específico. Algunas pueden retornar algun tipo de valor, otras, simplemente desarrollan la labor para la que fueron creadas.
 * Algunas funciones necesitan recibir parametros para realizar su labor.
 * 
 * Funciones declarativas:
 * 
 * function nombreFuncion (){
 *  cuerpo de la función.
 * }
 *
 */

function saludar (){
    console.log("Hola, soy Andres");
}
saludar();

function saludar_1 (nombre){
    console.log(`Hola, soy ${nombre}`);
}
saludar_1("Cristina");

function saludar_2 (nombre){
    return `Hola, soy ${nombre}`;
}
let retornoSaludar = saludar_2 ('Carolina');
console.log(retornoSaludar);
console.log(saludar_2('Mayer'));

// Funciones de expresión o anónimas.

let suma = function (sum1, sum2, sum3) {
    let total = sum1 + sum2 + sum3;
    return total;
}

console.log("El resultado de la suma es: ",suma(12, 13, 14));

// Funciones flecha (funciones con return implicito).

let resta = (ope1, ope2) => {
    if (typeof ope1 === "number" && typeof ope2 === "number"){
        return ope1 - ope2;
    } else {
        return "Los operandos deben ser números";
    }
}
console.log(resta(23, 28));

let multiplicacion = (mul1, mul2, mul3) => mul1 * mul2 * mul3;
console.log(multiplicacion(2, 5, 10));