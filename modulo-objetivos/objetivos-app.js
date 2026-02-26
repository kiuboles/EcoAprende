export function initObjetivos() {

    fetch('../modulo-objetivos/bd.json')
        .then(res => res.json())
        .then(datosBD => {

            const minimos = datosBD.minimos;

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

            // Total de puntos obtenidos
            const totalPuntos = Object.values(datosBD.categorias)
                .reduce((acc, val) => acc + val, 0);

            // Total requerido (100%)
            const totalMinimos = Object.values(minimos)
                .reduce((acc, val) => acc + val, 0);

            // Progreso real
            let progreso = Math.round((totalPuntos / totalMinimos) * 100);
            progreso = Math.min(progreso, 100);

            // Si está bloqueado, limitar progreso
            if (bloqueado) {
                progreso = Math.min(progreso, 99);
            }

            // ===============================
            // 3. PINTAR EN EL DOM
            // ===============================
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
        .catch(err => console.error("Error cargando bd.json:", err));
}