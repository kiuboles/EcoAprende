// Cargar el módulo de inicio por defecto al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
    cargarCSSModulo("../modulo-inicio/inicio-style.css");
    const response = await fetch('modulo-inicio/inicio-vista.html');
    const html = await response.text();
    cargarContenido(html);
});

// Funcionamiento del menú lateral

// Obtener los elementos del menú
let botonInicio = document.getElementById('btnInicio');
let botonClasificacion = document.getElementById('btnClasificacion');
let botonObjetivos = document.getElementById('btnObjetivos');
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

    console.log("CSS módulos encontrados:", estilosModulos.length);

    estilosModulos.forEach(link => link.remove());
}

// Agregar eventos a los botones del menú
botonObjetivos.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-objetivos/styleObjetivos.css");
    const response = await fetch('modulo-objetivos/objetivos-vista.html');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-objetivos/objetivos-app.js');
    modulo.initObjetivos();
});

botonInicio.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-inicio/inicio-style.css");
    const response = await fetch('modulo-inicio/inicio-vista.html');
    const html = await response.text();
    cargarContenido(html);
});

botonClasificacion.addEventListener('click', async () => {
    limpiarCSSModulos();
    cargarCSSModulo("../modulo-clasificacion/clasificacion-style.css");
    const response = await fetch('modulo-clasificacion/clasificacion-vista.html');
    const html = await response.text();
    cargarContenido(html);
    const modulo = await import('../modulo-clasificacion/clasificacion-app.js');
    modulo.initClasificacion();
});

botonPerfil.addEventListener('click', function () {
    limpiarCSSModulos();
    cargarContenido('perfil en construcción');
});

