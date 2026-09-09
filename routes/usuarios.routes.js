const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuario.controller');

router.post('/cadastro', usuariosController.cadastrar);

module.exports = router;