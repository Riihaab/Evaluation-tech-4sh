var express = require('express');

var router = express.Router();

var MvtController = require('../../controllers/mvt.controller');

router.get('/', MvtController.getMouvements);

router.post('/', MvtController.createMouvement);




// Export the Router

module.exports = router;

