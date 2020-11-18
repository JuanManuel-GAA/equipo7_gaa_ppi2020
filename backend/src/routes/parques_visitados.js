const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

// Parque_visitado
//Petición get
router.get("/parque_visitado", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM parque_visitado",
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
router.post("/parque_visitado", (req, res) => {
  const { ID_parque, ID_usuario } = req.body;

  let nuevoParque_visitado = `INSERT INTO parque_visitado (ID_parque,ID_usuario) VALUES (?,?)`;

  mysqlConnection.query(
    nuevoParque_visitado,
    [ID_parque, ID_usuario],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `Visita registrada con exito` });
      }
    }
  );
});

//Petición put
router.put("/parque_visitado/:ID", (req, res) => {
  const { ID_parque, ID_usuario } = req.body;
  const { ID } = req.params;

  let actualizarParque_visitado = `UPDATE parque_visitado SET ID_parque=?,ID_usuario = ? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarParque_visitado,
    [ID_parque, ID_usuario],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Visita actualizada con exito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/parque_visitado/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM parque_visitado WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res
          .status(200)
          .json({ status: `La visita a sido eliminada exitosamente ` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;
