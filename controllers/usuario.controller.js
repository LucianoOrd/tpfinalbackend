const Usuario = require('../models/usuario')
const jwt = require('jsonwebtoken');


const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    var usuario = await Usuario.find().populate('rol');
    res.json(usuario);
}

usuarioCtrl.getUsuarioId = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({
                status: '0',
                msg: 'Usuario no encontrada'
            });
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operación.'
        });
    }
};

usuarioCtrl.createUsuario = async (req, res) => {

    var usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Usuario guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

usuarioCtrl.editUsuario = async (req, res) => {
    const vusuario = new Usuario(req.body);
    try {
        await Usuario.updateOne({ _id: req.body._id }, vusuario);
        res.json({
            'status': '1',
            'msg': 'Usuario updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Usuario removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}


usuarioCtrl.loginUsuario = async (req, res) => {
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        nombreUsuario: req.body.nombreUsuario,
        password: req.body.password
    }
    try {//el método findOne retorna un objeto que cumpla con los criterios de busqueda
        const user = await Usuario.findOne(criteria).populate("rol");
        if (!user) {
            res.json({
                status: 0,
                msg: "Usuario no encontrado"
            })
        } else {
            const unToken = jwt.sign({ id: user._id, rol: user.rol.nombreRol }, "secretkey");
            res.json({
                status: 1,
                msg: "Usuario encontrado",
                username: user.nombreUsuario, //retorno información útil para el frontend
                rol: user.rol, //retorno información útil para el frontend
                userid: user._id, //retorno información útil para el frontend
                token: unToken
            })
        }
    } catch (error) {
        res.json({
            status: 0,
            msg: 'error'
        })
    }
}

module.exports = usuarioCtrl;