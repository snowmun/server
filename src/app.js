// exportamos los package instalados para poder utilizarlos
require('dotenv').config();
require('./database/db')
const express = require ('express');
const router = require ('./route/routes.js');
const cors = require('cors');
const bodyParser = require('body-parser');

// indicamos que si el puerto 5000 no esta disponible se creara otro puerto
const PORT = process.env.PORT || 5000
const app = express();
// se usa cors para poder usar la api desde el cliente 
app.use(cors())
app.use(express.json())


// se configura el parser para poder probarlo en postman
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());

// nos deja el direccionamiento principal
app.use('/',router)


app.listen(PORT,()=>{
    console.log(`backend montado con exito en el puerto ${PORT}`)
})
