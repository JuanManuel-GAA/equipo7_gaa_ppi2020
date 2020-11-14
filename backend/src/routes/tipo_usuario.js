const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // tipo_usuario
    //Petición get
router.get('/tipo_usuario',(req,res)=>{
    mysqlConnection.query('SELECT * FROM tipo_usuario',
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
   router.post('/tipo_usuario', (req, res) => {
    const {ID,nombre,descripcion} = req.body
    let tipo_usuario = [ID,nombre,descripcion];
    let nuevoUsuario = `INSERT INTO tipo_usuario VALUES (?,?,?);`

   mysqlConnection.query(nuevoUsuario,tipo_usuario, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Usuario ingresado`})
   });
  });
/Petición put
  router.put('/tipo_usuario/:ID', (req,res) => {
  const {nombre, descripcion} = req.body
  const { ID } = req.params 

mysqlConnection.query(`UPDATE tipo_usuario
                       SET nombre=?, descripcion=?
                       WHERE ID = ?`,
                       [nombre,descripcion,ID], (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo de usuario actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/tipo_usuario/:ID', (req,res) => {
    const { ID } = req.params;
    mysqlConnection.query(`DELETE FROM tipo_usuario WHERE ID =?`,[ID],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Tipo de usuario eliminado con éxito`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;