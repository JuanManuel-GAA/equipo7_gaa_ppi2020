const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

router.get("/", (req, res) => {
  res.send("Si funciona");
});

// Parques Guardados
//Petición get
router.get("/parques_guardados", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM parques_guardados",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//Petición post
router.post("/parques_guardados", (req, res) => {
  const { ID, ID_parque, ID_usuario } = req.body;
  let parques_guardados = [ID, ID_parque, ID_usuario];
  let nuevoParque_guardado = `INSERT INTO parques_guardados VALUES (?,?,?);`;

  mysqlConnection.query(
    nuevoParque_guardado,
    parques_guardados,
    (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ message: `Parque guardado` });
    }
  );
});

//Petición put
router.put("/parques_guardados/:id", (req, res) => {
  const { ID_parque, ID_usuario } = req.body;
  const { ID } = req.params;

  mysqlConnection.query(
    `UPDATE parques_guardados
                       SET ID_parque=?, ID_usuario=?
                       WHERE ID = ?`,
    [ID_parque, ID_usuario, ID],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: `Parques guardados se ha actualizado` });
      } else {
        console.log(err);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/parques_guardados/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM parques_guardados WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `El parque guardado ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
