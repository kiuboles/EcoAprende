// Funcionamiento del menú lateral

// Obtener los elementos del menú
let botonInicio = document.getElementById('btnInicio');
let botonClasificacion = document.getElementById('btnClasificacion');
let botonMascota = document.getElementById('btnMascota');

// Agregar eventos de clic a los botones del menú
botonInicio.addEventListener('click', function() {
    location.href = 'index.html';
});
botonClasificacion.addEventListener('click', function() {
    location.href = 'clasificacion.html';
});
botonMascota.addEventListener('click', function() {
    location.href = 'mascota.html';
});

