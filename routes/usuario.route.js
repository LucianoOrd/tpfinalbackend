const express = require('express');
const router = express.Router();
const usuarioCtrl = require('./../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');


// definiendo rutas
router.get('/', autCtrl.verifyTokenAdmins, usuarioCtrl.getUsuarios);
router.post('/', autCtrl.verifyTokenAdmins, usuarioCtrl.createUsuario);
router.get('/detalle/:id', autCtrl.verifyTokenAdmins, usuarioCtrl.getUsuarioId);
router.put('/:id', autCtrl.verifyTokenAdmins, usuarioCtrl.editUsuario);
router.delete('/:id', autCtrl.verifyTokenAdmins, usuarioCtrl.deleteUsuario);

router.post('/login', usuarioCtrl.loginUsuario);

//exportacion del modulo de rutas
module.exports = router;