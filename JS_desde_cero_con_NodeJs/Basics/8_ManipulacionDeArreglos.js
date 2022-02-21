// 1. ForEach nos sirve para recorrer arreglos.

let arreglo_1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arreglo_1.length); // Función que me permite conocer el tamaño del arreglo.

for (let i = 0; i < arreglo_1.length; i++){
    console.log(arreglo_1[i]);
}

// arreglo.forEach ((parametro) => {});
arreglo_1.forEach ((elemento) => console.log(elemento));

// 2. push: agregar un elemento al final del arreglo.
let arreglo_2 = [1,2,3,4,5];
arreglo_2.push(6);
console.log(arreglo_2);

// 3. shift: extraer y eliminar el primer elemento del arreglo.
let arreglo_2 = [1,2,3,4,5];
let primerElemento = arreglo_2.shift();
console.log(primerElemento);
console.log("Arreglo despues de eliminar el primer elemento: ", arreglo_2);

// 4. pop: extraer y eliminar el último elemento del arreglo.
let arreglo_2 = [1,2,3,4,5];
let ultimoElemento = arreglo_2.pop();
console.log(ultimoElemento);
console.log("Arreglo despues de eliminar el último elemento: ", arreglo_2);

// 5. map: es una función inmutable que me retorna un objeto sin modificar el arreglo original.
let estudiantes = ['Ana', 'Camilo,', 'Lucia', "Felipe", "Juana", "Carlos"];
console.log(estudiantes);

let asistencia = estudiantes.map ((nombre) => {
    return {estudiante: nombre,
    asistio: false
    }
});
console.log(asistencia);
console.log(estudiantes);

// La función map me permite agregar nuevas propiedades a los objetos del arreglo.

let productos = [
    {nombre : "camisetas", precio : 50000, cantidad : 10},
    {nombre : "tennis", precio : 150000, cantidad : 12},
    {nombre : "chaquetas", precio : 100000, cantidad : 8}
];

let productosImpuesto = productos.map ((producto) => {
    return {
        ...producto,
        impuesto : .12,
    }
});
console.log(productos);
console.log(productosImpuesto);

// 6. filter: 
let estudiantes_1 = [
    {nombre : "Ana", edad : 20, matriculado : true},
    {nombre : "Camilo", edad : 17, matriculado : false},
    {nombre : "Lucia", edad : 22, matriculado : true},
    {nombre : "Felipe", edad : 19, matriculado : false},
    {nombre : "Juana", edad : 18, matriculado : true},
    {nombre : "Carlos", edad : 21, matriculado : false}
]

let matriculados = estudiantes_1.filter ((estudiante) => estudiante.matriculado);
let matriculadosMayores = estudiantes_1.filter ((estudiante) => estudiante.matriculado && estudiante.edad >= 20)
console.log(estudiantes_1);
console.log(matriculados);
console.log(matriculadosMayores);

// 7. Reduce: nos permite reducir todo el array a un solo valor.
let notas = [4, 6, 8, 10, 7, 9, 5];
let total = notas.reduce((acumulador, nota) => acumulador + nota, 0);
console.log(notas);
console.log("total: ", total);
console.log("promedio del estudiante: ", total / notas.length);


let edades = [15, 17, 16, 14, 14, 17, 15, 15, 16, 18, 17, 15, 16, 18, 17, 17, 15, 14, 14, 14, 18];
let numeroEdades = edades.reduce ((acumulador, edad) => {
    if (!acumulador[edad]){
        acumulador[edad] = 1;
    } else {
        acumulador[edad] ++;
    }
    return acumulador;
}, {})
console.log(edades);
console.log(numeroEdades);


let ventas = [
    { nombre : "camisetas", precio : 25000, vendidos : 15},
    { nombre : "zapatos", precio : 180000, vendidos : 10},
    { nombre : "medias", precio : 5000, vendidos : 20}
]

let totalVentas = ventas.reduce ((acumulador, venta) => {
    let totalVenta = venta.precio * venta.vendidos;
    acumulador[venta.nombre] = totalVenta;
    return acumulador;
} , {})

console.log(ventas);
console.log(totalVentas);

// 8. Some y Every: some me permite verificar si almenos uno de los elementos del arreglo cumple con una condición especifica. Every verifica si todos los elementos del arreglo la cumplen.

let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = [0,2,4,6,8,10];
let numerosImpares = [1,3,5,7,9];

let validacion1 = numeros.some ((numero) => numero % 2 === 0);
console.log(validacion1);

let validacion2 = numeros.every ((numero) => numero % 2 === 0);
console.log(validacion2);

let validacion3 = numerosPares.some ((numero) => numero % 2 != 0);
console.log(validacion3);

let validacion4 = numerosImpares.every ((numero  => numero % 2 != 0));
console.log(validacion4);

// 9. Find: Me permite buscar un elemento dentro de un arreglo. FindIndex: me retorna la posición donde se encuentra el elemento dentro del arreglo.

let mujeres = [{ id : 1, nombre : "Juliana"},
    { id : 2, nombre : "Camila"},
    { id : 3, nombre : "Sonia"},
    { id : 4, nombre : "Maria"},
    { id : 5, nombre : "Yuliana"}
];

let buscar = mujeres.find ((mujer) => mujer.id === 3);
console.log(mujeres);
console.log(buscar);

let ubicar = mujeres.findIndex ((mujer) => mujer.id === 3);
console.log(ubicar);

// 10. Includes: Determinar si en un arreglo existe un elemento en específico.
let mascotas = ["Perro", "Gato", "Canario", "Conejo"];
let tipoMascota = mascotas.includes ("Perro");
console.log(tipoMascota);

let buscarLetra = (buscador) => {
    let mujeres = [{ id : 1, nombre : "Juliana"},
    { id : 2, nombre : "Camila"},
    { id : 3, nombre : "Sonia"},
    { id : 4, nombre : "Maria"},
    { id : 5, nombre : "Yuliana"}]

    return mujeres.filter ((mujer) => mujer.nombre.includes(buscador));
}

console.log(buscarLetra("ia"));

/**
 * 11. Join: Concatenar todos los elementos del arreglo. Puede o no recibir parámetros. Object.values nos retorna los valores del objeto. Object,keys nos retorna las claves que tiene el objeto.
 * 
 */

let elementos = ["agua", "fuego", "aire", "tierra"];
let concatenados = elementos.join ('--');
console.log(concatenados);

let mujeres = [{ id : 1, nombre : "Juliana"},
    { id : 2, nombre : "Camila"},
    { id : 3, nombre : "Sonia"},
    { id : 4, nombre : "Maria"},
    { id : 5, nombre : "Yuliana"}];

let generarCsv = (array, separator = ',') => {
    let cabeceras = Object.keys(array[0]).join(separator);
    let valoresMujeres = array.map ((mujer) => Object.values(mujer).join(separator));
    console.log(cabeceras);
    valoresMujeres.forEach((valormujer) => console.log(valormujer));
}

generarCsv (mujeres);

// 12. Concat nos permite concatenar dos arreglos.
let arreglo1 = [0,1,2,3,4,5];
let arreglo2 = [6,7,8,9,10,11];
let arreglo3 = arreglo1.concat(arreglo2);
let arreglo4 = [...arreglo1, ...arreglo2];

console.log(arreglo3);
console.log(arreglo4);

// 13. sort es un método que me permite ordenar los arreglos.
let numeros = [1,2,3,4,5,6,7,8,9,0];
let numeros1 = [1, 35, 65, 48, 59, 27, 26, 3];
let paises = ["Colombia", "Argentina", "Brasil", "Perú", "Uruguay"];

console.log(numeros.sort());

let ordenado = numeros1.sort ((a, b) => a - b);
console.log(ordenado);

console.log(paises.sort());

// 14. splice es un método que me permite eliminar o modificar uno, varios o todos los elementos de un arreglo. splice (posición inicial, número de elementos a eliminar, reemplazo).
let paises = ["Colombia", "Argentina", "Brasil", "Perú", "Uruguay"];
paises.splice (1, 1, "Paraguay");
console.log(paises);
paises.splice(4);
console.log(paises);

// 15. slice es un metodo que me permite obtener una copia de una parte de un arreglo. slice (posición inicial, posición final), la posición final es no incluyente.
let paises = ["Colombia", "Argentina", "Brasil", "Perú", "Uruguay"];
let paises1 = paises.slice(2, 4);
console.log(paises1);
















