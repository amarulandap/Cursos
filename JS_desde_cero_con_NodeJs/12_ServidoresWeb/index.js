// Crear nuestro servidor.

//1. importar el paquete express.
const express = require('express');

//3. importar el archivo service.
const Service = require('./src/services');

const app = express();
const PORT = 3000;

//4. Tenemos que darle a nuestro servidor la capacidad de recibir datos.
app.use (express.json());

app.get ('/', (request,response) => {
    response.json ({
        message : "Base de datos de prueba",
        body : Service.getUsers(),
    });
});

app.post ('/newUser', (request, response) =>{
    let { body : newUser } = request; //almacenamos la información que viene con la solicitud.
    // let newUser = request.body.
    response.json ({
        message : "usuario creado",
        body : Service.createUser(newUser)
    }); // httpstatuses.com res.status(código).json
});

//2. Le decimos a nuestro servidor que este atento a las solicitudes a traves del puerto 3000.
app.listen (PORT, () => {
    console.log(`el servidor esta escuchando en http://localhost:${3000}`);
});


// Retomar desde la clase 47 e implementar los métodos put y delete.