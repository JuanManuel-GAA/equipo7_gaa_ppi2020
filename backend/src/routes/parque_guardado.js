const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

// Parques Guardados
//Petición get para traer los parques guardados
router.get("/parque_guardado", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM parque_guardado",
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
router.post("/parque_guardado", (req, res) => {
  const { ID_parque, ID_usuario } = req.body;

  let nuevoParque_guardado = `INSERT INTO parque_guardado ( ID_parque, ID_usuario) VALUES (?,?)`;

  mysqlConnection.query(
    nuevoParque_guardado,
    [ID_parque, ID_usuario],
    (err, results, fields) => {
      if (err) {
        res.status(500);
      } else {
        res.status(201).json({ message: `El parque se ha guardado` });
      }
    }
  );
});

//Petición put
router.put("/parque_guardado/:ID", (req, res) => {
  const { ID_parque, ID_usuario } = req.body;
  const { ID } = req.params;

  let actualizarParque_guardado = `UPDATE parque_guardado SET ID_parque=?, ID_usuario=? 
  WHERE ID = ?`;
  mysqlConnection.query(
    actualizarParque_guardado,
    [ID_parque, ID_usuario, ID],
    (err, rows, fields) => {
      if (!err) {
        res
          .status(201)
          .json({ status: `El parque guardado se ha actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/parque_guardado/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM parque_guardado WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res
          .status(200)
          .json({ status: `El parque guardado ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;
