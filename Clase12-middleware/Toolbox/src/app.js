const express = require("express");
const app = express();

app.listen(5000, () => console.log("listening on 5000"));

const esAdministrador = (req, res, next) => {
  const usuarioAdministrador = true;

  if (usuarioAdministrador) {
    console.log("El usuario esta correctamente logueado");
    next();
  } else {
    res.send("No esta logueado");
  }
};

const logger = (req, res, next) => {
  console.log(`request HTTP method: ${req.method}`);
  next();
};

app.get("/estudiantes", esAdministrador, (req, res) => {
  res.send([{ id: 1, nombre: "Lucas", edad: 35 }]);
});

app.post("/estudiantes", (req, res) => {
  res.statusCode(201).send();
});

app.use(logger);
