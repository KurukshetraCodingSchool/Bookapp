var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res,next)=> {
  res.render('index')
});
// register
router.get('/Signup', (req,res,next)=> {
  res.render('Register')
});
//Signin 
router.get('/Signin', (req,res,next)=> {
  res.render('Signin')
});

module.exports = router;
