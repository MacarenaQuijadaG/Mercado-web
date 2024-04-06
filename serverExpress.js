const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

app.set("view engine", "handlebars");

// Configuración de Handlebars
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.engine("handlebars",exphbs.engine({layoutsDir: __dirname + "/views",}));

app.get("/", (req, res) => {
    res.render("main", { productos });
});

const productos = {
    "Platano": "/Assets/banana.png",
    "Cebolla": "/Assets/cebollas.png",
    "Pimenton": "/Assets/pimenton.png",
    "Papas": "/Assets/papas.png",
    "Lechuga": "/Assets/lechuga.png",
    "Tomate": "/Assets/tomate.png"
  };

