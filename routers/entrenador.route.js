const entrenadorCtrl = require('./../controllers/entrenador.controller');
//manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de entrenador
router.get('/', entrenadorCtrl.getEntrenadores);
router.post('/', entrenadorCtrl.createEntrenador);
router.put('/:id', entrenadorCtrl.editEntrenador);
router.delete('/:id', entrenadorCtrl.deleteEntrenador);
//exportamos el modulo de rutas
module.exports = router;