export function initObjetivos() {
    // ===============================
    // 1. SIMULACIÓN DE DATOS DE BD
    // ===============================
    const datosBD = {
        insignia: "Tortuga",
        categorias: {
            latas: 5,
            cartón: 10,
            vidrio: 15
        }
    };

    // Mínimos requeridos por categoría
    const minimos = {
        latas: 10,
        cartón: 16,
        vidrio: 19
    };


    // ===============================
    // 2. PROCESAMIENTO DE PUNTOS
    // ===============================
    let bloqueado = false;
    let categoriaBloqueante = "";

    for (const categoria in minimos) {
        if (datosBD.categorias[categoria] < minimos[categoria]) {
            bloqueado = true;
            categoriaBloqueante = categoria;
            break;
        }
    }

    // Total de puntos
    const totalPuntos = Object.values(datosBD.categorias)
        .reduce((acc, val) => acc + val, 0);

    // Normalizar a porcentaje (máx 100)
    let progreso = Math.min(totalPuntos, 100);

    // Si está bloqueado, limitar progreso
    if (bloqueado) {
        progreso = 50; // límite visual cuando no cumple reglas
    }

    // ===============================
    // 3. PINTAR EN EL DOM
    // ===============================
    const progressBar = document.getElementById("progress-bar");
    const nombreInsignia = document.getElementById("nombreInsignia");
    const textoProgreso = document.getElementById("porcentajeProgreso");

    // Nombre de la insignia
    nombreInsignia.textContent = datosBD.insignia;

    // Barra de progreso
    progressBar.style.width = progreso + "%";
    progressBar.setAttribute("aria-valuenow", progreso);
    textoProgreso.textContent = progreso + "%";


    // crear cards de bootstrapt como tarjetas de progreso por categoría
    const objetivosContainer = document.getElementById("objetivosList");

    for (const categoria in datosBD.categorias) {
        const puntos = datosBD.categorias[categoria];
        const minimo = minimos[categoria];

        const card = document.createElement("div");
        card.className = "card mx-3";
        card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Recicla ${categoria}:</h5>
            <p class="card-text">${puntos} / ${minimo}</p>
        </div>
    `;
        objetivosContainer.appendChild(card);
    }
}