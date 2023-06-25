const insumoCtrl = require('./../controllers/insumo.controller');

const express = require('express');
const router = express.Router();

router.get('/', insumoCtrl.getInsumo);
router.post('/', insumoCtrl.createInsumo);
router.get('/detalle/:id', insumoCtrl.getInsumoId)
router.put('/:id', insumoCtrl.editInsumo);
router.delete('/:id', insumoCtrl.deleteInsumo);

module.exports = router;