const mongoose = require('mongoose');
const Rol = require('./rol')
const Plan = require('./plan')
const { Schema } = mongoose;

const AlumnoSchema = new Schema({
    rol: { type: Schema.Types.ObjectId, ref: Rol },
    plan: { type: Schema.Types.ObjectId, ref: Plan },
    fechaInicio: { type: Date, required: true }
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema)