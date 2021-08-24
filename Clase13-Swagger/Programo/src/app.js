const basicAuth = require('express-basic-auth');
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const userRoutes = require('./routes/user.routes');
const myCustomAuthorizer = require('./middlewares/basic-auth.middleware');
const swaggerOptions = require('./utils/swaggerOptions');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  //res.json('no autorizado') este caso no ser autorizado
  //res.status(401).send(): Si el usuario no esta autorizado para ver una ruta devolver este status
  next();
});

// Documentación Swagger
const swaggerSpecs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))


app.use(basciAuth({ authorizer: myCustomAuthorizer }));


app.use("/user", userRoutes);


app.listen(3000, () => {
  console.log("server listing on port 3000");
});
