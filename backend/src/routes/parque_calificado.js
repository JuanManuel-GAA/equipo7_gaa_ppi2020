const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

// Parque calificado
//Petición get
router.get("/parque_calificado", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM parque_calificado",
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        res.status(500);
      }
    }
  );
});

//Petición post
router.post("/parque_calificado", (req, res) => {
  const { ID_parque, ID_usuario, calificacion, comentario } = req.body;

  let nuevoParque_calificado = `INSERT INTO parque_calificado ( ID_parque, ID_usuario, calificacion, comentario) VALUES (?,?,?,?)`;

  mysqlConnection.query(
    nuevoParque_calificado,
    [ID_parque, ID_usuario, calificacion, comentario],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Parque calificado` });
      }
    }
  );
});

//Petición put
router.put("/parque_calificado/:ID", (req, res) => {
  const { ID_parque, ID_usuario, calificacion, comentario } = req.body;
  const { ID } = req.params;

  let actualizarParque_calificado = `UPDATE parque_calificado SET ID_parque=?, ID_usuario=?, calificacion=?, comentario=? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarParque_calificado,
    [ID_parque, ID_usuario, calificacion, comentario, ID],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Calificacion actualizada con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/parque_calificado/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM parque_calificado WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `La ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;
