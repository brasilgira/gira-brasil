// routes/admin.routes.js
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");
const verificarAdmin = require("../middleware/verificarAdmin");

// Toda rota abaixo passa primeiro pelo verificarAdmin — sem exceção.
router.get("/noticias", verificarAdmin, adminController.listarNoticias);
router.delete("/noticias/:id", verificarAdmin, adminController.apagarNoticia);

router.get("/comentarios", verificarAdmin, adminController.listarComentarios);
router.put("/comentarios/:id", verificarAdmin, adminController.editarComentario);
router.delete("/comentarios/:id", verificarAdmin, adminController.apagarComentario);

module.exports = router;

// Em server.js:
//   const adminRoutes = require("./routes/admin.routes");
//   app.use("/api/admin", adminRoutes);
