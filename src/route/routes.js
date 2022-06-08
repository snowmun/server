const express = require('express');
const router = express.Router();
const productoController = require ('../controller/productoController');

// creamos la tura de nuestra api en la cual va al controllador creado y la funcion 
router.get('/api/v0/searchcategory/:id', productoController.searchCategory)
router.get('/api/v0/searchallproduct',productoController.searchAllProduct)

module.exports = router;
