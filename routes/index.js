var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yes Roofin Construction, Corp' });
});

/* GET proposal page. */
router.get('/', function(req, res, next) {
  res.render('proposal', { title: 'Yes Roofin Construction, Corp' });
});

module.exports = router;
