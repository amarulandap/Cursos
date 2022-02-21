// Dinámico: Interpretado o compilado justo a tiempo.
// Multiparadigma: Programación imperativa y declarativa.
// Débilmente tipado: En el proceso de desarrollo una misma variable puede almacenar diferentes tipos de datos. 

//Programa para imprimir un Hola Mundo en Consola

console.log("Hola Mundo");

/**
 * Tipos de Datos
 */

// numericos -- Number.
console.log(247);
console.log(35.26);

// texto -- String.
console.log("Andres Felipe Marulanda");
console.log('Feliz Año Nuevo');
console.log(`Bienvenido 2022`); // Template String.

// Booleans.
console.log(true);
console.log(false);

// Indefinido -- undefined.
console.log(undefined);

// Null.
console.log(null);

/**
 * Datos estructurales.
 */

// Tipo de dato Objeto -- Object.
console.log({
  nombre: "Andres Felipe",
  apellido: "Marulanda Patiño",
  edad: 40,
  fechaDeNacimiento: null,
});

// Tipo arreglo -- Array.
console.log(['A','Carolina', "Gonzalez Marulanda", 125478, 123.589, null, undefined, true]);

console.log({
  numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  letras: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
  date: 10 / 12 / 21,
});

console.log([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["a", "b", "c", "d", "e", "f", "g"],
]);

console.log({
  nombre: "Andres Felipe",
  apellido: "Marulanda Patiño",
  edad: 40,
  estudios: {
    primero: "Técnico en electrónica",
    segundo: "Programación y desarrollo web",
  },
});

