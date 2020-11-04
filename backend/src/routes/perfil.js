const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

router.get("/", (req, res) => {
  res.send("Sí funciona");
});

// Perfil
//Petición get
router.get("/perfil", (req, res) => {
  mysqlConnection.query("SELECT * FROM perfil", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//Petición post
router.post("/perfil", (req, res) => {
  const {
    id,
    correo,
    parques_guardados,
    nombre,
    parques_calificados,
    parques_visitados
  } = req.body;
  let perfil = [
    id,
    correo,
    parques_guardados,
    nombre,
    parques_calificados,
    parques_visitados
  ];
  let nuevoPerfil = `INSERT INTO perfil VALUES (?,?,?,?,?,?);`;

  mysqlConnection.query(nuevoPerfil, perfil, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Perfil registrado` });
  });
});

//Petición put
router.put("/perfil/:id", (req, res) => {
  const {
    correo,
    parques_guardados,
    nombre,
    parques_calificados,
    parques_visitados
  } = req.body;
  const { id } = req.params;

  mysqlConnection.query(
    `UPDATE perfil
                       SET correo=?, parques_guardados=?, nombre=?, parques_calificados=?, parques_visitados=?
                       WHERE id = ?`,
    [
      correo,
      parques_guardados,
      nombre,
      parques_calificados,
      parques_visitados,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: `Perfil actualizado con éxito` });
      } else {
        console.log(err);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/perfil/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM perfil WHERE id =?`,
    [id],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `El perfil ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
