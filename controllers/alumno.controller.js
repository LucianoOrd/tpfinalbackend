const Alumno = require('../models/alumno')

const alumnoCtrl = {};

alumnoCtrl.getAlumnos = async (req, res) => {
    var alumno = await Alumno.find().populate('rol').populate('plan');
    res.json(alumno);
}

alumnoCtrl.createAlumno = async (req, res) => {

    var alumno = new Alumno(req.body);
    try {
        await alumno.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Alumno guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

alumnoCtrl.editAlumno = async (req, res) => {
    const valumno = new Alumno(req.body);
    try {
        await Alumno.updateOne({ _id: req.body._id }, valumno);
        res.json({
            'status': '1',
            'msg': 'Alumno updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

alumnoCtrl.deleteAlumno = async (req, res) => {
    try {
        await Alumno.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Alumno removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = alumnoCtrl;