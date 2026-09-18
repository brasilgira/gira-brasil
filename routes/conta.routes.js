// routes/conta.routes.js
const express = require("express");
const router = express.Router();

const contaController = require("../controllers/conta.controller");
const verificarUsuario = require("../middleware/verificarUsuario");

// Só precisa estar logado (não precisa ser admin) pra excluir a própria conta.
router.delete("/", verificarUsuario, contaController.excluirConta);

module.exports = router;
