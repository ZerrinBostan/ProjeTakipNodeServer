var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({user: {name:'Taha'}});
});

router.get('/login', function(req,res,next) {
  
});
module.exports = router;
