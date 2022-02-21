/**
 * las promises nos permiten controlar funciones asincronas y saber si al ejecutarse se puede o no obtener el dato.
 * 
 * function getData () {
 * return new Promise ((resolve, reject) => {
 * })
 * }
 * 
 * Then, Catch son métodos de la promesa. Asyn, Await son palabras reservadas que nos van a ayudar a resolver la promesa.
 * .then () se ejecuta cuando la respuesta es afirmativa y .catch () se ejecuta para atrapar algún error. Ambos reciben callbacks como parámetros.
 * 
 * Podemos encadenar promesas en el then: 
 * .then ((data) => {
 *      console log (data);
 *      return getData2(false);
 * })
 * .then ((data) => {
 * console log (data);
 * })  
 * 
 * Para controlar los errores con async await utilizamos Try {
 * } catch (error) {
 * }
 * 
 */

const getData = (error) => 
    new Promise ((resolve, reject) => {
        if (!error){
            resolve ({
                nombre : "Andres Felipe",
                apellido : "Marulanda Patiño",
                edad : 40
            });
        } else {
            reject ("No se pudo obtener el dato");
        };
    });

    getData(false) 
    .then ((data) => {
        console.log(data);
    })
    .catch ((error) =>  {console.log(error)})

const imprimir = async () => {
    try {
        let resultado = await getData (true);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    
}

imprimir();