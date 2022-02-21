// Importamos el paquete.
const axios = require("axios");
const path = require("path");
const fs = require("fs").promises;

//Función que va realizar la operación principal.
const main = async () => {
  let res = await axios.get("https://rickandmortyapi.com/api/character");

  let {
    data: { results },
  } = res; //Desestructuración del json res.

  let personajes = results.map((personaje) => {

    return {
      id: personaje.id,
      nombre: personaje.name,
      status : personaje.status,
      especie: personaje.species,
    };
  }).map((personaje) => Object.values(personaje).join(" , ")).join("\n");  // usamos la función map para abstraer solo los valores de las propiedades y convertimos el arreglo en un String con un salto de linea.

  // console.log(path.join(__dirname, 'rick.csv')); generar una dirección para un archivo.
  
  let cabeceras = (array, separator = " , ") => {
    return cabecera = Object.keys(array[0]).splice(0,4).join(separator);
  };
  cabeceras(results);
  console.log(cabecera);
  console.log(personajes);

  //Crear un archivo csv.
  await fs.writeFile(path.join(__dirname, "rick.csv"), personajes);
};

main();
