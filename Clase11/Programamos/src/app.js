const exprerss = require("express");
const app = exprerss();
const telefonos = require("../libs/telefonos");

app.get("/telefonos", (req, res) => {
  res.json(telefonos);
});

app.get("/mitadtelefonos", (req, res) => {
  telefonos.splice(0, telefonos.length / 2);
  res.json(telefonos);
});

app.get("/telefonoGamaAlta", (req, res) => {
  const alta = telefonos.filter(telefonos => telefonos.gama === 'Alta' );
  res.json(alta);
});

app.get("/telefonoGamaMedia", (req, res) => {
  const media = telefonos.filter(telefonos => telefonos.gama === 'Media' );
  res.json(media);});
app.get("/telefonoGamaBaja", (req, res) => {
  const baja = telefonos.filter(telefonos => telefonos.gama === 'Baja' );
  res.json(baja);});

app.get("/telefonoEconomico", (req, res) => {});

app.get("/telefonoCostoso", (req, res) => {});

app.listen(3000, () => {
  console.log("Server esta escuchando en el puerto 3000");
});
