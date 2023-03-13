
//variables para la hora actual
var fechaActual = new Date();
  var hora = fechaActual.getHours();
  var minutos = fechaActual.getMinutes();
  var segundos = fechaActual.getSeconds();
  var horaActual = hora + ":" + minutos + ":" + segundos;

  function agregarIcono() {
    var textarea = document.getElementById("textarea1");
    var icono = '<i class="fas fa-smile"></i>';
    textarea.innerHTML += icono;
  }
// Función que toma la entrada del usuario y devuelve una respuesta del chatbot
function chatbot() {
    // Define un objeto JSON con preguntas y respuestas predefinidas
    let respuestas = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "adios": "¡Hasta luego!",
        "como estas": "Estoy bien, gracias por preguntar. ¿Y tú?",
        "ayuda": "Claro, ¿en qué necesitas ayuda?",
        "hora":"La hora actual es: "+ horaActual,
        "tu nombre":"Mi nombre es Feelbot",
        "como te llamas": "Me llamo Feelbot",
        "estoy bien":"Me alegra, sigue asi",
        "soy curioso":"Hmmmmmm... dejame ver....."
    };
    let valoracion=0;
    let user= `<i class="fa-solid fa-user"></i>`;
    let entrada = document.getElementById("texto1").value;
    let salida2= document.getElementById("textarea1").innerHTML+=`<div id="user">${entrada} : ${user}</div>`;
    let salida = document.getElementById("textarea1")
    let bot= `<i class="fa-solid fa-robot"></i>`;
    entrada = entrada.toLowerCase(); // Convertir la entrada del usuario a minúsculas para una búsqueda insensible a mayúsculas y minúsculas
        
        for (let clave in respuestas) {
            if (entrada.indexOf(clave) !== -1) {
                valoracion=valoracion+1;
                return salida.innerHTML += `<div id="botcito">${bot} : ${respuestas[clave]}<br></div>`; // Devuelve la respuesta correspondiente si se encuentra una clave en la entrada del usuario
                
            }
            if(valoracion>4 && entrada.indexOf(clave) !== -1){
                return salida.innerHTML += `<div id="botcito">${bot} : Eres muy curioso <br></div>`
            }
            }
            
        return salida.innerHTML+=`<div id="botcito">${bot} : Lo siento, no entiendo lo que estás diciendo.<br></div>`; // Respuesta predeterminada si no se encuentra ninguna clave en la entrada del usuario
        
    }
