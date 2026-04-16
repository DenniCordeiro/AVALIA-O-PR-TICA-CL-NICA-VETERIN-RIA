const express = require('express');
const router = express.Router();

const animaisRoute = require('./animais.route');
const tutorRoute = require('./tutor.route');

const { autenticar, validarContentType } = require('../middlewares/main.middleware');

router.get('/', (req, res) => {
  res.json({ sistema: 'Clinica Do Denni', status: 'Online' });
});

router.use(autenticar);
router.use(validarContentType);

router.use('/animais', animaisRoute);
router.use('/tutores', tutorRoute);


router.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada na Clinica Do Denni.' });
});

module.exports = router;