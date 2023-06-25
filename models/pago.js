const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema({
    monto: { type: Number, requiered: true }
})

module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);