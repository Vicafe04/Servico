const express = require('express');

const router = express.Router();

const ServicoController = require("../controllers/servico.controller");


router.get('/read', ServicoController.listarFunc);
router.get('/readId/:id', ServicoController.listarFuncId);
router.delete('/del/:id', ServicoController.del);
router.post('/create', ServicoController.criarFunc);
router.put('/update', ServicoController.alterarFunc);
module.exports = router;