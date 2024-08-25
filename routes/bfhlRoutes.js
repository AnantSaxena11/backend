// routes/bfhlRoutes.js

const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/bfhl', bfhlController.postBFHL);
router.get('/bfhl', bfhlController.getBFHL);

module.exports = router;
