const express = require ('express');
const path = require('path');
const app = express();

app.use(express.json());

const parque = require ('./src/routes/parque.js');
const parque_calificado = require ('./src/routes/parque_calificado.js');
const parque_visitado = require ('./src/routes/parque_visitado.js');
const tipo_usuario = require ('./src/routes/tipo_usuario.js');
const usuario = require ('./src/routes/usuario.js');
const parque_guardado = require ('./src/routes/parque_guardado.js');

app.use('/api',parque);
app.use('/api',parque_visitado);
app.use('/api',parque_calificado);
app.use('/api',tipo_usuario);
app.use('/api',usuario);
app.use('/api',parque_guardado);


app.use(express.urlencoded({extended: false}));

app.listen(3001,()=>{
  console.log('server started')
});