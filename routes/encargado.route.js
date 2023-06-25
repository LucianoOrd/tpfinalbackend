const encargadoCtrl = require('./../controllers/encargado.controller');

const express = require('express');
const router = express.Router();

router.get('/', encargadoCtrl.getEncargado);
router.post('/', encargadoCtrl.createEncargado);
router.get('/detalle/:id', encargadoCtrl.getEncargadoId)
router.put('/:id', encargadoCtrl.editEncargado);
router.delete('/:id', encargadoCtrl.deleteEncargado);

module.exports = router;
