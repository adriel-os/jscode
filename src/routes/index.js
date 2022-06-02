const express = require('express');
const router = express.Router();
const authJWT = require('./authJWT.js')

// middleware para checar Auth
router.use(authJWT)

// define the home page route
router.get('/', (req, res)=> {
  if(req.jwt == false)
  res.sendFile('/view/home.html', {root:__dirname + './../'})
  else 
  res.send('View do Painel')
})

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
})

module.exports = router;