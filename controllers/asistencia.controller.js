const Asistencia = require('../models/asistencia')

const asistenciaCtrl = {};

asistenciaCtrl.getAsistencia = async (req, res) => {
    var asistencia = await asistencia.find().populate('alumno').populate('clase');
    res.json(asistencia);
}

asistenciaCtrl.createAsistencia= async (req, res) => {

    var asistencia = new Asistencia(req.body);
    try {
        await asistencia.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Asistencia guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

asistenciaCtrl.editAsistencia= async (req, res) => {
    const vasistencia = new asistencia(req.body);
    try {
        await asistencia.updateOne({ _id: req.body._id }, vasistencia);
        res.json({
            'status': '1',
            'msg': 'Asistencia updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

asistenciaCtrl.deleteAsistencia= async (req, res) => {
    try {
        await asistencia.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Asistencia removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = asistenciaCtrl;