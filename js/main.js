// Cagar el módulo de inicio por defecto al cargar la página
window.addEventListener('DOMContentLoaded', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-inicio/inicio-style.css");
    const response = await fetch('modulo-inicio/inicio-vista.html');
    const html = await response.text();
    cargarContenido(html);
});

// Funcionamiento del menú lateral

// Obtener los elementos del menú
let botonInicio = document.getElementById('btnInicio');
let botonClasificacion = document.getElementById('btnClasificacion');
let btnEstadisticas = document.getElementById('btnEstadisticas');
let btnObjetivos = document.getElementById('btnObjetivos');
let botonPerfil = document.getElementById('btnPerfil');

// Cargar el contenido en el contenedor principal
function cargarContenido(contenido) {
    let contenedor = document.getElementById('vistaPrincipal');
    contenedor.innerHTML = contenido;
}


//Cargar css en head
function cargarCSSModulo(ruta) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ruta;
    link.dataset.tipo = "modulo"; 
    document.head.appendChild(link);
}

function limpiarCSSModulos() {
    const estilosModulos = document.querySelectorAll(
        'link[data-tipo="modulo"]'
    );
    estilosModulos.forEach(link => link.remove());
}

// Agregar eventos a los botones del menú
btnObjetivos.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-objetivos/styleObjetivos.css");
    const response = await fetch('modulo-objetivos/objetivos-vista.php');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-objetivos/objetivos-app.js');
    modulo.initObjetivos();
});

btnInicio.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-inicio/inicio-style.css");
    const response = await fetch('modulo-inicio/inicio-vista.html');
    const html = await response.text();
    cargarContenido(html);
});

btnClasificacion.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-clasificacion/clasificacion-style.css");
    const response = await fetch('modulo-clasificacion/clasificacion-vista.php');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-clasificacion/clasificacion-app.js');
    modulo.initClasificacion();
});

btnEstadisticas.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-estadisticas/estadisticas-style.css");
    const response = await fetch('modulo-estadisticas/estadisticas-vista.php');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-estadisticas/estadisticas-app.js');
    modulo.initEstadisticas();
});


botonPerfil.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-perfil/perfil-style.css");
    const response = await fetch('modulo-perfil/perfil-vista.php');
    const html = await response.text();
    cargarContenido(html);
});

// Detectar parámetro error en la URL
    const params = new URLSearchParams(window.location.search);
    
    if (params.get("error") === "1") {
        const toastEl = document.getElementById("toastError");
        const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
        toast.show();

        // Opcional: limpiar el ?error=1 de la URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }