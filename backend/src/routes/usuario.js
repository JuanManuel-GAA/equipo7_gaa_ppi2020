const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");

router.get("/", (req, res) => {
  res.send("Si funciona");
});

// usuario
//Petición get
router.get("/usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//Petición post
router.post("/usuario", (req, res) => {
  const {
    correo,
    id_tipoUsuario,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    edad,
    nombre,
    apellidos
  } = req.body;
  let usuario = [
    correo,
    id_tipoUsuario,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    edad,
    nombre,
    apellidos
  ];
  let nuevoUsuario = `INSERT INTO usuario VALUES (?,?,?,?,?,?,?,?,?,?,?);`;

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Usuario ingresado` });
  });
});

//Petición put
router.put("/usuario/:correo", (req, res) => {
  const {
    id_tipoUsuario,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    edad,
    nombre,
    apellidos
  } = req.body;
  const { correo } = req.params;

  mysqlConnection.query(
    `UPDATE usuario
                       SET id_tipoUsusario=?,nombre_usuario=?, pais_origen=?, telefono=?, contrasena=?, sexo=?, fecha_nacimiento=?, edad=?, nombre=?, apellidos = ? 
                       WHERE correo = ?`,
    [
      id_tipoUsuario,
      nombre_usuario,
      pais_origen,
      telefono,
      contrasena,
      sexo,
      fecha_nacimiento,
      edad,
      nombre,
      apellidos
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: `Usuario actualizado con éxito` });
      } else {
        console.log(err);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/usuario/:correo", (req, res) => {
  const { correo } = req.params;
  mysqlConnection.query(
    `DELETE FROM usuario WHERE correo =?`,
    [correo],
    (err, rows, fields) => {
      if ("!err") {
        res.json({ status: `El usuario ha sido eliminado` });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
