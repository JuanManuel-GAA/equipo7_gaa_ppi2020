const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // visita
    //Petición get
router.get('/visita',(req,res)=>{
    mysqlConnection.query('SELECT * FROM visita',
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
   router.post('/visita', (req, res) => {
    const {id_parque, correo_usuario, numero_visita} = req.body
let visita = [id_parque, correo_usuario, numero_visita];
    let nuevaVisita = `INSERT INTO visita VALUES (?,?,?);`

   mysqlConnection.query(nuevaVisita,visita, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Visita registrada`})
   });
  });
  
     //Petición put
  router.put('/visita/:id_parque,correo_usuario', (req,res) => {
  const {numero_visita} = req.body;
  const {id_parque,correo_usuario} = req.params;

mysqlConnection.query(`UPDATE visita
                       SET numero_visita=?
                       WHERE id_parque=?,correo_usuario= ?`,
                       [id_parque, correo_usuario, numero_visita], (err, rows,fields) => {
   if(!err){
    res.json({status: `Visita actualizada con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/visita/:id_parque,correo_usuario', (req,res) => {
    const { id_parque,correo_usuario } = req.params;
    mysqlConnection.query(`DELETE FROM visita WHERE id_parque=?,correo_usuario =?`,[id_parque,correo_usuario],(err,rows,fields) => {
      if("!err"){
        res.json({status: `La visita ha sido eliminada`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;
