const claseCtrl = require('../controllers/clase.controller');

const express = require('express');
const router = express.Router();

router.get('/', claseCtrl.getClase);
router.post('/', claseCtrl.createClase);
router.get('/detalle/:id', claseCtrl.getClaseId)
router.put('/:id', claseCtrl.editClase);
router.delete('/:id', claseCtrl.deleteClase);

module.exports = router;