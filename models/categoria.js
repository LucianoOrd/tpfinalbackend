const mongoose = require('mongoose');
const {Schema} = mongoose;
const CategoriaSchema = new Schema({
    descripcion: {type: String, require: true}
})

module.exports = mongoose.models.Categoria || mongoose.model('Categoria',CategoriaSchema);