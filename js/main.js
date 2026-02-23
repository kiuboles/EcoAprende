// Funcionamiento del menú lateral

// Obtener los elementos del menú
let botonInicio = document.getElementById('btnInicio');
let botonClasificacion = document.getElementById('btnClasificacion');
let botonMascota = document.getElementById('btnMascota');
let botonPerfil = document.getElementById('btnPerfil');

// Cargar el contenido en el contenedor principal
function cargarContenido(contenido) {
    let contenedor = document.getElementById('vistaPrincipal');
    contenedor.innerHTML = contenido;
}


// Agregar eventos a los botones del menú
botonMascota.addEventListener('click', async () => {
    const response = await fetch('modulo-objetivos/objetivos-vista.html');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-objetivos/objetivos-app.js');
    modulo.initObjetivos();
});

botonInicio.addEventListener('click', function () {
    cargarContenido('inicio en construcción');
});

botonClasificacion.addEventListener('click', function () {
    cargarContenido('clasificación en construcción');
});

botonPerfil.addEventListener('click', function () {
    cargarContenido('perfil en construcción');
});

