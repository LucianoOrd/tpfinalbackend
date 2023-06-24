const mongoose = require('mongoose');
const {Schema} = mongoose;
const Categoria = require ('./categoria');
const InsimoSchema = new Schema({
    nombre: {type: String, requiere: true},
    descripcion: {type: String, require: true},
    precio: {type: String, requiere: true},
    stock: {type: Number, requiere: true},
    imagen: {type: String},
    categoria: {
        type: Schema.Types.ObjectId,
        ref: Categoria, 
        required: true
    }
})

module.exports = mongoose.models.Insumo || mongoose.model('Insumo',InsimoSchema);