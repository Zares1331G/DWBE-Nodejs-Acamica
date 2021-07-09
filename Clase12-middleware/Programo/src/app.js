const basciAuth = require("express-basic-auth");
const express = require("express");
const app = express();

const userRoutes = require('./routers/user.routers');
const myCustomAuthorizer = require('./middleware/basic-auth.middleware')

//Primero se ejecutan los middlewares globales y luego los especificos

app.use(express.json());

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  //res.json('no autorizado') este caso no ser autorizado
  //res.status(401).send(): Si el usuario no esta autorizado para ver una ruta devolver este status
  next();
});

//Forma Manual de validar un Basic auth
/* app.use((req, res, next) => {
  const auth = req.headers.authorization;
  let buff = new Buffer.from(auth.split(" ")[1], "base64");
  let text = buff.toString('ascii');
  console.log(text.split(':'))
}); */

//Basic Auht con libreria "express-basic-auth"
/* 
app.use(basciAuth({
  users: {'David' : 'Leal', 'admin' : 'pass'  
  } 
}));
 */

app.use(basciAuth({ authorizer: myCustomAuthorizer }));



app.use("/user", userRoutes);

/*
app.get('/', (req, res) => { 
    res.json('hola desde nodeJs')
});

const middlewareTest = (req, res, next) =>{
    console.log("middleware por ruta")
    next()
}

app.get('/test', middlewareTest, (req, res) => {
    res.json('hola desde test')
});

*/
app.listen(3000, () => {
  console.log("server listing on port 3000");
});
