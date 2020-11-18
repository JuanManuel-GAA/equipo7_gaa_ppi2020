const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../db/db.js");


// usuario
//Petición get
router.get("/usuario", (req, res) => {
  mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500);
    }
  });
});

//Petición post
router.post("/usuario", (req, res) => {
  const {
    ID_tipo_usuario,
    correo,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    nombre,
    apellidos
  } = req.body;
  
  let nuevoUsuario = `INSERT INTO usuario (ID_tipo_usuario, correo,  nombre_usuario, pais_origen, telefono, contrasena, sexo, fecha_nacimiento, nombre, apellidos) VALUES (?,?,?,?,?,?,?,?,?,?)`;

  mysqlConnection.query(nuevoUsuario, [
    ID_tipo_usuario,
    correo,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    nombre,
    apellidos
  ], (err, results, fields) => {
    if (err) {
      res.status(500);
    } else {
      res.status(201).json({ message: `Usuario ingresado` });
    }
  });
});

//Petición put
router.put("/usuario/:ID", (req, res) => {
  const {
    ID_tipo_usuario,
    correo,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    nombre,
    apellidos
  } = req.body;
  const { ID } = req.params;

  let actualizarUsuario = `UPDATE usuario SET ID_tipo_ususario=?,correo=?,nombre_usuario=?, pais_origen=?, telefono=?, contrasena=?, sexo=?, fecha_nacimiento=?, nombre=?, apellidos = ? 
  WHERE ID = ?`;
  mysqlConnection.query( actualizarUsuario, 
    [
    ID_tipo_usuario,
    correo,
    nombre_usuario,
    pais_origen,
    telefono,
    contrasena,
    sexo,
    fecha_nacimiento,
    nombre,
    apellidos,
ID
    ],
    (err, rows, fields) => {
      if (!err) {
        res.status(201).json({ status: `Usuario actualizado con éxito` });
      } else {
        res.status(500);
      }
    }
  );
});

//PETICIÓN O SERVICIO DELETE - ELIMINACIÓN DE DATOS
router.delete("/usuario/:ID", (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query(
    `DELETE FROM usuario WHERE ID =?`,
    [ID],
    (err, rows, fields) => {
      if ("!err") {
        res.status(200).json({ status: `El usuario ha sido eliminado` });
      } else {
        res.status(500);
      }
    }
  );
});

module.exports = router;