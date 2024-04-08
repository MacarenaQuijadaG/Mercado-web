// lee del html
let productos = document.querySelectorAll('img')
let carro = document.querySelector('button')
let contenidoModal = document.querySelector('.modal-content')
let mostrar = new Set();

//Se capturan los elementos del arreglo productos y se les asigna un listener para cada evento necesario
productos.forEach(function (producto) {
    // se quita la opacidad
    producto.addEventListener("dblclick", function () {
        mostrar.delete(producto.getAttribute('src'))
        // la opacidas del producto
        producto.style.opacity = "1"
    });
    // en caso de hacer el click se aplica
    producto.addEventListener('click', function () {
        mostrar.add(producto.getAttribute('src'))
        producto.style.opacity = "0.5"
    })

})
// se muestra el agregado
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'carro') {
            const contenidoCarro = Array.from(mostrar);
            contenidoModal.innerHTML = '';

            if (contenidoCarro.length !== 0) {
                contenidoCarro.forEach(function (productoCarro) {
                    contenidoModal.innerHTML += `<img src="${productoCarro}"  width="200rem">`;
                });
            } else {
                contenidoModal.innerHTML = '<h3 class="text-danger">¡Está vacío!</h3>';
            }
            let modal = new bootstrap.Modal(document.getElementById('Modal'));
            modal.show();
        }
    });
});

