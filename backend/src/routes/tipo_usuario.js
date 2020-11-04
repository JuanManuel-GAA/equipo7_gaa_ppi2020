const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../db/db.js');

router.get('/',(req,res)=>{
  res.send('Si funciona')
})

        // tipo_usuario
    //Petición get
router.get('/tipo_Usuario',(req,res)=>{
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
    const {id,nombre,descripcion} = req.body
    let tipo_usuario = [id,nombre,descripcion];
    let nuevoUsuario = `INSERT INTO tipo_usuario VALUES (?,?,?);`

   mysqlConnection.query(nuevoUsuario,tipo_usuario, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Usuario ingresado`})
   });
  });
  
     //Petición put
  router.put('/tipo_usuario/:id', (req,res) => {
  const {nombre, descripcion} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE tipo_usuario
                       SET nombre=?, descripcion=?
                       WHERE id = ?`,
                       [nombre,descripcion,id], (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo de usuario actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

  //PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/tipo_usuario/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM tipo_usuario WHERE id =?`,[id],(err,rows,fields) => {
      if("!err"){
        res.json({status: `Tipo de usuario eliminado con éxito`})
      }else{
        console.log(err);
      }
    });
  });

module.exports = router;