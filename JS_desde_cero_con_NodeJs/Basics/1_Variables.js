/**
 * Las variables son pequeños espacios en memoria que sirven para almacenar los datos (valores).
 * 
 * var -- let -- const.
 * 
 * La variable retorna el valor almacenado en ella.
 * Las variables deben ser declaradas (tener un nombre) e inicializadas (tener un valor inicial).
 * var me permite alamacenar cualquier tipo de dato.
 */

var nombre = "Andres Felipe Marulanda";

var edad = 40;

var numeros = [1,2,3,4,5,6,7,8,9,0];

var persona = {
    nombre : "Carlos",
    apellido : "Molina",
    edad : 35,
    estudios : {
        primaria : "Escuela Julio Marroquin",
        secundaria : "Colegio de la Divina Misericordia",
        superiores : "Universidad de la Salle"
    }
};

console.log("Mi nombre es:", nombre);
console.log("Mi edad es", edad);
console.log(numeros);
console.log(persona);

// variables con let (funciona de manera local, mientras que var funciona de manera global. Es decir, let solo funciona dentro del bloque de código que fue declarada).

let nombre_2 = "Cristina Marulanda";
console.log(nombre_2);

{
    let persona = {
        nombre : "Carolina Gonzalez",
        edad : 22,
        profesion : "Auxiliar veterianario",
    }
    console.log(persona);
}

console.log(persona);

// variables con const (las const siempre deben ser inicializadas al momento de declararlas). Una const no puede ser redefinida.

const PI = 3.1416;
console.log(PI);

// Los template strings son los unicos que me permiten imprimir variables dentro de una cadena de caracteres.

let nombre_3 = "Maria Mayer Patiño";
let saludar = `Hola, yo soy ${nombre_3}, 
Cómo están?`;

console.log(saludar);






