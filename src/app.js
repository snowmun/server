require('dotenv').config();
const express = require ('express');
const router = require ('./route/routes.js');
const cors = require('cors');
const db = require('./database/db')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(express.json())


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());
app.use('/',router)


app.listen(PORT,()=>{
    console.log(`backend montado con exito en el puerto ${PORT}`)
})
