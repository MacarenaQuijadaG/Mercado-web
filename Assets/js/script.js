$(document).ready(function () {
    $('.producto').click(function (e) {
        e.preventDefault();
        $(this).addClass('seleccionado');
        var nombreProducto = $(this).data('nombre');
        $.post('/seleccionar', { nombre: nombreProducto }, function (data) {
        });
    });

    $('.producto').dblclick(function (e) {
        e.preventDefault();
        $(this).removeClass('seleccionado');
        var nombreProducto = $(this).data('nombre');
        $.post('/deseleccionar', { nombre: nombreProducto }, function (data) {
        });
    });
});