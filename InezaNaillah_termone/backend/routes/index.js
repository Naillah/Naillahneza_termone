const router = require('express').Router();

router.use('/doMath', require('./calculator'));

module.exports = router