const preguntas = [
    {
        id: 1,
        pregunta: "¿Cuál es el río más largo del mundo?", respuestaCorrecta: 1,
        respuestas: [
            { id: 1, respuesta: "El Amazonas" },
            { id: 2, respuesta: "El Nilo" },
            { id: 3, respuesta: "El Mississippi" }
        ]
    },
    {
        id: 2,
        pregunta: "¿Cómo se llama la Reina del Reino Unido?", respuestaCorrecta: 2,
        respuestas: [
            { id: 1, respuesta: "Isabel I" },
            { id: 2, respuesta: "Isabel II" },
            { id: 3, respuesta: "Diana" }
        ]
    },
    {
        id: 3,
        pregunta: "¿En qué continente está Ecuador?", respuestaCorrecta: 1,
        respuestas: [
            { id: 1, respuesta: "América" },
            { id: 2, respuesta: "África" },
            { id: 3, respuesta: "Asia" }
        ]
    },
    {
        id: 4,
        pregunta: "¿Dónde se originaron los juegos olímpicos?", respuestaCorrecta: 1,
        respuestas: [
            { id: 1, respuesta: "En  Grecia. Se llaman así porque se celebraban en la ciudad de Olimpia." },
            { id: 2, respuesta: "En Roma. Se llaman así porque se celebraban en la ciudad de Olimpia." },
            { id: 3, respuesta: "En Ecuador. Se llaman así porque se celebraban en la ciudad de Olimpia." }
        ]
    },
    {
        id: 5,
        pregunta: "¿Qué tipo de animal es la ballena?", respuestaCorrecta: 3,
        respuestas: [
            { id: 1, respuesta: "La ballena es un crustáceo marino de hasta 30 metros de longitud." },
            { id: 2, respuesta: "La ballena es un Carnívoro marino de hasta 30 metros de longitud." },
            { id: 3, respuesta: "La ballena es un mamífero marino de hasta 30 metros de longitud." }
        ]
    },
    {
        id: 6,
        pregunta: "¿Cuántos huesos hay en el cuerpo humano?", respuestaCorrecta: 2,
        respuestas: [
            { id: 1, respuesta: "Alrededor de 300 huesos." },
            { id: 2, respuesta: "Alrededor de 206 huesos." },
            { id: 3, respuesta: "Alrededor de 500 huesos." }
        ]
    }
];
//Esto es una prueba
let listaPreguntasOk = [];
let idPregunta = darIdPregunta();
let puntaje = 0;
var myModal = new bootstrap.Modal(document.getElementById('mensajeModal'), {
    keyboard: false
  })
desplegarPregunta();
function desplegarPregunta() {
    document.getElementById("preguntaHtml").innerHTML = preguntas[idPregunta].pregunta;
    document.getElementById("respuestaUno").innerHTML = preguntas[idPregunta].respuestas[0].respuesta;
    document.getElementById("respuestaDos").innerHTML = preguntas[idPregunta].respuestas[1].respuesta;
    document.getElementById("respuestaTres").innerHTML = preguntas[idPregunta].respuestas[2].respuesta;
}
function validarRespuesta(respuestaSeleccionada) { // 1, 2, 3
    if (preguntas[idPregunta].respuestaCorrecta == respuestaSeleccionada) {
        mostrarMensaje(respuestaSeleccionada + " esta respuesta es correcta");
        puntaje += 10;
        document.getElementById("puntaje").innerHTML = "Puntaje: " + puntaje;
    }
    else {
        mostrarMensaje("Esta respuesta no es correcta");
    }
    idPregunta = darIdPregunta();
    desplegarPregunta(idPregunta);
}
function darIdPregunta() {
    let idPreguntaInicial = Math.floor(Math.random() * 6); // 0,1,2,3,4,5
    let index = listaPreguntasOk.findIndex(e => e == idPreguntaInicial);
    if ( index == -1) {//mientras no existe el elemento en el arreglo sale un -1
        listaPreguntasOk.push(idPreguntaInicial);//sale el index, # de posicion del elemento
    } else {
        if (listaPreguntasOk.length < preguntas.length) {
           idPreguntaInicial = darIdPregunta() ;
        } else if (listaPreguntasOk.length == preguntas.length) {
            finDelJuego();
        }
    }
    return idPreguntaInicial;
}
function finDelJuego() {
    let porcentaje = 0;
    let maximoPuntaje = (preguntas.length * 10);
    if (puntaje == maximoPuntaje) {
        mostrarMensaje("Felicitaciones lo has hecho a la perfeccion con el 100%");
    } else {
        if (puntaje != 0) {
            porcentaje = Math.round((puntaje / maximoPuntaje) *100) ;
            mostrarMensaje("Has logrado solo el " + porcentaje + "% de las respuestas correctas");
        } else {
            mostrarMensaje("Lo siento, pero no has tenido ninguna respuesta correcta");
        }
    }
}
function mostrarMensaje(mensaje) {
    document.getElementById("tituloAlerta").innerHTML="titulo";
    document.getElementById("cuerpoModal").innerHTML=mensaje;
    myModal.show();
}

