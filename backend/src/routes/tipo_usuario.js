const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

// Parque
//Petición get
router.get("/tipo_usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM tipo_usuario", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/tipo_usuario", (req, res) => {
  const {
    nombre,
    descripcion
  } = req.body;
  
  let nuevoTipo_usuario = `INSERT INTO tipo_usuario ( nombre, descripcion) VALUES (?,?)`;

  mysqlConnection.query(nuevoTipo_usuario, [
    nombre,
    descripcion 
  ], (err, results, fields) => {
    if (err) {
      res.status(500);
    } else {
      res.status(201).json({ message: `Tipo de usuario ingresado` });
    }
  });
});

//Petición put
router.put("/tipo_usuario/:ID", (req, res) => {
  const {
    nombre,
    descripcion
  } = req.body;
  const { ID } = req.params;

  let actualizarParque = `UPDATE tipo_usuario SET nombre=?, descripcion=?  WHERE ID = ?`;
  mysqlConnection.query( actualizarTipo_usuario, 
    [
      nombre,
   	 descripcion
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Tipo de usuario actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/tipo_usuario/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM tipo_usuario WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El tipo de usuario ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;
