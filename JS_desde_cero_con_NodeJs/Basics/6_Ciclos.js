/**
 * Los ciclos son estructuras que nos permiten repetir un conjunto de instrucciones las veces que sea necesario.
 */

/**
 * let condicionante; (darle un valor incial a la variable de control).
 * while (condición){
 *  conjunto de instrucciones.
 *  se debe incrementar el contador dentro del ciclo.
 * }
 * 
 * La condición debe resolver un valor lógico.
 */

/**
 * let condicionante;
 * do {
 *  conjunto de instrucciones.
 * } while (condición);
 * 
 * Usaremos el do-while cunado queramos garantizar que las instrucciones del ciclo se ejecuten por lo menos una vez. Se cumpla o no la condición.
 */

/**
 * for (i = 0; i <= limite _superior; i++){
 *  conjunto de instrucciones.
 * }
 */

/**
 * El for in lo vamos a usar solo para iterar dentro de objetos JS.
 * in retorna un valor booleano si la clave se encuentra en el objeto.
 * 
 * let objeto {
 *  propiedad_1 : '',
 *  propiedad_2 : '',
 *  propiedad_3 : ''
 * }
 * 
 * for (let clave in objeto){
 *   conjunto de instrucciones. 
 *   Si quiero obtener el valor de las claves: (clave, objeto.clave), (clave, objeto[clave]).
 * }
 */

/**
 * El for of lo vamos a utilizar para iterar dentro de una colección o arreglo y conocer los valores. Recordemos que los Strings son arreglos de caractéres.
 * 
 * for (let valor of arreglo){
 *   conjunto de instrucciones.
 * }
 */

/**
 * 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
 */

for (let i = 2; i <= 12; i++){
    console.log();
    console.log('Tabla del', i);
    for (let j = 0; j <=10; j++){
        console.log(i, '*', j, '=', i*j);
    }
}

let k = 2;
let l = 0;
while (k <= 12){
    console.log();
    console.log('Tabla del', k);
    while (l <= 10){
        console.log(k, '*', l, '=', k*l);  
        l++;
    }
    k++;
    l = 0;
}
