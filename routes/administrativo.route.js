const administrativoCtrl = require('./../controllers/administrativo.controller');

const express = require('express');
const router = express.Router();

router.get('/', administrativoCtrl.getAdmin);
router.post('/', administrativoCtrl.createAdmin);
router.get('/detalle/:id', administrativoCtrl.getAdminId);
router.put('/:id', administrativoCtrl.editAdmin);
router.delete('/:id', administrativoCtrl.deleteAdmin);

module.exports = router;
