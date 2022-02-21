// Los controles de flujo son instrucciones que nos van a permitir evaluar si se cumple una condición o no.

/**
 * 1. IF -- ELSE IF.
 * 
 * if (condición){
    bloque de código
}
 */

let condicion_1 = false;
if (condicion_1){
    console.log("La condición 1 es verdadera");
}
console.log("La condición 1 es falsa");

let acceso = "permitido";
if (acceso === "permitido"){
    console.log("Bienvenido al sistema de administración de datos");
}

let acceso = "No permitido";
if (acceso === "permitido"){
    console.log("Bienvenido al sistema de administración de datos");
} else {
    console.log("Acceso denegado");
}

let colorSemaforo = "verde";
if (colorSemaforo === "rojo"){
    console.log("Vehiculos detenidos");
} else if (colorSemaforo === "amarillo"){
    console.log("Vehiculos listos para arrancar");
} else if (colorSemaforo === "verde"){
    console.log("Vehiculos en marcha");
} else {
    console.log("Error en el semáforo");
}

/**
 * 2. SWITCH.
 */

let fruta = "mango";
switch (fruta){
    case "mango":
        console.log("Precio Mango: $1200");
        break;
    
    case "manzana":
        console.log("Precio Manzana: $900");
        break;

    case "pera":
        console.log("Precio Pera: $1500");
        break;

    default:
        console.log("Fruta no disponible");
}



