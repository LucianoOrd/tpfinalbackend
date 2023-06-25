const rutinaCtrl = require('./../controllers/rutina.controller');
//manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de rutina
router.get('/', rutinaCtrl.getRutinas);
router.post('/', rutinaCtrl.createRutina);
router.get('/detalle/:id', rutinaCtrl.getRutinaId)
router.put('/:id', rutinaCtrl.editRutina);
router.delete('/:id', rutinaCtrl.deleteRutina);
//exportamos el modulo de rutas
module.exports = router;