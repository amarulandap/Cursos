/**
 * JS ejecuta todo su código en un solo proceso. El asincronismo nos permite delegar los procesos que son muy extensos a subprocesos.
 * 
 * El event loop es el encargado de desarrollar cada una de las tareas de software.
 * 
 * setTimeOut (() => {
* función a ejecutar}, el tiempo de retardo (ms))
 */

/**
 * Los CallBacks son funciones que se pasan como argumento a otras funciones. Nos permite llamar a una función dentro de otra función.
 * 
 * const suma = (a, b, cb) => cb(a + b);
 * const imprimir = (data) => console log (data);
 * suma(1, 2, imprimir);
 * 
 */

const suma = (a, b, cb) => {
    cb (a+b);
};

suma (3, 4, (resultado) => {
    console.log(resultado);
});

/**
 * 
 * const getData = (cb, cbError) => {
 * if (true){
 * setTimeout (() => {
        cb({
            nombre : "Andres Felipe",
            apellido : "Marulanda Patiño",
            edad : 40
        });
    }, 4000);
 * };
  } else {
      cbError (new Error ("No se pudo obtener el dato"));
  };

  const errorHandler = (error) => {
      console log (error);
  };

  getData (cb, cbError);
 */

let getData = (cb) => {
    setTimeout (() => {
        cb({
            nombre : "Andres Felipe",
            apellido : "Marulanda Patiño",
            edad : 40
        });
    }, 4000);
};

let imprimirData = (data) => {
    console.log(data);
};

getData (imprimirData);





