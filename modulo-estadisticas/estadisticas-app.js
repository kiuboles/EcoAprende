export function initEstadisticas() {

    fetch('../backend/reciclaje/estadisticas.php')
        .then(res => res.json())
        .then(datos => {

            const plastico = document.querySelector(".plastico .kg");
            const papel = document.querySelector(".papel .kg");
            const vidrio = document.querySelector(".vidrio .kg");
            const metal = document.querySelector(".metal .kg");

            if (!plastico || !papel || !vidrio || !metal) {
                console.warn("Las cards aún no están en el DOM");
                return;
            }

            plastico.textContent = Math.round(datos.plastico) + " pts";
            papel.textContent = Math.round(datos.papel) + " pts";
            vidrio.textContent = Math.round(datos.vidrio) + " pts";
            metal.textContent = Math.round(datos.metal) + " pts";

        })
        .catch(error => {
            console.error("Error cargando estadísticas:", error);
        });
}