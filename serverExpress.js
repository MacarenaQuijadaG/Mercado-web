const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))


// Configuración de Handlebars
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//fromato para la prueba
//app.engine("handlebars",exphbs.engine({layoutsDir: __dirname + "/views",}));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs.engine({extname: '.handlebars', defaultLayout: 'main', 
    layoutsDir: __dirname + '/views', 
    partialsDir: __dirname + '/views/componentes' 
}));


app.get("/", (req, res) => {
    res.render("main", { productos });
});

//Arreglo de productos se programo como objeto y no mostro mayor detalle como las img solo nombre y el icono de img
//por eso se cambio a un arreglo asignando un nombre y a la imagen señalando su formato para ser mostrado
const productos = [
   // "Platano": "/Assets/banana.png",
   { nombre: 'banana', imagen: 'banana.png', seleccionado:false },
   //"Cebolla": "/Assets/cebollas.png",
   { nombre: 'cebollas', imagen: 'cebollas.png', seleccionado:false },
    //"Pimenton": "/Assets/pimenton.png",
    { nombre: 'pimenton', imagen: 'pimenton.png', seleccionado:false },
    //"Papas": "/Assets/papas.png",
    { nombre: 'papas', imagen: 'papas.png', seleccionado:false },
    //"Lechuga": "/Assets/lechuga.png",
    { nombre: 'lechuga', imagen: 'lechuga.png', seleccionado:false },
    //"Tomate": "/Assets/tomate.png"
    { nombre: 'tomate', imagen: 'tomate.png', seleccionado:false }
];

