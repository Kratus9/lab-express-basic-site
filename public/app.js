const express = require("express");
const app = express();
const port = 3000;

app.get("/Home", (req, res, next) => {
  res.send(__dirname + "/views/Home.html");
});

// app.get("/home", (req, res, next) => {
//     // ruta que enviará al usuario una pagina

//     // sendFile para enviar archivos
//     console.log( __dirname ) // la direccion absoluta de esta ubicación
//     res.sendFile(__dirname + "/views/index.html")
//   })

app.get("/About", (req, res, next) => {
  res.send(__dirname + "/views/About.html");
});
app.get("/Works", (req, res, next) => {
  res.send(__dirname + "/views/Works.html");
});
app.get("/Photo-Gallery", (req, res, next) => {
  res.send(__dirname + "/views/Photo-Gallery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
