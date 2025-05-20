const express = require('express');
const router = express.Router();
const formsController = require('../controllers/formsController');

router.post('/forms',formsController.saveForm);

module.exports = router;