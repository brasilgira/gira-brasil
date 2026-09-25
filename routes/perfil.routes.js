const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfil.controller');

// GET /api/perfil/:id -> perfil público (dados + comentários + salvos + curtidos)
router.get('/:id', perfilController.buscarPerfil);

// PUT /api/perfil/:id -> editar o próprio perfil
router.put('/:id', perfilController.atualizarPerfil);

module.exports = router;
