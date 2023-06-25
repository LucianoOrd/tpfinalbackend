const mongoose = require('mongoose');
const Rol = require('./rol')
const Plan = require('./plan')
const { Schema } = mongoose;

const AlumnoSchema = new Schema({
    apellido: { type: String, require: true },
    nombre: { type: String, requiere: true },
    fechaNacimiento: { type: Date, requiere: true },
    dni: { type: Number, requiere: true },
    email: { type: String, requiere: true },
    nroCelular: { type: String, requiere: true },
    domicilio: { type: String, requiere: true },
    plan: {
        type: Schema.Types.ObjectId,
        ref: Plan,
        required: true
    },
    fechaInicio: { type: Date, required: true }
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema)