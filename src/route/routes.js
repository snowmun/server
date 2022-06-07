const express = require('express');
const router = express.Router();
const productoController = require ('../controller/productoController');

router.get('/api/v0/searchcategory/:id', productoController.searchCategory)
router.get('/api/v0/searchallproduct',productoController.searchAllProduct)

module.exports = router;
