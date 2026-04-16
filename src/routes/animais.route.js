const router = require('express').Router();
const animaisController = require('../controllers/animais.controller');

router.get('/', animaisController.listarAnimais);
router.get('/:id', animaisController.buscarAnimaisPorId);
router.post('/', animaisController.criarAnimais);
router.put('/:id', animaisController.atualizarAnimais);
router.delete('/:id', animaisController.removerAnimais);

module.exports = router;