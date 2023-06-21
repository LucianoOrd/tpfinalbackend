const administrativoCtrl = require('../controllers/administrativo.controller');

const express = require('express');
const router = express.Router();

router.get('/', administrativoCtrl.getAdmin);
router.post('/', administrativoCtrl.createAdmin);
router.get('/detalle/:id', administrativoCtrl.getAdminId)
router.put('/:id', administrativoCtrl.editAdmin);
router.delete('/:id', administrativoCtrl.deleteAdmin);

module.exports = router;

// Esto va en el index.js
// app.use('/api/administrativo', require('./routes/administrativo.route.js'));
// app.use('/api/encargado', require('./routes/encargado.route.js'));
// app.use('/api/categoria', require('./routes/categoria.route.js'));
// app.use('/api/insumo', require('./routes/insumo.route.js'));
// app.use('/api/clase', require('./routes/clase.route.js'));
// app.use('/api/cuota', require('./routes/cuota.route.js'));