const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log("El servidor en el puerto 3000");
});

// solicitudes de archivos estaticos
//conecta con assests que es en donde se conecta con las imagenes
app.use(express.static(__dirname + '/Assets'));
// conecta con bootstrap que esta descrgado en el node_modules
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
// se conecta con jquery que esta descargado en node_modules
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
// se conecta con el script.js
app.use('/script', express.static(__dirname + '/js'))



// Configuración de Handlebars
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//fromato para la prueba
//app.engine("handlebars",exphbs.engine({layoutsDir: __dirname + "/views",}));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs.engine({extname: '.handlebars', defaultLayout: 'main', 
    layoutsDir: __dirname + '/views', 
    partialsDir: __dirname + '/views/componentes' 
}));

//Arreglo de productos se programo como objeto y no mostro mayor detalle como las img solo nombre y el icono de img
//por eso se cambio a un arreglo asignando un nombre y a la imagen señalando su formato para ser mostrado
const productos = [
   // "Platano": "/Assets/banana.png",
   { nombre: 'Banana', imagen: 'banana.png', seleccionado:false },
   //"Cebolla": "/Assets/cebollas.png",
   { nombre: 'Cebollas', imagen: 'cebollas.png', seleccionado:false },
    //"Pimenton": "/Assets/pimenton.png",
    { nombre: 'Pimenton', imagen: 'pimenton.png', seleccionado:false },
    //"Papas": "/Assets/papas.png",
    { nombre: 'Papas', imagen: 'papas.png', seleccionado:false },
    //"Lechuga": "/Assets/lechuga.png",
    { nombre: 'Lechuga', imagen: 'lechuga.png', seleccionado:false },
    //"Tomate": "/Assets/tomate.png"
    { nombre: 'Tomate', imagen: 'tomate.png', seleccionado:false }
];

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.render("main", {
        productos: productos,
        carrito: carrito
    });
});

