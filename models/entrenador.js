const mongoose = require('mongoose');
const Rol = require('./rol')
const { Schema } = mongoose;

const EntrenadorSchema = new Schema({
    apellido: { type: String, require: true },
    nombre: { type: String, requiere: true },
    fechaNacimiento: { type: Date, requiere: true },
    dni: { type: Number, requiere: true },
    email: { type: String, requiere: true },
    nroCelular: { type: String, requiere: true },
    domicilio: { type: String, requiere: true },
    
})
module.exports = mongoose.models.Entrenador || mongoose.model('Entrenador', EntrenadorSchema)