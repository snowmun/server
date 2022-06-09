**** app.js ****

se crea de forma sencilla un servidor web básico para responder cualquier petición simplemente usando el paquete express de Node he llamaremos todos los packetes necesarios para su comienzo ya que por asi decirlo es nuestro
js padre.

**** database - db.js ****
creamos una base de datos fuera del app.js para tener un mejor orden de codigo ,
debido a que se desconectaba cada 5 segundos se aplico una estrategia keep alive,
esto  crea una copia de la base de datos y la podemos usar el tiempo que queramos.


**** controller ****

** llamado de todos los productos **
para el llamado de nuestra api  haremos un select * from product el cual nos traera todos los productos
esto lo guardaremos en un json con la siguiente estructura:

  return res.status(200).json({
                    "status":true,
                    "message":"productos encontrados con exito",
                    "Data": results
                })

    respuesta
    status el status 200 indica que esta todo ok y funcionando a la perfeccion 
    message, el mensaje que le estamos dando   en respuesta 
    Data, es toda la data que esta entregando la api en este caso nos entregaria un arreglo de objeto
    con todos los productos existentes 
    ej: "Data": [
        {
            "id": 5, aqui veremos el id del producto
            "name": "ENERGETICA MR BIG", aqui podemos visualizar el nombre del producto
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg", en esta parte esta el link de la imagen 
            "price": 1490, el precio del producto
            "discount": 20, el descuento que tiene
            "category": 1 y una de las partes mas importantes para podes llamar nuestra otra api es el id de la categoria
        },
}

** llamado de producto por id categoria **

en este llamado recibiremos unos parametros para ser exactor reques.params.id le asignaremos una constante.
para el llamado de nuestra api haremos un  SELECT * FROM product where category = 'constante del id'  el cual nos traera todos los productos con la condicion de que la category del producto sea el id en params.id
esto lo guardaremos en un json con la misma estructura del json anterior.


nota: se trata de mantener siempre la misma estructura de json en todas las respuestas debido  a que no sea tan complicado
el leerlos todos 


**** en el route - routes.js****


importa  los controlladores creados  anteriormente se vio como nos mostraba la informacion de una api
ahora analizaremos el llamado de una api, como bien mencione anteriormente este llamado se debe crear
en un route y para tener un mejor orden de codigo lo exporte .

const productoController = require ('../controller/productoController');

en esta parte iremos al controllador y le pondremos un nombre como productoController
se puede desestructurar pero como eran pocos metodos se tomo la desicion que es mejor que no.
luego llamaremos los metodos creados 

router.get('/api/v0/searchallproduct',productoController.searchAllProduct)
este metodo get inica que si uno va a ese direccionamiento se activara el metodo searchAllProduct de productoController


router.get('/api/v0/searchcategory/:id', productoController.searchCategory)
aqui es exactamente igual que arriba pero indicando que debe recibir un dato para poder entrar 

aqui analizaremos un poco lo que es la url

api, indica que esto es una api
v0, indica el tipo de versiona que es nuestra api
searchcategory, la accion de nuestra api
:id, es el dato que recibira nuestro url para procesarlo




