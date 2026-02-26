function initEstadisticas() {
    const inputPlastico = document.getElementById("inputPlastico");
    const inputPapel = document.getElementById("inputPapel");
    const inputVidrio = document.getElementById("inputVidrio");
    const inputMetal = document.getElementById("inputMetal");

    const plasticoCard = document.querySelector(".plastico").closest(".card");
    const papelCard = document.querySelector(".papel").closest(".card");
    const vidrioCard = document.querySelector(".vidrio").closest(".card");
    const metalCard = document.querySelector(".metal").closest(".card");
    function convertirAKg(valorTexto) {

        valorTexto = valorTexto.toLowerCase().trim();


        if (valorTexto.includes("g") && !valorTexto.includes("kg")) {
            let numero = parseFloat(valorTexto.replace("g", ""));
            return (numero / 1000) || 0;
        }


        if (valorTexto.includes("kg")) {
            let numero = parseFloat(valorTexto.replace("kg", ""));
            return numero || 0;
        }


        return parseFloat(valorTexto) || 0;
    }

    function actualizarCard(input, card, claseCantidad) {
        input.addEventListener("input", () => {

            let valorKg = convertirAKg(input.value);


            card.querySelector(claseCantidad).textContent = valorKg.toFixed(2) + " Kg";
        });
    }

    actualizarCard(inputPlastico, plasticoCard, ".kg");
    actualizarCard(inputPapel, papelCard, ".kg");
    actualizarCard(inputVidrio, vidrioCard, ".kg");
    actualizarCard(inputMetal, metalCard, ".kg");
}