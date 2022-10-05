const express = require('express');
const router = express.Router();
const authJWT = require('./authJWT.js')
const controllerPrincipal = require('./controllerPrincipal.js')
const controllerAbout = require('./controllerAbout.js')

// middleware para checar Auth
router.use(authJWT)

// define the home page route
router.get('/', controllerPrincipal)

// define the about route
router.get('/about', controllerAbout)

module.exports = router;