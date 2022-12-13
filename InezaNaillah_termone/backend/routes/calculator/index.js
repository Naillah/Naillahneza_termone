const router = require("express").Router();

router.use('/', require('./post.doMath'));

module.exports = router;