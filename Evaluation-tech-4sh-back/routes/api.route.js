var express = require('express')

var router = express.Router()
var mouvements = require('./api/mvt.route')


router.use('/mouvements', mouvements);


module.exports = router;
