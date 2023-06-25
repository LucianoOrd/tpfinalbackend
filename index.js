const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/alumno', require('./routes/alumno.route.js'));
app.use('/api/asistencia', require('./routes/asistencia.route.js'));
app.use('/api/ejercicio', require('./routes/ejercicio.route.js'));
app.use('/api/entrenador', require('./routes/entrenador.route.js'));
app.use('/api/rutina', require('./routes/rutina.route.js'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});