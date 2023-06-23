const ejercicioCtrl = require('./../controllers/ejercicio.controller');
//manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de ejercicio
router.get('/', ejercicioCtrl.getEjercicios);
router.post('/', ejercicioCtrl.createEjercicio);
router.put('/:id', ejercicioCtrl.editEjercicio);
router.delete('/:id', ejercicioCtrl.deleteEjercicio);
//exportamos el modulo de rutas
module.exports = router;