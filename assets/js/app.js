let puntajeUsuario = 0;
let puntajeComputadora = 0;
let rondasRestantes = 0;

function comenzarJuego() {
    rondasRestantes = parseInt(document.getElementById("cantidadRondas").value);
    document.getElementById("cantidadRondas").disabled = true; // Deshabilitamos el campo de entrada después de comenzar el juego
    document.getElementById("resultado").innerHTML = ""; // Reiniciamos el campo de resultado
    document.getElementById("puntaje").innerHTML = ""; // Reiniciamos el campo de puntaje
}

function jugar(jugadaUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];

    if (rondasRestantes === 0) {
        alert("Por favor, ingrese la cantidad de rondas y presione 'Comenzar Juego'.");
        return;
    }

    const jugadaCompu = opciones[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (jugadaUsuario === jugadaCompu) {
        resultado = "¡Es un empate! 🤝";
    } else if (
        (jugadaUsuario === 'piedra' && jugadaCompu === 'tijeras') ||
        (jugadaUsuario === 'papel' && jugadaCompu === 'piedra') ||
        (jugadaUsuario === 'tijeras' && jugadaCompu === 'papel')
    ) {
        resultado = "¡Ganaste! 🥳";
        puntajeUsuario++;
    } else {
        resultado = "Perdiste 😢";
        puntajeComputadora++;
    }

    rondasRestantes--;

    document.getElementById("resultado").innerHTML =
        "Escogiste <strong>" +
        jugadaUsuario +
        "</strong>. La computadora escogió <strong>" +
        jugadaCompu +
        "</strong>. " +
        resultado;

    if (rondasRestantes === 0) {
        let resultadoFinal = "";
        if (puntajeUsuario > puntajeComputadora) {
            resultadoFinal = "¡Has ganado el juego! 🏆";
        } else if (puntajeUsuario < puntajeComputadora) {
            resultadoFinal = "La computadora ha ganado el juego. 😔";
        } else {
            resultadoFinal = "El juego ha terminado en empate. 🤝";
        }
        document.getElementById("puntaje").innerHTML =
            "Puntaje final:<br>Usuario: " + puntajeUsuario + "<br>Computadora: " + puntajeComputadora +
            "<br>" + resultadoFinal;
    }
}
