const mongoose = require('mongoose');
const Usuario = require('./usuario');
const Plan = require('./plan');
const ejercicio = require('./ejercicio');
const { Schema } = mongoose;

const AlumnoSchema = new Schema({
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    dni: { type: Number, required: true },
    email: { type: String, required: true },
    nroCelular: { type: String, required: true },
    domicilio: { type: String, required: true },
    plan: {
        type: Schema.Types.ObjectId,
        ref: Plan,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: Usuario
    },
    ejercicios: {type: Object},
    fechaInicio: { type: Date, required: true }
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema)