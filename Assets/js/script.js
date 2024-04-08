// Selecciona todos los elementos <img>
let productos = document.querySelectorAll('img');

// Selecciona el botón del carrito
let carro = document.getElementById('carro');

// Selecciona el contenido del modal
let contenidoModal = document.querySelector('.modal-content');

// Define un conjunto para almacenar los productos seleccionados
let mostrar = new Set();

// Asigna eventos a los productos
productos.forEach(function (producto) {
    // Escucha el evento de doble clic para remover el producto del conjunto
    producto.addEventListener("dblclick", function () {
        mostrar.delete(producto.getAttribute('src'));
        producto.style.opacity = "1";
    });
    
    // Escucha el evento de clic para agregar el producto al conjunto
    producto.addEventListener('click', function () {
        mostrar.add(producto.getAttribute('src'));
        producto.style.opacity = "0.5";
    });
});

// Escucha el evento de clic en el botón del carrito
carro.addEventListener('click', function () {
    // Limpia el contenido del modal
    contenidoModal.innerHTML = '';

    // Verifica si hay productos seleccionados
    if (mostrar.size !== 0) {
        // Agrega cada producto seleccionado al modal
        mostrar.forEach(function (producto) {
            contenidoModal.innerHTML += `<img src="${producto}" width="200rem">`;
        });
    } else {
        // Muestra un mensaje si no hay productos seleccionados
        contenidoModal.innerHTML = '<h3 class="text-danger">¡Está vacío!</h3>';
    }

    // Muestra el modal
    let modal = new bootstrap.Modal(document.getElementById('Modal'));
    modal.show();
});
