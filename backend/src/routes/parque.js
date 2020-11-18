const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

// Parque
//Petición get
router.get("/parque", (req, res) => {
  mysqlConnection.query("SELECT * FROM parque", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/parque", (req, res) => {
  const {
    nombre,
    comentario,
    transporte,
    recomendaciones,
    historia,
    direccion,
    longitud,
    latitud
  } = req.body;

  let nuevoParque = `INSERT INTO parque (  nombre,
    comentario,
    transporte,
    recomendaciones,
    historia,
    direccion,
    longitud,
    latitud ) VALUES (?,?,?,?,?,?,?,?,?)`;

  mysqlConnection.query(
    nuevoParque,
    [
      nombre,
      comentario,
      transporte,
      recomendaciones,
      historia,
      direccion,
      longitud,
      latitud
    ],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Parque ingresado` });
      }
    }
  );
});

//Petición put
router.put("/parque/:ID", (req, res) => {
  const {
    nombre,
    comentario,
    transporte,
    recomendaciones,
    historia,
    direccion,
    longitud,
    latitud
  } = req.body;
  const { ID } = req.params;

  let actualizarParque = `UPDATE parque SET nombre=?, comentario=?, transporte=?, recomendaciones=?, historia=?, direccion=?,  longitud=?, latitud = ? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarParque,
    [
      nombre,
      comentario,
      transporte,
      recomendaciones,
      historia,
      direccion,
      longitud,
      latitud,
      ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Parque actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/parque/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM parque WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El parque ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;
