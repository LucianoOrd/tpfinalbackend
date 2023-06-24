const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Alumno = require ('./alumno');
// const Entrenado = require ('./entrenador');
const ClaseSchema = new Schema({
    tipoClase: {type: String, requiere: true},
    cuposDisponibles: {type: String, require: true},
    alumno: {
        type: Schema.Types.ObjectId,
        ref: Alumno, 
        required: true
    },
    entrenador: {
        type: Schema.Types.ObjectId,
        ref: Entrenador, 
        required: true
    }
})

module.exports = mongoose.models.Clase || mongoose.model('Clase',ClaseSchema);