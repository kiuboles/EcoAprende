export function initClasificacion() {

    fetch("../backend/reciclaje/clasificacion.php")
    .then(response => response.json())
    .then(jugadores => {

        if(!jugadores || jugadores.length === 0){
            document.getElementById("clasificacionLista").innerHTML =
                "<p>No hay datos todavía</p>";
            return;
        }

        // TOP 1
        document.getElementById("primero").innerHTML = `
            <h2>🥇 ${jugadores[0].nombre}</h2>
            <p>${jugadores[0].total_reciclado} pts</p>
        `;

        // TOP 2
        if(jugadores[1]){
            document.getElementById("segundo").innerHTML = `
                <h2>🥈 ${jugadores[1].nombre}</h2>
                <p>${jugadores[1].total_reciclado} pts</p>
            `;
        }

        // TOP 3
        if(jugadores[2]){
            document.getElementById("tercero").innerHTML = `
                <h2>🥉 ${jugadores[2].nombre}</h2>
                <p>${jugadores[2].total_reciclado} pts</p>
            `;
        }

        const lista = document.getElementById("clasificacionLista");
        lista.innerHTML = "";

        for (let i = 3; i < jugadores.length; i++) {

            const div = document.createElement("div");
            div.classList.add("clasificacion-item");

            div.innerHTML = `
                <span>#${i + 1} ${jugadores[i].nombre}</span>
                <span>${jugadores[i].total_reciclado} pts</span>
            `;

            lista.appendChild(div);
        }
    })
    .catch(error => {
        console.error("Error cargando clasificación:", error);
    });
}