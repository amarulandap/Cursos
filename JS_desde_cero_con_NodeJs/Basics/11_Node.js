/**
 * Es un entorno de ejecución que permite que JS se ejecute por fuera de los navegadores, es decir, en los servidores.
 * 
 * NPM: node package manager o gestor de los paquetes de node.
 * 
 * Package.json: es una manifestación pública de la finalidad de nuestro programa. 
 * 
 * Json: Es un formato ligero de intercambio de datos. Las claves son Strings.
 * 
 * Modelo Cliente - Servidor: El servidor es una computadora que se va a encargar de prestar ciertos servicios a otros computadores.
 * Los clientes realizan solicitudes o request a los servidores.
 * El servidor analiza cada una de las peticiones para poder enciar una respuesta o response.
 * La interacción cliente servidor la logramos gracias la protocolo HTTP.
 * 
 * Métodos de solicitud HTTP:
 * GET : ESTADO DE UN DATO.
 * POST : GENERAR UN NUEVO DATO EN EL SERVIDOR.
 * PUT : MODIFICAR UN RECURSO EN EL SERVIDOR.
 * DELETE : BORRAR UNO DE LOS DATOS DEL SERVIDOR.
 * 
 * Códigos de respuesta:
 * 1xx : Informativos.
 * 2xx : Respuestas de éxito.
 * 3xx : Redireccionamiento.
 * 4xx : Errores en el cliente.
 * 5xx : Errores en el servidor.
 * 
 * CRUD: Create, Read, Update, Delete.
 * 
 * https://rickandmortyapi.com/documentation/#rest
 * Base url: https://rickandmortyapi.com/api
 * 
 * {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}

Antes trabajabamos en salida, ahora trabajaremos en Terminal donde ejecutaremoa comandos.

1. Abrimos una nueva terminal.
2. Ingresamos el comando npm init ó npm init --y.
2. Instalamos el paquete npm install axios ó npm i axios. Axios es un paquete asincrono. Axios expone métodos que corresponden con los verbos HTTP para realizar la petición.
 */

/**
 * Te presentamos la librería Axios que nos permite realizar Ajax de una manera muy cómoda y potente, para consumir servicios web y APIs REST sin usar mucho código. La puedes implementar tanto en Javascript como NodeJS.
 * 
 * Si deseas hacer Ajax en Javascript, Axios puede ser un gran aliado. Se trata de una librería Javascript capaz de ejecutarse tanto en el navegador como en NodeJS, que facilita todo tipo de operaciones como cliente HTTP.

Con Axios puedes realizar solicitudes contra un servidor, completamente configurables, y recibir la respuesta de una manera sencilla de procesar. En este artículo te explicaremos las ventajas de esta librería, así como algunos ejemplos básicos de uso, con los que podrás observar su funcionamiento.

La librería está basada en promesas, por lo que al usarla podremos generar un código asíncrono bastante ordenado. Incluso es capaz de usar Async / Await para mejorar la sintaxis, aunque en ese caso estarías obligado a transpilar tu código para que fuera compatible con navegadores.

Por qué Axios
Axios puede sernos de utilidad en muchas situaciones... aunque no siempre será tan necesaria. Habría que analizar con detenimiento en qué marco nos encontramos para ver si Axios es o no nuestra mejor solución. Aquí te dejamos algunas consideraciones.

Si usas un framework Javascript (como Angular o Vue.js) es muy probable que ya tengas un cliente HTTP que realice la tarea de realizar "request" contra un servidor y recibir la "response" de una manera ordenada. Pero si no es así, realizar las operaciones relacionadas con Ajax en navegadores, puede ser una tarea un poco más compleja de lo que debería.

Muchas personas usan jQuery para poder disponer de los métodos relacionados con Ajax, pero lo cierto es que usar jQuery solamente por este motivo es bastante poco aconsejable, pues es una librería bastante pesada, en comparación con Axios.

Si te gusta aprovechar las características nativas del navegador, entonces lo suyo es usar Fetch, que es el nuevo mecanismo para implementar solicitudes Ajax, también basado en promesas. Sin embargo, el API de fech no está disponible en todos los navegadores, por lo que necesitamos instalar algunos polyfill. Esto no es un problema, pues cargar dichos polyfill resulta una tarea sencilla, pero lo que sí puede representar una complejidad es usar el API de fetch para la implementación de tareas un poco más complejas, como el consumo de APIs REST. Tarea que Axios te pone realmente fácil.

Axios es una alternativa que nos ofrece diversas ventajas:

Nos ofrece una API unificada para las solicitudes Ajax
Está altamente pensado para facilitar el consumo de servicios web, API REST que devuelvan datos JSON.
Es muy sencillo de usar y puede ser un complemento ideal para sitios web convencionales, donde no se esté usando jQuery y aplicaciones frontend modernas basadas en librerías como React o Polymer, que no disponen en su "core" de mecanismos para hacer de cliente HTTP.
Tiene muy poco peso (13Kb minimizado y todavía menos si contamos que el servidor lo envía comprimido), en unas pocas Kb nos ahorrará mucho trabajo de codificación en las aplicaciones.
Aparte de NodeJS, Axios tiene compatibilidad con todos los navegadores en versiones actuales. Pero ojo, Internet Explorer se soporta solamente a partir de la versión 11. Si deseas que tu Ajax funcione en versiones más antiguas de Explorer, entonces te interesa más jQuery o Fetch con sus correspondientes polyfill.

Usar Axios
Llegamos a la parte práctica de este artículo, donde verás cómo usar Axios para hacer algunas tareas de acceso a recursos Ajax desde el navegador.

Para trabajar con Axios usamos el API de promesas. Esto quiere decir que, cuando se reciba la respuesta del servidor se ejecutará una función callback configurada en "then" y cuando se produzca un error (por ejemplo una respuesta con status 404 de recurso no encontrado) se ejecutará la función callback definida por el "catch". Pero antes vamos a ver cómo instalar Axios en un proyecto.

Instalar Axios
Para comenzar a usar esta librería lo más sencillo sería disponer de ella a través de su CDN.

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
No obstante, podemos instalarla también vía npm o Bower, e integrarla en el sitio o aplicación web por medio de nuestro sistema de builds preferido.

npm install axios
Una vez instalada en el navegador, disponemos de un objeto llamado "axios", el cual tiene un API de métodos para realizar las operaciones HTTP comunes, GET, POST…

Nota: si la usas dentro de node.js entonces tendrás que hacer el correspondiente require para acceder al objeto axios. "const axios = require('axios')"
Ejemplos de trabajo con Axios
Ahora veamos pequeñas piezas de código que ilustran el uso de Axios, para realizar tareas muy elementales, pero que pueden darte un puntapié inicial en tu aprendizaje.

Vamos a ver varios ejemplos de uso de Axios pensado para el navegador. En líneas generales realizaremos la solicitud Ajax e implementaremos el típico comportamiento:

Según se produzca la solicitud queremos mostrar un mensaje de "cargando…"
Una vez tengamos respuesta, queremos mostrar el contenido obtenido, o el resultado de la operación, o un hipotético error.
Cuando termine la solicitud y se haya obtenido la respuesta, tanto en el caso positivo como el negativo, queremos quitar de la página el mensaje "cargando…"
Usaremos una serie de etiquetas en el HTML, botones y elementos donde mostrar la salida. Estos son los mismos para los tres ejemplos que vas a ver a continuación.

<button id="carga_ajax">Carga contenido</button> 
<button id="json_get">Request JSON GET</button> 
<button id="json_post">Request JSON POST</button>
<div id="mensaje"></div>
<div id="loading">cargando...</div>
El mensaje de "cargando" está inicialmente oculto gracias a este CSS:

<style>
  #loading {
    display: none;
  }
</style>
Nota: al final del artículo tienes el ejemplo completo del código, por si surgen dudas.
Ejemplo de acceso Ajax para recuperar un texto plano
En este sencillo ejemplo vamos a realizar una solicitud contra nuestro propio servidor, para recuperar el contenido de un archivo de texto. Es la solicitud más básica que podemos realizar.

var loading = document.getElementById('loading');
var mensaje = document.getElementById('mensaje');

var boton = document.getElementById('carga_ajax');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.get('texto.txt', {
    responseType: 'text'
  })
    .then(function(res) {
      if(res.status==200) {
        mensaje.innerHTML = res.data;
      }
      console.log(res);
    })
    .catch(function(err) {
      mensaje.innerText = 'Error de conexión ' + err;
    })
    .then(function() {
      loading.style.display = 'none';
    });
});
La parte más interesante, e importante para este ejemplo, la tienes en la llamada al método axios.get(). Como primer parámetro le indicamos el recurso que queremos acceder (será un archivo llamado texto.txt que se encontrará en la misma carpeta de este ejemplo), seguido de un objeto de configuración. En ese objeto podemos enviar muchas cosas para configurar la solicitud, como parámetros, el tiempo de respuesta antes de dar un timeout, credenciales para autorización, el tamaño de la respuesta máximo admitido, el uso de un proxy, etc. En nuestro caso simplemente le indicamos que la respuesta esperada es de tipo texto, con responseType: 'text'.

El método axios.get() devuelve una promesa. Por lo tanto, a continuación encuentras la definición de los comportamientos para el caso positivo y para el caso de error. La función definida como "then" recibe un objeto de respuesta, en caso que todo haya ido bien. La función definida para el "catch" recibe el mensaje de error, en caso que algo haya fallado. El último "then" que encuentras detrás del "catch" sirve para escribir código que se ejecutará tanto en el caso positivo como el caso negativo.

Acceso a un recurso de un API REST
Nuestro segundo ejemplo ilustra lo fácil que es hacer una solicitud a un servicio web que nos devuelva datos en JSON.

Nota: usamos JSON Placeholder como API REST fake pero podrias perfectamente usar tu propio juego de datos muy fácilmente con API REST fake JSON-Server.
var boton = document.getElementById('json_get');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data);
        mensaje.innerHTML = res.data.title;
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});
En este ejemplo el código es bastante similar. Solamente verás que estamos accediendo a una URL de un servidor remoto que nos devuelve datos en formato JSON. Además, informamos a Axios que la respuesta esperada es JSON (responseType: 'json'). En el objeto de respuesta, en la propiedad "data" encuentras el JSON completo devuelto por el servidor.

Ejemplo de una request para enviar datos por método POST
Este tercer ejemplo permite enviar datos a un API REST, para una inserción de información. En este caso usamos el método axios.post(), al que alimentamos con la URL del recurso y los datos que se desean enviar.

El API en este caso nos devuelve un status 201 en caso que se haya podido insertar el dato, en cuyo caso mostramos un mensaje con el ID del recurso insertado, generado por el servidor del API REST y devuelto como cuerpo del response.

var boton = document.getElementById('json_post');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      userId: 1,
      title: 'Esto es un post nuevo',
      body: 'cuerpo de este post. Me gusta la librería Axios!!'
    }
  })
    .then(function(res) {
      if(res.status==201) {
        mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res.data.id;
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});
No difiere mucho de lo que hemos visto en ejemplos anteriores, por lo que entiendo que no tendrás demasiados problemas para seguir el código. Sólo hay que mencionar aquí una de las ventajas de Axios respecto al API Fetch, que tu juego de datos para enviar por post lo compones con objeto Javascript plano, y no tienes necesidad de ir trabajando con el API de FormData para componer los datos en el formato adecuado para la solicitud POST.

Código completo de uso de Axios
El código completo de una página que realiza los ejemplos que acabamos de ver lo encuentras a continuación.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
  #loading {
    display: none;
  }
  </style>
  <script src="node_modules/axios/dist/axios.min.js"></script>
</head>
<body>
  
  <button id="carga_ajax">Carga contenido</button> 
  <button id="json_get">Request JSON GET</button> 
  <button id="json_post">Request JSON POST</button>
  <div id="mensaje"></div>
  <div id="loading">cargando...</div>
  
  <script>
var loading = document.getElementById('loading');
var mensaje = document.getElementById('mensaje');

var boton = document.getElementById('carga_ajax');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.get('texto.txt', {
    responseType: 'text'
  })
    .then(function(res) {
      if(res.status==200) {
        mensaje.innerHTML = res.data;
      }
      console.log(res);
    })
    .catch(function(err) {
      mensaje.innerText = 'Error de conexión ' + err;
    })
    .then(function() {
      loading.style.display = 'none';
    });
});


    var boton = document.getElementById('json_get');
    boton.addEventListener('click', function() {
      loading.style.display = 'block';
      axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
            console.log(res.data);
            mensaje.innerHTML = res.data.title;
          }
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        })
        .then(function() {
          loading.style.display = 'none';
        });
    });

    var boton = document.getElementById('json_post');
    boton.addEventListener('click', function() {
      loading.style.display = 'block';
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
          userId: 1,
          title: 'Esto es un post nuevo',
          body: 'cuerpo de este post. Me gusta la librería Axios!!'
        }
      })
        .then(function(res) {
          if(res.status==201) {
            mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res.data.id;
          }
        })
        .catch(function(err) {
          console.log(err);
        })
        .then(function() {
          loading.style.display = 'none';
        });
    });
  </script>
</body>
</html>
Conclusión
Axios es una buena alternativa para considerar sobre todo en aplicaciones o componentes donde requieras el acceso a recursos de un API REST. Con un peso de la librería más que ajustado, creemos que merece la pena usarla, si es que no tenemos en nuestra aplicación otro cliente HTTP disponible.

Agrega mucho valor gracias a una cantidad enorme de opciones de configuración de las solicitudes, que te pondrán muy fácil atender las demandas del API con la que te estés conectando. Además recibe las respuestas de una manera también fácil de procesar. Es una buena alternativa al API de Fetch + polyfills, por ser más sencilla de utilizar.
 */

