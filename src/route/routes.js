const express = require('express');
const router = express.Router();

router.get('/api/v0/searchProduct/:id', controller.getUser)
router.get('/api/v0/searchallProduct',controller.getAll)

module.exports = router;
