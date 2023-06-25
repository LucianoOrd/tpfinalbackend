const mongoose = require('mongoose');
const Rol = require('./rol')

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombreUsuario: { type: String, requiered: true },
    password: { type: String, requiered: true },
    rol: {
        type: Schema.Types.ObjectId,
        ref: Rol,
        required: true
    },
})

module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);