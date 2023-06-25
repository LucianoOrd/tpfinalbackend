const alumnoCtrl = require('./../controllers/alumno.controller');
//manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de alumno
router.get('/', alumnoCtrl.getAlumnos);
router.post('/', alumnoCtrl.createAlumno);
router.get('/detalle/:id', alumnoCtrl.getAlumnoId);
router.put('/:id', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);
//exportamos el modulo de rutas
module.exports = router;