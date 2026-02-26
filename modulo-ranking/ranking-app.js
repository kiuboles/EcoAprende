// 🔥 BASE SIMULADA
const jugadores = [
    { nombre: "Sofía", puntos: 850 },
    { nombre: "Mateo", puntos: 1200 },
    { nombre: "Valentina", puntos: 980 },
    { nombre: "Lucas", puntos: 400 },
    { nombre: "Emma", puntos: 720 },
    { nombre: "Diego", puntos: 600 },
    { nombre: "Camila", puntos: 500 },
    { nombre: "Andrés", puntos: 300 }
];

// Ordenar de mayor a menor
jugadores.sort((a, b) => b.puntos - a.puntos);

// TOP 1
document.getElementById("primero").innerHTML = `
    <h2>🥇 ${jugadores[0].nombre}</h2>
    <p>${jugadores[0].puntos} pts</p>
`;

// TOP 2
document.getElementById("segundo").innerHTML = `
    <h2>🥈 ${jugadores[1].nombre}</h2>
    <p>${jugadores[1].puntos} pts</p>
`;

// TOP 3
document.getElementById("tercero").innerHTML = `
    <h2>🥉 ${jugadores[2].nombre}</h2>
    <p>${jugadores[2].puntos} pts</p>
`;

// DEL 4 EN ADELANTE
const lista = document.getElementById("rankingLista");

for (let i = 3; i < jugadores.length; i++) {
    const div = document.createElement("div");
    div.classList.add("ranking-item");

    div.innerHTML = `
        <span>#${i + 1} ${jugadores[i].nombre}</span>
        <span>${jugadores[i].puntos} pts</span>
    `;

    lista.appendChild(div);
}