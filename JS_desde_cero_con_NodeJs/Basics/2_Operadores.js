/**
 * Operadores de asignación.
 * 
 * 1. Asignación: = , me sirve para asignarle valor a una variable.
 * 
 * 2. Asignación con suma: += , me permite sumarle un valor a lo que ya estaba guardado en esa variable.
 * 
 * 3. Asignación con resta: -= , me permite restarle un valor a lo que ya tenia almacenado en una variable.
 * 
 * 4. Asignación con multiplicación: *=.
 * 
 * 5. Asignación con división: /=.
 * 
 * 6. Asignación con residuo: %=. 
 * 
 * 7. Asignación con potencia: **=.
 */

let x = 5;
let y = 10;

x += y;
console.log("x igual a:", x);

x -= y;
console.log(`x ahora es igual a: ${x}`);

x *= y;
console.log("x multiplicado por y es igual a:", x);

x /= y;
console.log("x dividido por y es igual a:", x);

y %= x;
console.log(`el residuo de y/x es ${y}`);

x **= y;
console.log(`x elevado a la potencia y es igual a: ${x}`);

/**
 * Operadores de comparación.
 * 
 * 1. Igualdad: ==.
 * 2. Estrictamente igual: ===.
 * 3. Diferente de: !=.
 * 4. Estrictamente diferente: !==.
 * 5. Mayor que >.
 * 6. Mayor o igual que: >=.
 * 7. Menor que <.
 * 8. Menor o igual que: <=.
 * 
 * Todos los operadores de comparación retornan un valor boolean.
 */

console.log(3 == 3);
console.log(3 == "3");
console.log(3 === "3");

console.log(3 != 4);
console.log(3 != "3");
console.log(3 !== "3");

console.log(3 > 2);
console.log(4 >= 4);
console.log(5 < 2);
console.log(7 <= 6);

/**
 * Operadores aritméticos.
 * 
 * 1. Suma: +.
 * 2. Resta: -.
 * 3. Multiplicación: *.
 * 4. División: /.
 * 5. Modulo o residuo: %.
 * 6. Potencia: **.
 * 7. Decremento: --.
 * 8. Incremento: ++.
 */

let numero = 2;
console.log(++numero);
console.log(numero++);
console.log(numero);

let numero_1 = 3;
console.log(--numero_1);
console.log(numero_1--);
console.log(numero_1);

/**
 * Operadores lógicos
 * 
 * 1. AND &&:
 * true AND true = true.
 * true AND false = false.
 * false AND true = false.
 * false AND false: false.
 * 
 * 2. OR ||:
 * true OR true = true.
 * true OR false = true.
 * false OR true = true.
 * false OR false: false.
 * 
 * 3. NOT ~:
 * ~ true = false.
 * ~ false = true.
 */

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

//Operador de concatenación.

let saludos = "Hola, buenos días.";
let nombreCompleto = "Mi nombre es: ";
let nuevoAlumno = "Carlos Andres Olaya";
console.log(saludos + ' ' + nombreCompleto + ' ' + nuevoAlumno);

//Operador condicional.

console.log(12 > 10 ? "Es mayor" : "Es menor");

//Operador de desestructuración para objetos.

let persona = {
    nombre : "Juan Felipe",
    apellido : "Quiceno",
    edad : 35,
    estadoCivil : "Soltero",
}

let { apellido } = persona;
console.log(apellido);
let { nombre, edad } = persona;
console.log(nombre, edad);

//Operadores de acceso a propiedades.

let persona = {
    nombre : "Juan Felipe",
    apellido : "Quiceno",
    edad : 35,
    estadoCivil : "Soltero",
}

console.log(persona.nombre); //Notación punto.

console.log(persona['apellido']); //Notación corchetes.

let arreglo = [1,2,3,4,5,6];
console.log(arreglo[3]);

console.log(typeof "Lupita"); //Operador de tipo de dato.
console.log(typeof 25);









