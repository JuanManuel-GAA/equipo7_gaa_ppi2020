const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // parques_visitados
    //Petición get
router.get('/parques_visitados',(req,res)=>{
    mysqlConnection.query('SELECT * FROM parques_visitados',
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
   router.post('/parques_visitados', (req, res) => {
    const {ID,numero_visita, ID_usuario } = req.body
    let parques_visitados = [ID,numero_visita, ID_usuario];
    let nuevoParque_visitado = `INSERT INTO parques_visitados VALUES (?,?,?);`

   mysqlConnection.query(nuevoParque_visitado,parques_visitados, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Parque ingresado`})
   });
  });
  
     //Petición put
  router.put('/parques_visitados/:ID', (req,res) => {
  const {numero_visita, ID_usuario } = req.body
  const { ID } = req.params 

mysqlConnection.query(`UPDATE parques_visitados
                       SET numero_visita=?, ID_usuario 
                       WHERE ID = ?`,
                       [numero_visita, ID_usuario, ID], (err, rows,fields) => {
   if(!err){
    res.json({status: `Parque actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/parques_visitados/:ID', (req,res) => {
    const { ID } = req.params;
    mysqlConnection.query(`DELETE FROM parque WHERE ID =?`,[ID],(err,rows,fields) => {
      if("!err"){
        res.json({status: `El parque ha sido eliminado`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;
