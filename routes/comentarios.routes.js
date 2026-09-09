const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentarios.controller');

// GET /api/comentarios/noticia/:noticiaId -> Busca os comentários de uma notícia
router.get('/noticia/:noticiaId', comentariosController.listarPorNoticia);

// POST /api/comentarios -> Salva um comentário novo
router.post('/', comentariosController.criar);

module.exports = router;