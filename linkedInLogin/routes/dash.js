var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dash', { title: res.locals.user.displayName});
});

module.exports = router;