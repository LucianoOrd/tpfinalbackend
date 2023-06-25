const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolSchema = new Schema({
    nombreRol: { type: String, requiered: true }
})

module.exports = mongoose.models.Rol || mongoose.model('Rol', RolSchema);