const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.contatosList);
router.get('/:id', contatoController.contatosRead);
router.post('/', contatoController.contatosCreate);
router.put('/:id', contatoController.contatosUpdate);
router.delete('/:id',  contatoController.contatosDelete);
//verify,
module.exports = router;
