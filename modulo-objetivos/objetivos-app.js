export function initObjetivos() {

    fetch('../backend/reciclaje/objetivos.php')
        .then(res => res.json())
        .then(datosBD => {

            const minimos = datosBD.minimos;

            // Convertir a números
            const categoriasNumericas = {};
            for (const categoria in datosBD.categorias) {
                categoriasNumericas[categoria] = parseFloat(datosBD.categorias[categoria]);
            }

            let bloqueado = false;

            for (const categoria in minimos) {
                if (categoriasNumericas[categoria] < minimos[categoria]) {
                    bloqueado = true;
                    break;
                }
            }

            const totalPuntos = Object.values(categoriasNumericas)
                .reduce((acc, val) => acc + val, 0);

            const totalMinimos = Object.values(minimos)
                .reduce((acc, val) => acc + val, 0);

            let progreso = totalMinimos > 0
                ? Math.round((totalPuntos / totalMinimos) * 100)
                : 0;

            progreso = Math.min(progreso, 100);
            if (bloqueado) progreso = Math.min(progreso, 99);
            const progressBar = document.getElementById("progress-bar");
            const nombreInsignia = document.getElementById("nombreInsignia");
            const textoProgreso = document.getElementById("porcentajeProgreso");

            nombreInsignia.textContent = datosBD.insignia;
            progressBar.style.width = progreso + "%";
            progressBar.setAttribute("aria-valuenow", progreso);
            textoProgreso.textContent = progreso + "%";

            // Cards por categoría
            const objetivosContainer = document.getElementById("objetivosList");
            objetivosContainer.innerHTML = "";

            const categoriasArray = Object.entries(datosBD.categorias);

            let contador = 0;
            let row;

            // recorrer categorías
            categoriasArray.forEach(([categoria, puntos], index) => {

                const minimo = minimos[categoria];

                // 🔥 cada 3 crear nueva fila
                if (contador % 3 === 0) {
                    row = document.createElement("div");
                    row.className = "row mb-4";
                    objetivosContainer.appendChild(row);
                }

                const col = document.createElement("div");
                col.className = "col-md-4";

                col.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="card-title">Recicla ${categoria}</h5>
                            <p class="card-text">${puntos} / ${minimo}</p>
                        </div>
                    </div>
                `;

                row.appendChild(col);
                contador++;
            });

        })
        .catch(err => console.error("Error cargando objetivos:", err));
}