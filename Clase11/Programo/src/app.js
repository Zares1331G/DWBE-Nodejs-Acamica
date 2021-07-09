const express = require("express");
const app = express();
require("dotenv").config(); //Esto llama a la libreria que trae a la variable de entorno

const PORT = process.env.PORT || 3000;

const lista_usuarios = ["user1","user2","user3"]

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send('Hola mundo')
});

//CRUD de usuarios (Create, Read, Update, Delete)
app.get('/usuarios', (req, res) => {
    res.json(lista_usuarios);
});

app.post('/usuarios', (req, res) => {
    res.json('post de Usuarios')
});

app.put('/usuarios', (req, res) => {
    res.json('put de Usuarios')
});

app.delete('/usuarios', (req, res) => {
    res.json('delete de Usuarios')
});

app.listen(PORT, () => {
  console.log("escuchando en el puerto " + PORT);
});
