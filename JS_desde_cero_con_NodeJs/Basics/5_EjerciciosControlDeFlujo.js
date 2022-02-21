/**
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

let day = 'domingo';

if (day === 'Lunes' || day === 'lunes'){
    console.log('Monday');
} else if (day === 'Martes' || day === 'martes'){
    console.log('Tuesday');
} else if (day === 'Miercoles' || day === 'miercoles'){
    console.log('Wednesday');
} else if (day === 'Jueves' || day === 'jueves'){
        console.log('Thursday');
} else if (day === 'Viernes' || day === 'viernes'){
    console.log('Friday');
} else if (day === 'Sabado' || day === 'sabado'){
    console.log('Saturday');
} else if (day === 'Domingo' || day === 'domingo'){
    console.log('Sunday');
} else {
    console.log('No es un día de la semana');
}

let second_day = 'Domingo';

switch (second_day){
    case "Lunes":
    case "lunes":
        console.log('Monday');
        break;

    case "Martes":
    case "martes":
        console.log("Tuesday");
        break;

    case "Miercoles":
    case "miercoles":
        console.log("Wednesday");
        break;

    case "Jueves":
    case "jueves":
        console.log("Thursday");
        break;

    case "Viernes":
    case "viernes":
        console.log("Friday");
        break;

    case "Saturday":
    case "saturday":
        console.log("Saturday");
        break;

    case "Domingo":
    case "domingo":
        console.log("Sunday");
        break;

    default:
        console.log("No es un día de la semana");
}

/**
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

let vlr_compra = 42.5;

if (vlr_compra <= 10){
    vlr_compra += 3;
    console.log("$", vlr_compra);
} else if (vlr_compra > 10 && vlr_compra <= 20){
    vlr_compra += 5;
    console.log("$", vlr_compra);
} else if (vlr_compra > 20 && vlr_compra <= 50){
    vlr_compra += 7;
    console.log("$", vlr_compra);
} else {
    console.log("$", vlr_compra);
}

switch (vlr_compra){

    case vlr_compra <= 10:
        vlr_compra += 3;
        console.log("$", vlr_compra);
        break;

    case vlr_compra > 10 && vlr_compra <= 20:
        vlr_compra += 5;
        console.log("$", vlr_compra);
        break;

    case vlr_compra > 20 && vlr_compra <= 50:
        vlr_compra += 7;
        console.log("$", vlr_compra);
        break;

    default:
        console.log("$", vlr_compra);
}

