const mongoose = require('mongoose');
const Rol = require('./rol')
const { Schema } = mongoose;

const EntrenadorSchema = new Schema({
    rol: { type: Schema.Types.ObjectId, ref: Rol },
})
module.exports = mongoose.models.Entrenador || mongoose.model('Entrenador', EntrenadorSchema)