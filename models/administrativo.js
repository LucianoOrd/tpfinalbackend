const mongoose = require('mongoose');
const Rol = require('./rol')
const { Schema } = mongoose;

const AdministrativoSchema = new Schema({
    apellido: { type: String, require: true },
    nombre: { type: String, requiere: true },
    fechaNacimiento: { type: Date, requiere: true },
    dni: { type: Number, requiere: true },
    email: { type: String, requiere: true },
    nroCelular: { type: String, requiere: true },
    domicilio: { type: String, requiere: true }
})

module.exports = mongoose.models.Administrativo || mongoose.model('Administrativo', AdministrativoSchema);