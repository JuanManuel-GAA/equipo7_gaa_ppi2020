const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // Parque
    //Petición get
router.get('/parque',(req,res)=>{
    mysqlConnection.query('SELECT * FROM parque',
    (err,rows,fields)=>{
      if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
    })
}) 

    //Petición post
   router.post('/parque', (req, res) => {
    const {id,nombre, puntuacion, comentario, transporte, direccion, recomendaciones, historia, longitud, latitud} = req.body
    let parque = [id,nombre, puntuacion, comentario, transporte, direccion, recomendaciones, historia, longitud, latitud];
    let nuevoParque = `INSERT INTO parque VALUES (?,?,?,?,?,?,?,?,?,?);`

   mysqlConnection.query(nuevoParque,parque, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Parque ingresado`})
   });
  });
  
     //Petición put
  router.put('/parque/:id', (req,res) => {
  const {nombre, puntuacion, comentario, transporte, direccion, recomendaciones, historia, longitud, latitud} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE parque
                       SET nombre=?, puntuacion=?, comentario=?, transporte=?, direccion=?, recomendaciones=?, historia=?, longitud=?, latitud = ? 
                       WHERE id = ?`,
                       [nombre, puntuacion, comentario, transporte, direccion, recomendaciones, historia, longitud, latitud,id], (err, rows,fields) => {
   if(!err){
    res.json({status: `Parque actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/parque/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM parque WHERE id =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El parque ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;