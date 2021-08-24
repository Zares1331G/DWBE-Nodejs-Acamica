const swaggerOptions = {
    deginition:{
      swagger: "2.0",
      openapi:'3.0',
      info:{
        title:' Ejemplo uso Swagger',
        version: ' 1.0.0',
        description: 'Como usar swagger en nodejs'
      }
    },
    apis: ['./routes/*.js']
  }

  module.exports = swaggerOptions;