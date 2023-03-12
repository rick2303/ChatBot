
// Inicia la conversación
console.log("¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mantiene la conversación hasta que el usuario diga adiós
rl.on('line', (entrada) => {
    const respuesta = generarRespuesta(entrada);
    console.log(respuesta);
});

function generarRespuesta(entrada) {
    let respuesta = "";
    if (entrada.includes("hola")) {
        respuesta = "¡Hola! ¿Cómo estás?";
    } else if (entrada.includes("bien")) {
        respuesta = "Me alegra escuchar eso.";
    } else if (entrada.includes("mal")) {
        respuesta = "Lo siento mucho. ¿Quieres hablar sobre lo que te preocupa?";
    } else if (entrada.includes("chiste")) {
        respuesta = "¿Por qué los programadores prefieren el frío? Porque les gusta abrir y cerrar paréntesis.";
    } else if (entrada.includes("gracias")) {
        respuesta = "De nada, ¡estoy aquí para ayudarte!";    
    } else if (entrada.includes("adios")) {
        respuesta = "¡Hasta luego!";
        process.exit();
    } else if (entrada.includes("personalidad")) {
        if(entrada === "bien") {
            respuesta = "creo que segun tus preguntas y respuestas eres bueno";
        }
    } 
    return respuesta;
}
